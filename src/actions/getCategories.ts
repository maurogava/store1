'use server'

import type { ActionResponse } from '@/types/ActionsResponse'
import type { Product } from '@/types/product'

// Cache the categories fetch to improve performance
export const getCategories = async (): Promise<ActionResponse<string[]>> => {
  try {
    const res = await fetch('https://fakestoreapi.com/products', {
      // This enables static generation at build time
      next: { revalidate: 3600 }, // Revalidate every hour
    })

    const data = await res.json()

    if (!data || data.length === 0) {
      return { ok: false, error: 'No categories found', data: [] }
    }

    return { ok: true, data: categoriesFromProducts(data) }
  } catch (error) {
    console.error(error)
    return {
      ok: false,
      error: error instanceof Error ? error.message : 'Failed to fetch categories',
      data: [],
    }
  }
}

function categoriesFromProducts(products: Product[]): string[] {
  return [...new Set(products.map((product: { category: string }) => product.category))]
}
