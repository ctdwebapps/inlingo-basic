// app/layout.tsx
import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Language Learning App',
  description: 'Learn languages with different levels and lesson types',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>    
      <body className={inter.className}>  <Header />{children}</body>
    </html>
  )
}
