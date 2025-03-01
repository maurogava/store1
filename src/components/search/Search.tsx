'use client'

import { Search as SearchIcon, X } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSyncUrlParam } from '@/hooks/useSyncUrlParam'
import { useState } from 'react'
export default function Search() {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()
  // Update search store when URL param changes
  useSyncUrlParam('search', setSearchQuery)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleSearch = () => {
    // Create a new URLSearchParams object
    const params = new URLSearchParams(searchParams.toString())

    if (searchQuery.trim()) {
      params.set('search', searchQuery)
    } else {
      params.delete('search')
    }
    // Update the URL with the search parameter
    router.push(`?${params.toString()}`)
  }

  const handleClearSearch = () => {
    setSearchQuery('')
    // Remove search param from URL
    const params = new URLSearchParams(searchParams.toString())
    params.delete('search')
    router.push(`?${params.toString()}`)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="relative flex items-center">
      <div className="flex items-center gap-2">
        <div className="relative flex items-center rounded-md border bg-white px-3 py-1.5">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            placeholder="Search products..."
            className="w-full min-w-[140px] border-none pr-5 bg-transparent text-sm outline-none"
            autoFocus
          />
          {searchQuery && (
            <button
              type="button"
              onClick={handleClearSearch}
              className="absolute right-2 cursor-pointer text-gray-400 hover:text-gray-600"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <button
          onClick={handleSearch}
          type="button"
          aria-label="Search"
          className="cursor-pointer text-gray-400 hover:text-gray-600"
        >
          <SearchIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
