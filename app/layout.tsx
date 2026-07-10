// app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Orbitron, Ubuntu } from 'next/font/google'
import './globals.css'
import BackToTop from '@/components/BackToTop'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
})

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
})

export const metadata: Metadata = {
  title: 'Telefix Solutions - Leading ICT & Power Solutions in Kenya',
  description: 'Innovative technology, sustainable power, and water solutions — delivered with excellence across Kenya since 2010.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${inter.variable} ${orbitron.variable} ${ubuntu.variable} antialiased bg-white text-[#012156]`}>
        {children}
        <BackToTop />
      </body>
    </html>
  )
}