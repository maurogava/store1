// This component must be the top-most import in this file!
import { ReactScan } from '@/ReactScan'

import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'
import Navbar from '@/components/nav/Navbar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store is a simple store for testing purposes',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ReactScan />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
