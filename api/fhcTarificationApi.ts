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
 */
import { XHR } from "./XHR"
import { TarificationConsultationResult } from "../model/TarificationConsultationResult"

export class fhcTarificationApi {
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

  handleError(e: XHR.XHRError): never {
    throw e
  }

  /**
   *
   * @summary consultTarification
   * @param body codes
   * @param ssin ssin
   * @param xFHCTokenId X-FHC-tokenId
   * @param xFHCKeystoreId X-FHC-keystoreId
   * @param xFHCPassPhrase X-FHC-passPhrase
   * @param hcpFirstName hcpFirstName
   * @param hcpLastName hcpLastName
   * @param hcpNihii hcpNihii
   * @param hcpSsin hcpSsin
   * @param date date
   * @param gmdNihii gmdNihii
   * @param justification justification
   * @param traineeSupervisorSsin traineeSupervisorSsin
   * @param traineeSupervisorNihii traineeSupervisorNihii
   * @param traineeSupervisorFirstName traineeSupervisorFirstName
   * @param traineeSupervisorLastName traineeSupervisorLastName
   * @param guardPostNihii guardPostNihii
   * @param guardPostSsin guardPostSsin
   * @param anatomy anatomy
   * @param relatedService relatedService
   */
  consultTarificationUsingPOST(
    ssin: string,
    xFHCTokenId: string,
    xFHCKeystoreId: string,
    xFHCPassPhrase: string,
    hcpFirstName: string,
    hcpLastName: string,
    hcpNihii: string,
    hcpSsin: string,
    date?: number,
    gmdNihii?: string,
    justification?: string,
    traineeSupervisorSsin?: string,
    traineeSupervisorNihii?: string,
    traineeSupervisorFirstName?: string,
    traineeSupervisorLastName?: string,
    guardPostNihii?: string,
    guardPostSsin?: string,
    anatomy?: string,
    relatedService?: string,
    body?: Array<string>
  ): Promise<TarificationConsultationResult> {
    let _body = null
    _body = body

    const _url =
      this.host +
      `/tarif/${encodeURIComponent(String(ssin))}` +
      "?ts=" +
      new Date().getTime() +
      (hcpFirstName ? "&hcpFirstName=" + encodeURIComponent(String(hcpFirstName)) : "") +
      (hcpLastName ? "&hcpLastName=" + encodeURIComponent(String(hcpLastName)) : "") +
      (hcpNihii ? "&hcpNihii=" + encodeURIComponent(String(hcpNihii)) : "") +
      (hcpSsin ? "&hcpSsin=" + encodeURIComponent(String(hcpSsin)) : "") +
      (date ? "&date=" + encodeURIComponent(String(date)) : "") +
      (gmdNihii ? "&gmdNihii=" + encodeURIComponent(String(gmdNihii)) : "") +
      (justification ? "&justification=" + encodeURIComponent(String(justification)) : "") +
      (traineeSupervisorSsin
        ? "&traineeSupervisorSsin=" + encodeURIComponent(String(traineeSupervisorSsin))
        : "") +
      (traineeSupervisorNihii
        ? "&traineeSupervisorNihii=" + encodeURIComponent(String(traineeSupervisorNihii))
        : "") +
      (traineeSupervisorFirstName
        ? "&traineeSupervisorFirstName=" + encodeURIComponent(String(traineeSupervisorFirstName))
        : "") +
      (traineeSupervisorLastName
        ? "&traineeSupervisorLastName=" + encodeURIComponent(String(traineeSupervisorLastName))
        : "") +
      (guardPostNihii ? "&guardPostNihii=" + encodeURIComponent(String(guardPostNihii)) : "") +
      (guardPostSsin ? "&guardPostSsin=" + encodeURIComponent(String(guardPostSsin)) : "") +
      (anatomy ? "&anatomy=" + encodeURIComponent(String(anatomy)) : "") +
      (relatedService ? "&relatedService=" + encodeURIComponent(String(relatedService)) : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new TarificationConsultationResult(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
}
