// app/layout.tsx
import type { Metadata } from 'next'
import { Orbitron, Ubuntu } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const ubuntu = Ubuntu({
  subsets: ['latin'],
  variable: '--font-ubuntu',
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Telefix Solutions - ICT & Power Solutions',
  description: 'Leading ICT, telecommunications, power, and water solutions provider in Kenya',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes" />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
        />
      </head>
      <body className={`${orbitron.variable} ${ubuntu.variable}`}>
        {children}
      </body>
    </html>
  )
}