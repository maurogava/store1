import { Skeleton } from '@/components/ui/skeleton'

export default function ProductSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      <Skeleton className="aspect-square rounded-lg" />
      <div className="flex flex-col">
        <div>
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="mt-2 h-4 w-1/4" />
          <Skeleton className="mt-4 h-8 w-1/6" />

          <div className="mt-8">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="mt-2 h-24 w-full" />
          </div>
        </div>

        <div className="mt-auto pt-8">
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
    </div>
  )
}
