import { Suspense } from 'react';
import strains from '@/lib/strains.json';
import HeaderBlock from '@/components/modules/header-block';
import StrainFilter from '@/components/ui/strain-filter';

export const metadata = {
  title: 'Our Strains | The Shire',
  description: 'Explore our collection of premium strains inspired by Middle-Earth',
};

export default function StrainsPage() {
  return (
    <main className="page-content content-grid">
      <HeaderBlock
        isPageHeader
        title="Our Strains"
        description="Each of our strains pays homage to the enchanting world of Middle-Earth."
      />

      <Suspense fallback={null}>
        <StrainFilter strains={strains} />
      </Suspense>
    </main>
  );
}
