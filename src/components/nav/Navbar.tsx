import Link from 'next/link'
import { getCategories } from '@/actions/getCategories'
import Search from '@/components/search/Search'
import MenuButton from './MenuButton'
import MobileMenu from './MobileMenu'
import { MenuProvider } from '@/providers/MenuProvider'

export default async function Navbar() {
  // Server-side data fetching
  const { data: categories = [] } = await getCategories()

  return (
    <MenuProvider>
      <nav className="flex w-full items-center justify-between border-b px-6 py-4 md:px-12">
        <div className="flex items-center">
          <MenuButton />
          <Link href="/" className="text-2xl font-bold">
            Store™
          </Link>
        </div>

        <div className="hidden space-x-8 md:flex">
          {categories.map((category) => (
            <Link key={category} href={`/${encodeURIComponent(category)}`}>
              {category}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Search />
        </div>
      </nav>

      {/* Mobile Menu - client component */}
      <MobileMenu categories={categories} />
    </MenuProvider>
  )
}
