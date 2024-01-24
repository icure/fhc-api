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
import { HealthcareParty } from "./HealthcareParty"
import { Medication } from "./Medication"

import { decodeBase64 } from "./ModelHelper"

export class StructuredPrescription {
  constructor(json: JSON | any) {
    Object.assign(this as StructuredPrescription, json)
  }

  creationDate?: Date
  feedbackAllowed?: boolean
  medications?: Array<Medication>
  notificationWasSent?: boolean
  patientId?: string
  prescriberId?: string
  prescribers?: Array<HealthcareParty>
  requestXml?: string
  rid?: string
  status?: string
  validUntil?: Date
  visionByOthers?: string
}