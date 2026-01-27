import { Cormorant_Garamond, Lato } from 'next/font/google';
import '@/app/styles/reset.scss'
import '@/app/styles/globals.scss'
import '@/app/styles/swiper.scss'
import Footer from '@/components/ui/footer'
import Nav from '@/components/ui/nav'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: 'The Shire',
  description: 'The finest weed in the Southfarthing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorantGaramond.variable} ${lato.variable}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
