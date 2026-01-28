import Link from 'next/link';
import strains from '@/lib/strains.json';
import { slugify } from '@/lib/utils';
import styles from './styles.module.scss';

export const metadata = {
  title: 'Our Strains | The Shire',
  description: 'Explore our collection of premium strains inspired by Middle-Earth',
};

export default function StrainsPage() {
  return (
    <main className={styles.strainsPage}>
      <div className={styles.header}>
        <h1>Our Strains</h1>
        <p>
          Each of our strains pays homage to the enchanting world of Middle-Earth.
          You don&apos;t need to go to Mordor and back to find such fine pipeweed.
        </p>
      </div>

      <div className={styles.grid}>
        {strains.map((strain, id) => (
          <Link
            href={`/strain/${slugify(strain.name)}`}
            key={id}
            className={styles.card}
          >
            <img src="/images/nug.png" alt={`${strain.name} nug`} />
            <span className={styles.name}>{strain.name}</span>
            <span className={`${styles.type} ${styles[strain.type]}`}>
              {strain.type}
            </span>
            <span className={styles.lineage}>{strain.lineage}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
