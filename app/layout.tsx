import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NRK Stones | Granite & Natural Stone Supplier in Visakhapatnam',
  description:
    'NRK Stones is a granite and natural stone supplier in Visakhapatnam, Andhra Pradesh, serving architectural, residential and commercial stone requirements.',
  generator: 'v0.app',
  keywords: [
    'granite supplier in Visakhapatnam',
    'granite suppliers Visakhapatnam',
    'granite Madhurawada',
    'natural stone Visakhapatnam',
    'granite slabs Visakhapatnam',
    'stone supplier Andhra Pradesh',
    'granite showroom Visakhapatnam',
    'natural stone supplier Andhra Pradesh',
  ],
  openGraph: {
    title: 'NRK Stones | Granite & Natural Stone Supplier in Visakhapatnam',
    description:
      'Premium granite and natural stone for architecture, interiors and timeless spaces.',
    type: 'website',
    locale: 'en_IN',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#171717',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
