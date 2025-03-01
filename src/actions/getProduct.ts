'use server'

import type { ActionResponse } from '@/types/ActionsResponse'
import type { Product } from '@/types/product'

interface GetProductProps {
  id: string | number
}

type GetProductResponse = Promise<ActionResponse<Product>>

export const getProduct = async ({ id }: GetProductProps): GetProductResponse => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      // revalidate every 60 seconds
      next: { revalidate: 60 },
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch product with status: ${res.status}`)
    }

    const data = await res.json()

    if (!data) {
      return { ok: false, error: 'Product not found', data: null as unknown as Product }
    }

    return { ok: true, data }
  } catch (error) {
    console.error(error)
    return {
      ok: false,
      error: error instanceof Error ? error.message : 'Failed to fetch product',
      data: null as unknown as Product,
    }
  }
} 