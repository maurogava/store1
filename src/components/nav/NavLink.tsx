'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Client component for active link detection
export default function NavLink({ href, category }: { href: string; category: string }) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        'text-primary hover:underline transition-colors',
        isActive && 'underline',
      )}
    >
      {category}
    </Link>
  )
}
