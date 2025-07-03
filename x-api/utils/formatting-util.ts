/**
 * Formats a value and a physical unit into text.
 * @param value the numerical or string value to encode
 * @param unit the unit represented as a string (an empty string is also supported)
 */
export function unit(value: number | string, unit: string | null): string {
  unit = unit || ""
  let separator: string
  if (!unit || unit.startsWith("°")) {
    separator = ""
  } else {
    // including '%'
    separator = "\xa0"
  }
  return value + separator + unit
}
