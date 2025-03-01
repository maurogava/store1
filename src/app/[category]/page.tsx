import { getProducts } from '@/actions/getProducts'
import ProductCollection from '@/components/product/ProductCollection'
import { orderProductsByPrice } from '@/utils/products'

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
  searchParams: Promise<{
    search: string
  }>
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { category: encodedCategory } = await params
  const { search = '' } = await searchParams

  const category = decodeURIComponent(encodedCategory)
  // This part will be server-rendered
  const products = await getProducts({
    category: decodeURIComponent(category),
    searchQuery: search,
  })
  
  const orderedProducts = orderProductsByPrice(products.data, 'desc')

  return (
    <main className="min-h-screen bg-white">
      <ProductCollection products={orderedProducts} title={decodeURIComponent(category)} />
    </main>
  )
}
