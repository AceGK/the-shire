import { Inter } from 'next/font/google'
import './globals.scss'
import Footer from '@/components/footer'
import Nav from 'components/nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Shire',
  description: 'The finest weed in the Southfarthing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
