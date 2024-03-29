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
import { Prescription } from "./Prescription"

import { decodeBase64 } from "./ModelHelper"

export class Partial {
  constructor(json: JSON | any) {
    Object.assign(this as Partial, json)
  }

  hasHidden?: boolean
  hasMoreResults?: boolean
  prescriptions?: Array<Prescription>
}
