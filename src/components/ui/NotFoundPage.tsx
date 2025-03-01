import Link from 'next/link'

export default function Component() {
  return (
    <section className="flex w-full flex-col items-center py-12 text-center md:py-24">
      <div className="container flex flex-col items-center justify-center gap-2 px-4 md:gap-4 lg:gap-6">
        <h1 className="mb-7 text-3xl font-bold tracking-tighter sm:text-4xl">
          <div className="text-9xl">404</div>
          <div>Page not found</div>
        </h1>
        <p className="mb-7 text-lg text-gray-500 dark:text-gray-400">
          Whoops, looks like you took a wrong turn. Let&#x27;s get you back home.
        </p>

        <Link
          href="/"
          className="inline-flex h-9 items-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          prefetch={false}
        >
          Go back home
        </Link>
      </div>
    </section>
  )
}
