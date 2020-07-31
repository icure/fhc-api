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

export class fhcRecipeControllerApi {
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

  handleError(e: XHR.XHRError) {
    throw e
  }

  createPrescriptionUsingPOST(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    hcpQuality: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpName: string,
    xFHCPassPhrase: string,
    prescription: models.PrescriptionRequest
  ): Promise<models.Prescription | any> {
    let _body = null
    _body = prescription

    const _url =
      this.host +
      "/recipe" +
      "?ts=" +
      new Date().getTime() +
      (hcpQuality ? "&hcpQuality=" + hcpQuality : "") +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpName ? "&hcpName=" + hcpName : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.Prescription(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  createPrescriptionV4UsingPOST(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    hcpQuality: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpName: string,
    xFHCPassPhrase: string,
    prescription: models.PrescriptionRequest
  ): Promise<models.Prescription | any> {
    let _body = null
    _body = prescription

    const _url =
      this.host +
      "/recipe/v4" +
      "?ts=" +
      new Date().getTime() +
      (hcpQuality ? "&hcpQuality=" + hcpQuality : "") +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpName ? "&hcpName=" + hcpName : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.Prescription(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  getGalToAdministrationUnitUsingGET(galId: string): Promise<models.Code | any> {
    let _body = null

    const _url =
      this.host +
      "/recipe/gal/{galId}".replace("{galId}", galId + "") +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.Code(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  getPrescriptionMessageUsingGET(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    hcpQuality: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpName: string,
    xFHCPassPhrase: string,
    rid: string
  ): Promise<models.Kmehrmessage | any> {
    let _body = null

    const _url =
      this.host +
      "/recipe/prescription/{rid}".replace("{rid}", rid + "") +
      "?ts=" +
      new Date().getTime() +
      (hcpQuality ? "&hcpQuality=" + hcpQuality : "") +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpName ? "&hcpName=" + hcpName : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.Kmehrmessage(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  getPrescriptionUsingGET(rid: string): Promise<models.PrescriptionFullWithFeedback | any> {
    let _body = null

    const _url =
      this.host + "/recipe/{rid}".replace("{rid}", rid + "") + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.PrescriptionFullWithFeedback(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  listFeedbacksUsingGET(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    hcpQuality: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpName: string,
    xFHCPassPhrase: string
  ): Promise<Array<models.Feedback> | any> {
    let _body = null

    const _url =
      this.host +
      "/recipe/all/feedbacks" +
      "?ts=" +
      new Date().getTime() +
      (hcpQuality ? "&hcpQuality=" + hcpQuality : "") +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpName ? "&hcpName=" + hcpName : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new models.Feedback(it)))
      .catch(err => this.handleError(err))
  }
  listOpenPrescriptionsByPatientUsingGET(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    hcpQuality: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpName: string,
    patientId: string,
    xFHCPassPhrase: string
  ): Promise<Array<models.Prescription> | any> {
    let _body = null

    const _url =
      this.host +
      "/recipe/patient" +
      "?ts=" +
      new Date().getTime() +
      (hcpQuality ? "&hcpQuality=" + hcpQuality : "") +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpName ? "&hcpName=" + hcpName : "") +
      (patientId ? "&patientId=" + patientId : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new models.Prescription(it)))
      .catch(err => this.handleError(err))
  }
  listOpenPrescriptionsUsingGET(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    hcpQuality: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpName: string,
    xFHCPassPhrase: string
  ): Promise<Array<models.Prescription> | any> {
    let _body = null

    const _url =
      this.host +
      "/recipe" +
      "?ts=" +
      new Date().getTime() +
      (hcpQuality ? "&hcpQuality=" + hcpQuality : "") +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpName ? "&hcpName=" + hcpName : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new models.Prescription(it)))
      .catch(err => this.handleError(err))
  }
  revokePrescriptionUsingDELETE(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    hcpQuality: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpName: string,
    xFHCPassPhrase: string,
    rid: string,
    reason: string
  ): Promise<any | Boolean> {
    let _body = null

    const _url =
      this.host +
      "/recipe/{rid}".replace("{rid}", rid + "") +
      "?ts=" +
      new Date().getTime() +
      (hcpQuality ? "&hcpQuality=" + hcpQuality : "") +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpName ? "&hcpName=" + hcpName : "") +
      (reason ? "&reason=" + reason : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("DELETE", _url, headers, _body, this.fetchImpl)
      .then(doc => true)
      .catch(err => this.handleError(err))
  }
  sendNotificationUsingPOST(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    hcpQuality: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpName: string,
    xFHCPassPhrase: string,
    rid: string,
    patientId?: string,
    executorId?: string,
    text?: string
  ): Promise<any | Boolean> {
    let _body = null

    const _url =
      this.host +
      "/recipe/notify/{rid}".replace("{rid}", rid + "") +
      "?ts=" +
      new Date().getTime() +
      (hcpQuality ? "&hcpQuality=" + hcpQuality : "") +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpName ? "&hcpName=" + hcpName : "") +
      (patientId ? "&patientId=" + patientId : "") +
      (executorId ? "&executorId=" + executorId : "") +
      (text ? "&text=" + text : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => true)
      .catch(err => this.handleError(err))
  }
  updateFeedbackFlagUsingPUT(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    hcpQuality: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpName: string,
    xFHCPassPhrase: string,
    rid: string,
    feedbackFlag: boolean
  ): Promise<any | Boolean> {
    let _body = null

    const _url =
      this.host +
      "/recipe/{rid}/feedback/{feedbackFlag}"
        .replace("{rid}", rid + "")
        .replace("{feedbackFlag}", feedbackFlag + "") +
      "?ts=" +
      new Date().getTime() +
      (hcpQuality ? "&hcpQuality=" + hcpQuality : "") +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpName ? "&hcpName=" + hcpName : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("PUT", _url, headers, _body, this.fetchImpl)
      .then(doc => true)
      .catch(err => this.handleError(err))
  }
}