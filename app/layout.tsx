import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "The Whistler's Daughter | A Memoir by Christine \"Kippy\" Hoene",
  description:
    'The Whistler\'s Daughter: Defying My Prognosis One New Sport at a Time. A memoir by Christine "Kippy" Hoene about courage, curiosity, and learning 40+ sports while living with muscular dystrophy.',
  generator: 'v0.app',
  openGraph: {
    title: "The Whistler's Daughter",
    description:
      'Defying My Prognosis One New Sport at a Time — a memoir by Christine "Kippy" Hoene.',
    type: 'book',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#3f6fb0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${playfair.variable} ${sourceSans.variable}`}>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
