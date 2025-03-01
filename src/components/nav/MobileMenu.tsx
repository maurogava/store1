'use client'

import Link from 'next/link'
import { useMenu } from '@/providers/MenuProvider'
import { X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

type MobileMenuProps = {
  categories: string[]
}

export default function MobileMenu({ categories }: MobileMenuProps) {
  const { isMenuOpen, closeMenu } = useMenu()
  const pathname = usePathname()

  if (!isMenuOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-white pt-16 md:hidden">
      <button onClick={closeMenu} className="absolute top-4 right-4 cursor-pointer">
        <X className="h-6 w-6" />
      </button>
      <div className="flex flex-col items-center space-y-6 p-6">
        {categories.map((category) => {
          const href = `/${encodeURIComponent(category)}`
          const isActive = pathname === href

          return (
            <Link
              key={category}
              href={href}
              onClick={closeMenu}
              className={cn(
                'text-primary transition-colors hover:underline',
                isActive && 'underline',
              )}
            >
              {category}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
