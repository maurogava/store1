import Image from 'next/image'
import { notFound } from 'next/navigation'

import { ShoppingCart } from 'lucide-react'

import { getProduct } from '@/actions/getProduct'
import { Button } from '@/components/ui/Button'

interface ProductPageProps {
  id: string
}

export default async function Product({ id }: ProductPageProps) {
  const { data: product, ok } = await getProduct({ id })

  if (!ok || !product) {
    notFound()
  }

  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      <div className="flex flex-col">
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="mt-2 text-sm text-gray-500 capitalize">{product.category}</p>
          <p className="mt-4 text-2xl font-bold">${product.price.toFixed(2)}</p>

          <div className="mt-8">
            <h2 className="text-lg font-medium">Description</h2>
            <p className="mt-2 text-gray-600">{product.description}</p>
          </div>
        </div>

        <div className="mt-auto pt-8">
          <Button className="w-full">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
