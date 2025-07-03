const knownBases: { [key: string]: string } = {
  base64: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/",
  base62: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  base58: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", // Bitcoin base58
  base36: "0123456789abcdefghijklmnopqrstuvwxyz",
  base32: "0123456789abcdefghjkmnpqrstvwxyz", // Crockford's base32
  base16: "0123456789abcdef",
  base10: "0123456789",
  base2: "01"
}

const caseSensitiveBases: { [key: string]: boolean } = {
  base62: true,
  base58: true,
  base36: false,
  base32: false,
  base16: false,
  base10: true,
  base2: true
}

export class UuidEncoder {
  private encStr: string = knownBases.base36
  private isCaseSensitive: boolean = false
  private base: number = 36
  /**
   * @public
   * @param [baseEncodingStr] A string containing all usable letters for encoding
   * @constructor
   */
  constructor(baseEncodingStr = "base36") {
    this.setBaseEncodingStr(baseEncodingStr)
  }

  /**
   * Set encoding base
   * @param {string} baseEncodingStr A string containing all usable letters for encoding
   * @public
   */
  setBaseEncodingStr(baseEncodingStr: string) {
    this.encStr = UuidEncoder.resolveEncodingStr(baseEncodingStr)
    this.isCaseSensitive = UuidEncoder.isCaseSensitiveBase(baseEncodingStr)
    this.base = this.encStr.length
  }

  /**
   * @private
   * @param {string} baseEncodingStr
   * @returns {string}
   */
  static resolveEncodingStr(baseEncodingStr: string) {
    return Object.prototype.hasOwnProperty.call(knownBases, baseEncodingStr)
      ? knownBases[baseEncodingStr]
      : baseEncodingStr
  }

  /**
   * @public
   * @param baseEncodingStr
   * @returns {boolean}
   */
  static isCaseSensitiveBase(baseEncodingStr: string) {
    return Object.prototype.hasOwnProperty.call(caseSensitiveBases, baseEncodingStr)
      ? caseSensitiveBases[baseEncodingStr]
      : true
  }
}
