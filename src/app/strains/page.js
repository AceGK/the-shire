import strains from '@/lib/strains.json';
import StrainCard from '@/components/ui/strain-card';
import HeaderBlock from '@/components/modules/header-block';
import styles from './styles.module.scss';

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

      <div className={styles.grid}>
        {strains.map((strain, id) => (
          <StrainCard key={id} strain={strain} />
        ))}
      </div>
    </main>
  );
}
