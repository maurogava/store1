import { Product } from '@/types/product'
import ProductCard from './ProductCard'
import EmptyState from './EmptyState'

interface ProductCollectionProps {
  products: Product[]
  title: string
}

export default function ProductCollection({ products, title }: ProductCollectionProps) {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <h2 className="mb-8 text-2xl font-bold capitalize">{title}</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.length === 0 ? (
          <EmptyState message="No products found" />
        ) : (
          products.map((product) => <ProductCard key={product.id} product={product} />)
        )}
      </div>
    </div>
  )
}
