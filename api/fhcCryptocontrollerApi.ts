/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { XHR } from "./XHR"
import * as models from "../model/models"

export class fhcCryptocontrollerApi {
  host: string
  headers: Array<XHR.Header>
  constructor(host: string, headers: any) {
    this.host = host
    this.headers = Object.keys(headers).map(k => new XHR.Header(k, headers[k]))
  }

  setHeaders(h: Array<XHR.Header>) {
    this.headers = h
  }

  handleError(e: XHR.Data) {
    if (e.status == 401) throw Error("auth-failed")
    else throw Error("api-error" + e.status)
  }

  decryptFileUsingPOST(
    xFHCKeystoreId: string,
    xFHCPassPhrase: string,
    encryptedData: any
  ): Promise<Array<string> | any> {
    let _body = null
    encryptedData &&
      (_body = _body || new FormData()).append(
        "encryptedData",
        new Blob(encryptedData, { type: "application/octet-stream" })
      )
    const _url = this.host + "/crypto/decryptFile" + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "multipart/form-data"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("POST", _url, headers, _body)
      .then(doc => (doc.body as Array<JSON>).map(it => JSON.parse(JSON.stringify(it))))
      .catch(err => this.handleError(err))
  }
  decryptUsingPOST(
    xFHCKeystoreId: string,
    xFHCPassPhrase: string,
    encryptedData: string
  ): Promise<Array<string> | any> {
    let _body = null
    _body = encryptedData

    const _url = this.host + "/crypto/decrypt" + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/octet-stream"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("POST", _url, headers, _body)
      .then(doc => (doc.body as Array<JSON>).map(it => JSON.parse(JSON.stringify(it))))
      .catch(err => this.handleError(err))
  }
  encryptFileUsingPOST(
    xFHCKeystoreId: string,
    xFHCPassPhrase: string,
    identifier: string,
    id: string,
    plainData: any,
    applicationId?: string
  ): Promise<Array<string> | any> {
    let _body = null
    plainData &&
      (_body = _body || new FormData()).append(
        "plainData",
        new Blob(plainData, { type: "application/octet-stream" })
      )
    const _url =
      this.host +
      "/crypto/encryptFile/{identifier}/{id}"
        .replace("{identifier}", identifier + "")
        .replace("{id}", id + "") +
      "?ts=" +
      new Date().getTime() +
      (applicationId ? "&applicationId=" + applicationId : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "multipart/form-data"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("POST", _url, headers, _body)
      .then(doc => (doc.body as Array<JSON>).map(it => JSON.parse(JSON.stringify(it))))
      .catch(err => this.handleError(err))
  }
  encryptUsingPOST(
    xFHCKeystoreId: string,
    xFHCPassPhrase: string,
    identifier: string,
    id: string,
    plainData: string,
    applicationId?: string
  ): Promise<Array<string> | any> {
    let _body = null
    _body = plainData

    const _url =
      this.host +
      "/crypto/encrypt/{identifier}/{id}"
        .replace("{identifier}", identifier + "")
        .replace("{id}", id + "") +
      "?ts=" +
      new Date().getTime() +
      (applicationId ? "&applicationId=" + applicationId : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/octet-stream"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("POST", _url, headers, _body)
      .then(doc => (doc.body as Array<JSON>).map(it => JSON.parse(JSON.stringify(it))))
      .catch(err => this.handleError(err))
  }
}