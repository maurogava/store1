import { Product } from '@/types/product'

/**
 * Filters products by category
 * @param products - The products to filter
 * @param category - The category to filter by
 * @returns The filtered products
 */
export function filterProductsByCategory(
  products: Product[],
  category: string | undefined,
): Product[] {
  if (!category) {
    return products
  }

  return products.filter((product) => product.category === category)
}

/**
 * Order products by price
 * @param products - The products to order
 * @param order - The order to sort by
 * @returns The ordered products
 */
export function orderProductsByPrice(products: Product[], order: 'asc' | 'desc'): Product[] {
  return products.sort((a, b) => (order === 'asc' ? a.price - b.price : b.price - a.price))
}

/**
 * Order products by name (case insensitive)
 * @param products - The products to order
 * @param order - The order to sort by
 * @returns The ordered products
 */
export function orderProductsByName(products: Product[], order: 'asc' | 'desc'): Product[] {
  return products.sort((a, b) =>
    order === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title),
  )
}

type SearchProductsProps = {
  products: Product[]
  searchBy: string[]
  query: string
}
/**
 * Search products by title or description
 * @param products - The products to search
 * @param searchBy - The field to search by
 * @param query - The query to search by
 * @returns The filtered products
 */
export function searchProducts({ products, searchBy, query }: SearchProductsProps): Product[] {
  return products.filter((product) =>
    searchBy.some((field) =>
      product[field as keyof Product].toString().toLowerCase().includes(query.toLowerCase()),
    ),
  )
}
