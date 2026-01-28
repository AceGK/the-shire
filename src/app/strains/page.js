import strains from '@/lib/strains.json';
import StrainCard from '@/components/ui/strain-card';
import styles from './styles.module.scss';

export const metadata = {
  title: 'Our Strains | The Shire',
  description: 'Explore our collection of premium strains inspired by Middle-Earth',
};

export default function StrainsPage() {
  return (
    <main className="page-content">
      <div className={styles.header}>
        <h1>Our Strains</h1>
        <p>
          Each of our strains pays homage to the enchanting world of Middle-Earth.
        </p>
      </div>

      <div className={styles.grid}>
        {strains.map((strain, id) => (
          <StrainCard key={id} strain={strain} />
        ))}
      </div>
    </main>
  );
}
