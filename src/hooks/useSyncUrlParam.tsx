'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
/**
 * Custom hook to sync URL params with store
 * @param paramName - The name of the URL param to sync
 * @param setValue - The function to set the value in the store
 * @returns The current value of the URL param
 */
export function useSyncUrlParam(paramName: string, setValue: (value: string) => void) {
  const searchParams = useSearchParams()

  // Get the current value
  const value = searchParams.get(paramName)

  // Set it in the store if it exists
  useEffect(() => {
    if (value) {
      setValue(value)
    }
  }, [value, setValue])

  return value
}
