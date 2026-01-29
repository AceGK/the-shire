import { Cormorant_Garamond, Lato } from 'next/font/google';
import localFont from 'next/font/local';
import '@/styles/reset.scss'
import '@/styles/globals.scss'
import '@/styles/swiper.scss'
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

const hobbiton = localFont({
  src: '../../public/fonts/Hobbiton.ttf',
  variable: '--font-hobbiton',
  display: 'swap',
});

export const metadata = {
  title: 'The Shire Supply Co. | Finest Pipe-Weed in the Southfarthing',
  description: 'The finest weed in the Southfarthing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorantGaramond.variable} ${lato.variable} ${hobbiton.variable} bg-map`}>
        <Nav promoMessage="Join our Fellowship to receive 10% off!" />
        {children}
        <Footer />
      </body>
    </html>
  )
}
