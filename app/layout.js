import { Lusitana } from 'next/font/google'
import '@/app/styles/reset.scss'
import '@/app/styles/globals.scss'
import '@/app/styles/swiper.scss'
import Footer from '@/components/footer'
import Nav from 'components/nav'

const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the available weights
});

export const metadata = {
  title: 'The Shire',
  description: 'The finest weed in the Southfarthing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lusitana.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
