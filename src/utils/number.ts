/*
 * Checks if a value is numeric.
 * @param value The value to check.
 * @param allowNegative Whether to allow negative numbers.
 * @returns True if the value is numeric, false otherwise.
 */
export function isNumeric(value: unknown, allowNegative = false) {
  if (typeof value === 'string') {
    return (allowNegative ? /^-?\d+$/ : /^\d+$/).test(value)
  }

  if (typeof value === 'number') {
    return true
  }

  return false
}

/*
 * Converts a value to a number. If the value is not numeric, returns the default value.
 * @param value The value to convert.
 * @param allowNegative Whether to allow negative numbers.
 * @param defaultValue The default value to return if the value is not numeric.
 * @returns The numeric value or the default value.
 */
export function toNumber(
  value: unknown,
  allowNegative: boolean = false,
  defaultValue: number | null = null,
): number | null {
  return isNumeric(value, allowNegative) ? Number(value) : defaultValue
}
