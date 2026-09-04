---
name: fhc-release
description: Use when releasing a new version of @icure/be-fhc-api to NPM and GitHub from this repo — "release fhc-api", "publish a new version", "cut a release", "bump and publish".
---

# Releasing @icure/be-fhc-api

Publishes a new version to NPM and GitHub in one pass: preflight checks, version bump, release notes in RELEASES.md, tag, `yarn run publish`, GitHub release.

**Each step gates the next. If a step fails, stop and report — never continue past a failed check.**

**Remote name:** this repo's remote is `github`, not `origin` — use `github` in every fetch/push.

**Interactive prompts:** commits, tags and pushes are SSH-signed through the Secretive agent, which may refuse to sign from a non-interactive shell (`agent refused operation` / `Permission denied (publickey)`). If that happens, don't retry blindly: ask the user to run the exact same command with the `!` prefix so they can approve Secretive's prompt. One exception: a refusal can be transient (`error: unable to sign the tag`, moments after commits signed fine) — retry the exact command once, and only escalate if it fails again. Remote-only operations (deleting a tag/release) can alternatively go through `gh api`, which uses an HTTPS token and needs no SSH.

## 1. Preflight — everything pushed on release/v5

```bash
git fetch github                       # MUST succeed — see below
git status --porcelain                 # must be empty
git branch --show-current              # must be release/v5
git rev-parse HEAD github/release/v5   # must be identical
gh api repos/icure/fhc-api/branches/release/v5 --jq '.commit.sha'   # must equal HEAD
```

Any mismatch → stop and tell the user what differs (uncommitted files, unpushed commits, wrong branch).

**A failed `git fetch` is a hard stop, never a warning to step over.** `github/release/v5` is a _local_ ref: when the fetch fails (Secretive refusing SSH, no network), `git rev-parse` compares HEAD against a stale ref and reports _identical_ — a false green that hides every commit and release made since the last successful fetch. Releasing from that state means re-using a version that is already published and immutable on NPM, from a tree missing other people's work. Ask the user to run `! git fetch github`, then start preflight over.

The `gh api` line is an independent cross-check: it reads the real branch head over HTTPS, needs no SSH, and catches a stale ref even when the fetch looked fine. Where it disagrees with the local ref, trust `gh api`.

## 2. NPM authentication

```bash
npm whoami
```

If it fails, `npm login` is interactive — ask the user to run `! npm login` themselves, then re-check `npm whoami`.

## 3. Check the @icure/api peer dependency

`@icure/be-fhc-api` declares `@icure/api` as a peerDependency. Before choosing a version, verify the range still matches what the code is built and tested against:

```bash
npm view @icure/api version                                        # latest published @icure/api
jq '.peerDependencies, .devDependencies["@icure/api"]' package.json
```

If the release is meant to support a newer @icure/api (e.g. after a tsdk-release in ../icure-typescript-sdk), widen/adjust the `peerDependencies` range and the `@icure/api` devDependency together, and make sure the build and tests pass against it before continuing.

## 4. Choose the new version

```bash
npm view @icure/be-fhc-api versions --json   # existing versions — the new one must NOT be in this list
git log --no-merges --format='%s' $(git describe --tags --abbrev=0)..HEAD
```

Apply semver to the commits since the last release: bug fixes / dependency-range updates only → patch; new endpoints/models/FHC features → minor bump of the 0.x line. Propose the version to the user and get confirmation before proceeding. It must not exist on NPM and must be greater than the latest published version of the v5 line (0.6.x).

Note: package.json is sometimes bumped ahead of publishing (a version greater than the latest on NPM). In that case confirm with the user whether to release that pending version or bump again.

## 5. Bump and commit

Edit `"version"` in `package.json` (skip if the pending bump from step 4 is the version being released), then:

```bash
git add package.json && git commit -m "Bumped version to <VERSION>"
BUMP_SHA=$(git rev-parse HEAD)
```

If no new commit was needed, `BUMP_SHA` is the commit that introduced the version into package.json.

## 6. Draft release notes in RELEASES.md

Append an entry at the end of `RELEASES.md`, in the exact format used by `scripts/create-releases.ts`:

```markdown
## [MISSING] <VERSION> (<YYYY-MM-DD>)

<!-- tag: <VERSION> | target: <BUMP_SHA> | prerelease: false -->

- <commit subject 1>
- <commit subject 2>
```

The `[MISSING]` marker is required: entries without a status marker are treated as already published and skipped by `create-releases.ts`.

- Bullets come from the commit subjects since the previous release (step 4); drop version-bump/merge/noise commits and deduplicate.
- Prerelease versions (`-RC.x`, `-beta.x`) → `prerelease: true`.
- Show the drafted entry to the user for review before continuing.

```bash
git add RELEASES.md && git commit -m "Added release notes for <VERSION>"
```

The pre-commit prettier hook may insert a blank line between the entry header and the metadata comment — that's fine, the parser handles it.

## 7. Tag and push

Tags use the plain version, no `v` prefix, on the bump commit. `tag.gpgSign` is enabled in this repo, so tags are annotated and need a message — a bare `git tag <VERSION>` fails with "no tag message?":

```bash
git tag -m <VERSION> <VERSION> $BUMP_SHA
git push github release/v5 <VERSION>
```

## 8. Publish to NPM

```bash
yarn run publish
```

This builds (`prepare`) and runs `npm publish` from `dist/`. NPM requires a fresh one-time password at publish time, even right after a successful `npm login` — expect an `EOTP` error or a masked browser-auth URL. When that happens the build is already done: ask the user to run `! cd dist && npm publish` themselves (or `! cd dist && npm publish --otp=<code>`) and complete the OTP flow.

Always verify before continuing: `npm view @icure/be-fhc-api@<VERSION> version --prefer-online` must return the version — a 404 means the publish did NOT complete (e.g. the OTP prompt was abandoned), regardless of how much tarball output was printed.

`--prefer-online` is not optional: a plain `npm view` serves a cached 404 for some minutes after a _successful_ publish, so without it you will report a working release as failed and risk a pointless re-publish. When the answer still looks wrong, query the registry directly, which bypasses NPM's cache entirely — and since this release usually exists to widen the `@icure/api` range, check the published range came through too:

```bash
curl -s https://registry.npmjs.org/@icure/be-fhc-api | python3 -c "import json,sys; d=json.load(sys.stdin); v=d['versions'].get('<VERSION>'); print(d['dist-tags'], v and v.get('peerDependencies'))"
```

## 9. Create the GitHub release

```bash
bun scripts/create-releases.ts --only <VERSION>
```

It reads the RELEASES.md entry and creates the release on the pushed tag. Verify with `gh release view <VERSION>`. Then remove the `[MISSING]` marker from the entry's header in RELEASES.md (no marker = published), commit (`Marked <VERSION> as released`) and push.

## Failure recovery

| Failed step                                         | Recovery                                                                                |
| --------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Git command: `agent refused operation`              | User runs the same command with `!` prefix and approves Secretive                       |
| `npm publish` fails with `EOTP` / auth URL          | User runs `! cd dist && npm publish` and completes the OTP; then verify with `npm view` |
| `yarn run publish` (8)                              | Fix the build issue; tag and notes are fine — retry publish only                        |
| NPM publish succeeded but GitHub release (9) failed | Re-run step 9 only; never re-publish to NPM                                             |
| Wrong version published                             | NPM versions are immutable — release a new patch, don't unpublish                       |
