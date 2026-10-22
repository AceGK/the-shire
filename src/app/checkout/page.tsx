import type { Metadata } from 'next';
import HeaderBlock from '@/components/modules/header-block';
import Checkout from '@/components/modules/checkout';

export const metadata: Metadata = {
  title: 'Checkout | The Shire',
  description: 'Review your bag and choose delivery or pickup.',
};

export default function CheckoutPage() {
  return (
    <main className="page-content content-grid">
      <HeaderBlock
        isPageHeader
        pretitle="Almost There"
        title="Checkout"
        description="Tell us where to send your pipe-weed, or pick it up from a retailer near you."
      />
      <Checkout />
    </main>
  );
}
