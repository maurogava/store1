import Link from 'next/link'

import { ArrowLeft } from 'lucide-react'

import { Suspense } from 'react'
import ProductSkeleton from '@/components/product/ProductSkeleton'
import Product from './ui/Product'
interface ProductPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params

  return (
    <main className="container mx-auto min-h-screen bg-white px-4 py-12 md:px-6">
      <Link
        href="/"
        className="mb-8 inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to products
      </Link>

      {/* Replace with skeleton during loading */}
      <Suspense fallback={<ProductSkeleton />}>
        <Product id={id} />
      </Suspense>
    </main>
  )
}
