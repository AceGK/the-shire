import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { EB_Garamond, Lato } from 'next/font/google';
import localFont from 'next/font/local';
import '@/styles/reset.scss'
import '@/styles/globals.scss'
import '@/styles/swiper.scss'
import Footer from '@/components/ui/footer'
import Nav from '@/components/ui/nav'

const PROMO_COOKIE_NAME = 'promo_dismissed';
const NAV_HEIGHT = 74;
const PROMO_HEIGHT = 39;

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
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

const kereru = localFont({
  src: [
    {
      path: '../../public/fonts/kereru.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/kereru-bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-kereru',
  display: 'swap',
  fallback: ['EB Garamond', 'Georgia', 'serif'],
});

export const metadata: Metadata = {
  title: "The Shire Supply Co. | Finest Pipe-Weed in the Southfarthing",
  description:
    "The finest pipe-weed in the Southfarthing. Artisanally crafted since the Third Age.",
  metadataBase: new URL("https://the-shire.vercel.app"),
  openGraph: {
    title: "The Shire Supply Co.",
    description:
      "The finest pipe-weed in the Southfarthing. Artisanally crafted since the Third Age.",
    type: "website",
    siteName: "The Shire Supply Co.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Shire Supply Co.",
    description:
      "The finest pipe-weed in the Southfarthing. Artisanally crafted since the Third Age.",
  }
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const promoDismissed = cookieStore.has(PROMO_COOKIE_NAME);
  const initialHeaderHeight = promoDismissed ? NAV_HEIGHT : NAV_HEIGHT + PROMO_HEIGHT;

  return (
    <html lang="en" style={{ '--header-height': `${initialHeaderHeight}px` } as React.CSSProperties}>
      <body className={`${ebGaramond.variable} ${lato.variable} ${hobbiton.variable} ${kereru.variable}`}>
        <div className="background-wrap" aria-hidden="true" />
        <div className="content-wrap">
          <Nav
            promoMessage="Join our Fellowship to receive 10% off!"
            initialPromoDismissed={promoDismissed}
          />
          {children}
          <Footer />
        </div>
        <div className="map-overlay" aria-hidden="true" />
      </body>
    </html>
  )
}
