import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types/product'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col">
      <Link href={`/product/${product.id}`} className="block" prefetch={false} scroll={false}>
        <div className="relative mb-4 aspect-square overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h3 className="text-lg font-medium transition-all duration-200 group-hover:underline">
          {product.title}
        </h3>
        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        <p className="mt-2 font-medium">${product.price.toFixed(2)}</p>
      </Link>
    </div>
  )
}
