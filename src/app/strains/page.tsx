import type { Metadata } from 'next';
import { Suspense } from 'react';
import strainsData from '@/lib/strains.json';
import HeaderBlock from '@/components/modules/header-block';
import StrainFilter from '@/components/ui/strain-filter';
import { StrainGridSkeleton } from '@/components/ui/strain-card/skeleton';
import type { Strain } from '@/types';

const strains = strainsData as Strain[];

export const metadata: Metadata = {
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

      <Suspense fallback={<StrainGridSkeleton count={12} />}>
        <StrainFilter strains={strains} />
      </Suspense>
    </main>
  );
}
