import { PackageX } from 'lucide-react'

interface EmptyStateProps {
  message: string
}

export default function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
      <div className="mb-4 rounded-full bg-gray-100 p-4">
        <PackageX className="h-8 w-8 text-gray-400" />
      </div>
      <h3 className="mb-2 text-lg font-medium text-gray-900">{message}</h3>
    </div>
  )
}
