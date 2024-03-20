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

import { decodeBase64 } from "./ModelHelper"

export class InvoiceSender {
  constructor(json: JSON | any) {
    Object.assign(this as InvoiceSender, json)
  }

  bce?: number
  bic?: string
  conventionCode?: number
  firstName?: string
  iban?: string
  lastName?: string
  medicalHouse?: boolean
  nihii?: number
  phoneNumber?: number
  professionCode?: number
  specialist?: boolean
  ssin?: string
}
