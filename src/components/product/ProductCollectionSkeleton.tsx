import { Skeleton } from '@/components/ui/skeleton'

export default function ProductCollectionSkeleton() {
  return (
    <div className="w-full px-4 py-8 md:px-6">
      {/* Title skeleton */}
      <Skeleton className="mb-8 h-10 w-64" />

      {/* Grid of product skeletons */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 16 }).map((_, index) => (
          <div key={index} className="flex flex-col space-y-3">
            {/* Product image skeleton */}
            <Skeleton className="h-48 w-full rounded-lg" />

            {/* Product title skeleton */}
            <Skeleton className="h-5 w-3/4" />

            {/* Product price skeleton */}
            <Skeleton className="h-4 w-1/4" />

            {/* Product rating skeleton */}
            <div className="flex items-center space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-4 rounded-full" />
              ))}
              <Skeleton className="ml-2 h-4 w-8" />
            </div>

            {/* Button skeleton */}
            <Skeleton className="mt-2 h-10 w-full rounded-md" />
          </div>
        ))}
      </div>
    </div>
  )
}
