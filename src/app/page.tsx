import { getProducts } from '@/actions/getProducts'
import { getCategories } from '@/actions/getCategories'
import { filterProductsByCategory, orderProductsByPrice } from '@/utils/products'
import ProductCollection from '@/components/product/ProductCollection'

interface HomePageProps {
  searchParams: Promise<{
    search: string
  }>
}

export default async function Home({ searchParams }: HomePageProps) {
  const { search = '' } = await searchParams
  const [{ data: products }, { data: categories }] = await Promise.all([
    getProducts({ searchQuery: search }),
    getCategories(),
  ])

  return (
    <main className="min-h-screen bg-white">
      {categories.map((category) => {
        const filteredProducts = filterProductsByCategory(products, category)
        const orderedProducts = orderProductsByPrice(filteredProducts, 'desc')
        const productsToDisplay = orderedProducts.slice(0, 5)

        return <ProductCollection key={category} products={productsToDisplay} title={category} />
      })}
    </main>
  )
}
