'use server'

import type { ActionResponse } from '@/types/ActionsResponse'
import type { Product } from '@/types/product'
import { filterProductsByCategory, searchProducts } from '@/utils/products'

interface GetProductsProps {
  category?: string
  searchQuery?: string
}

type GetProductsResponse = Promise<ActionResponse<Product[]>>

export const getProducts = async ({
  category,
  searchQuery,
}: GetProductsProps = {}): GetProductsResponse => {
  try {
    const res = await fetch('https://fakestoreapi.com/products', {
      // revalidate every 60 seconds
      next: { revalidate: 60 },
    })

    const data = (await res.json()) ?? []

    if (data.length === 0) {
      return { ok: false, error: 'No products found', data }
    }

    let products = filterProductsByCategory(data, category)

    if (searchQuery) {
      products = searchProducts({ products, searchBy: ['title'], query: searchQuery })
    }

    return { ok: true, data: products }
  } catch (error) {
    console.error(error)
    return {
      ok: false,
      error: error instanceof Error ? error.message : 'Failed to fetch products',
      data: [],
    }
  }
}
