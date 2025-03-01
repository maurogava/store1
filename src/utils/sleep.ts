/**
 * Pauses code execution for the specified number of milliseconds
 * @param time Time to sleep in milliseconds
 * @param callback Optional function to execute after the sleep
 * @returns Promise that resolves with the callback's return value or void
 */
export const sleep = <T = void>(time: number, callback?: () => T): Promise<T | void> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      if (callback) {
        const result = callback()
        resolve(result)
      } else {
        resolve()
      }
    }, time),
  )
}
