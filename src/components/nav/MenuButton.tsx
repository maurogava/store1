'use client'

import { Menu } from 'lucide-react'
import { useMenu } from '@/providers/MenuProvider'

export default function MenuButton() {
  const { toggleMenu } = useMenu()

  return (
    <button className="mr-4 cursor-pointer md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
      <Menu className="h-6 w-6" />
    </button>
  )
}
