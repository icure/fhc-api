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

export class fhcChaptercontrollerApi {
  host: string
  headers: Array<XHR.Header>
  fetchImpl?: (input: RequestInfo, init?: RequestInit) => Promise<Response>
  constructor(
    host: string,
    headers: any,
    fetchImpl?: (input: RequestInfo, init?: RequestInit) => Promise<Response>
  ) {
    this.host = host
    this.headers = Object.keys(headers).map(k => new XHR.Header(k, headers[k]))
    this.fetchImpl = fetchImpl
  }

  setHeaders(h: Array<XHR.Header>) {
    this.headers = h
  }

  handleError(e: XHR.Data) {
    if (e.status == 401) throw Error("auth-failed")
    else throw Error("api-error" + e.status)
  }

  agreementRequestsConsultationUsingGET(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpFirstName: string,
    hcpLastName: string,
    patientSsin: string,
    patientDateOfBirth: number,
    patientFirstName: string,
    patientLastName: string,
    patientGender: string,
    civicsVersion?: string,
    paragraph?: string,
    start?: number,
    end?: number,
    reference?: string
  ): Promise<models.AgreementResponse | any> {
    let _body = null

    const _url =
      this.host +
      "/chap4/consult/{patientSsin}".replace("{patientSsin}", patientSsin + "") +
      "?ts=" +
      new Date().getTime() +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (patientDateOfBirth ? "&patientDateOfBirth=" + patientDateOfBirth : "") +
      (patientFirstName ? "&patientFirstName=" + patientFirstName : "") +
      (patientLastName ? "&patientLastName=" + patientLastName : "") +
      (patientGender ? "&patientGender=" + patientGender : "") +
      (civicsVersion ? "&civicsVersion=" + civicsVersion : "") +
      (paragraph ? "&paragraph=" + paragraph : "") +
      (start ? "&start=" + start : "") +
      (end ? "&end=" + end : "") +
      (reference ? "&reference=" + reference : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("GET", _url, headers, _body)
      .then(doc => new models.AgreementResponse(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  cancelAgreementUsingDELETE(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpFirstName: string,
    hcpLastName: string,
    patientSsin: string,
    patientDateOfBirth: number,
    patientFirstName: string,
    patientLastName: string,
    patientGender: string,
    decisionReference?: string,
    iorequestReference?: string
  ): Promise<models.AgreementResponse | any> {
    let _body = null

    const _url =
      this.host +
      "/chap4/cancel/{patientSsin}".replace("{patientSsin}", patientSsin + "") +
      "?ts=" +
      new Date().getTime() +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (patientDateOfBirth ? "&patientDateOfBirth=" + patientDateOfBirth : "") +
      (patientFirstName ? "&patientFirstName=" + patientFirstName : "") +
      (patientLastName ? "&patientLastName=" + patientLastName : "") +
      (patientGender ? "&patientGender=" + patientGender : "") +
      (decisionReference ? "&decisionReference=" + decisionReference : "") +
      (iorequestReference ? "&iorequestReference=" + iorequestReference : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("DELETE", _url, headers, _body)
      .then(doc => new models.AgreementResponse(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  closeAgreementUsingDELETE(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpFirstName: string,
    hcpLastName: string,
    patientSsin: string,
    patientDateOfBirth: number,
    patientFirstName: string,
    patientLastName: string,
    patientGender: string,
    decisionReference: string
  ): Promise<models.AgreementResponse | any> {
    let _body = null

    const _url =
      this.host +
      "/chap4/close/{patientSsin}".replace("{patientSsin}", patientSsin + "") +
      "?ts=" +
      new Date().getTime() +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (patientDateOfBirth ? "&patientDateOfBirth=" + patientDateOfBirth : "") +
      (patientFirstName ? "&patientFirstName=" + patientFirstName : "") +
      (patientLastName ? "&patientLastName=" + patientLastName : "") +
      (patientGender ? "&patientGender=" + patientGender : "") +
      (decisionReference ? "&decisionReference=" + decisionReference : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("DELETE", _url, headers, _body)
      .then(doc => new models.AgreementResponse(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  findParagraphsUsingGET(
    searchString: string,
    language: string
  ): Promise<Array<models.ParagraphPreview> | any> {
    let _body = null

    const _url =
      this.host +
      "/chap4/sam/search/{searchString}/{language}"
        .replace("{searchString}", searchString + "")
        .replace("{language}", language + "") +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("GET", _url, headers, _body)
      .then(doc => (doc.body as Array<JSON>).map(it => new models.ParagraphPreview(it)))
      .catch(err => this.handleError(err))
  }
  findParagraphsWithCnkUsingGET(
    cnk: number,
    language: string
  ): Promise<Array<models.ParagraphPreview> | any> {
    let _body = null

    const _url =
      this.host +
      "/chap4/sam/bycnk/{cnk}/{language}"
        .replace("{cnk}", cnk + "")
        .replace("{language}", language + "") +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("GET", _url, headers, _body)
      .then(doc => (doc.body as Array<JSON>).map(it => new models.ParagraphPreview(it)))
      .catch(err => this.handleError(err))
  }
  getAddedDocumentUsingGET(
    chapterName: string,
    paragraphName: string,
    verseSeq: number,
    docSeq: number,
    language: string
  ): Promise<ArrayBuffer | any> {
    let _body = null

    const _url =
      this.host +
      "/chap4/sam/docpreview/{chapterName}/{paragraphName}/{verseSeq}/{docSeq}/{language}"
        .replace("{chapterName}", chapterName + "")
        .replace("{paragraphName}", paragraphName + "")
        .replace("{verseSeq}", verseSeq + "")
        .replace("{docSeq}", docSeq + "")
        .replace("{language}", language + "") +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("GET", _url, headers, _body)
      .then(doc => doc.body)
      .catch(err => this.handleError(err))
  }
  getAddedDocumentsUsingGET(
    chapterName: string,
    paragraphName: string
  ): Promise<Array<models.AddedDocumentPreview> | any> {
    let _body = null

    const _url =
      this.host +
      "/chap4/sam/docpreviews/{chapterName}/{paragraphName}"
        .replace("{chapterName}", chapterName + "")
        .replace("{paragraphName}", paragraphName + "") +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("GET", _url, headers, _body)
      .then(doc => (doc.body as Array<JSON>).map(it => new models.AddedDocumentPreview(it)))
      .catch(err => this.handleError(err))
  }
  getMppsForParagraphUsingGET(
    chapterName: string,
    paragraphName: string
  ): Promise<Array<models.MppPreview> | any> {
    let _body = null

    const _url =
      this.host +
      "/chap4/sam/mpps/{chapterName}/{paragraphName}"
        .replace("{chapterName}", chapterName + "")
        .replace("{paragraphName}", paragraphName + "") +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("GET", _url, headers, _body)
      .then(doc => (doc.body as Array<JSON>).map(it => new models.MppPreview(it)))
      .catch(err => this.handleError(err))
  }
  getParagraphInfosUsingGET(
    chapterName: string,
    paragraphName: string
  ): Promise<models.ParagraphInfos | any> {
    let _body = null

    const _url =
      this.host +
      "/chap4/sam/info/{chapterName}/{paragraphName}"
        .replace("{chapterName}", chapterName + "")
        .replace("{paragraphName}", paragraphName + "") +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("GET", _url, headers, _body)
      .then(doc => new models.ParagraphInfos(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  getVtmNamesForParagraphUsingGET(
    chapterName: string,
    paragraphName: string,
    language: string
  ): Promise<Array<string> | any> {
    let _body = null

    const _url =
      this.host +
      "/chap4/sam/vtms/{chapterName}/{paragraphName}/{language}"
        .replace("{chapterName}", chapterName + "")
        .replace("{paragraphName}", paragraphName + "")
        .replace("{language}", language + "") +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("GET", _url, headers, _body)
      .then(doc => (doc.body as Array<JSON>).map(it => JSON.parse(JSON.stringify(it))))
      .catch(err => this.handleError(err))
  }
  requestAgreementUsingPOST(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpFirstName: string,
    hcpLastName: string,
    patientSsin: string,
    patientDateOfBirth: number,
    patientFirstName: string,
    patientLastName: string,
    patientGender: string,
    requestType: string,
    civicsVersion: string,
    paragraph: string,
    appendices: Array<models.Appendix>,
    verses?: string,
    incomplete?: boolean,
    start?: number,
    end?: number,
    decisionReference?: string,
    ioRequestReference?: string
  ): Promise<models.AgreementResponse | any> {
    let _body = null
    _body = appendices

    const _url =
      this.host +
      "/chap4/new/{patientSsin}/{civicsVersion}/{requestType}/{paragraph}"
        .replace("{patientSsin}", patientSsin + "")
        .replace("{requestType}", requestType + "")
        .replace("{civicsVersion}", civicsVersion + "")
        .replace("{paragraph}", paragraph + "") +
      "?ts=" +
      new Date().getTime() +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (patientDateOfBirth ? "&patientDateOfBirth=" + patientDateOfBirth : "") +
      (patientFirstName ? "&patientFirstName=" + patientFirstName : "") +
      (patientLastName ? "&patientLastName=" + patientLastName : "") +
      (patientGender ? "&patientGender=" + patientGender : "") +
      (verses ? "&verses=" + verses : "") +
      (incomplete ? "&incomplete=" + incomplete : "") +
      (start ? "&start=" + start : "") +
      (end ? "&end=" + end : "") +
      (decisionReference ? "&decisionReference=" + decisionReference : "") +
      (ioRequestReference ? "&ioRequestReference=" + ioRequestReference : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("POST", _url, headers, _body)
      .then(doc => new models.AgreementResponse(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
}
