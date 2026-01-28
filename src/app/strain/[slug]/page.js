import Link from 'next/link';
import { notFound } from 'next/navigation';
import strains from '@/lib/strains.json';
import { slugify, getStrainBySlug } from '@/lib/utils';
import styles from './styles.module.scss';

export async function generateStaticParams() {
  return strains.map((strain) => ({
    slug: slugify(strain.name),
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const strain = getStrainBySlug(strains, slug);

  if (!strain) {
    return {
      title: 'Strain Not Found | The Shire',
    };
  }

  return {
    title: `${strain.name} | The Shire`,
    description: strain.description || `${strain.name} - ${strain.type} strain from The Shire`,
  };
}

export default async function StrainPage({ params }) {
  const { slug } = await params;
  const strain = getStrainBySlug(strains, slug);

  if (!strain) {
    notFound();
  }

  const currentIndex = strains.findIndex(s => slugify(s.name) === slug);
  const prevStrain = currentIndex > 0 ? strains[currentIndex - 1] : null;
  const nextStrain = currentIndex < strains.length - 1 ? strains[currentIndex + 1] : null;

  return (
    <main className={styles.strainPage}>
      <Link href="/strains" className={styles.backLink}>
        &larr; Back to All Strains
      </Link>

      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img src="/images/nug.png" alt={`${strain.name} nug`} />
        </div>

        <div className={styles.details}>
          <span className={`${styles.type} ${styles[strain.type]}`}>
            {strain.type}
          </span>
          <h1>{strain.name}</h1>
          <p className={styles.lineage}>{strain.lineage}</p>

          {strain.description && (
            <p className={styles.description}>{strain.description}</p>
          )}
        </div>
      </div>

      <nav className={styles.pagination}>
        {prevStrain ? (
          <Link href={`/strain/${slugify(prevStrain.name)}`} className={styles.prevLink}>
            <span>&larr; Previous</span>
            <span className={styles.navName}>{prevStrain.name}</span>
          </Link>
        ) : (
          <div />
        )}
        {nextStrain && (
          <Link href={`/strain/${slugify(nextStrain.name)}`} className={styles.nextLink}>
            <span>Next &rarr;</span>
            <span className={styles.navName}>{nextStrain.name}</span>
          </Link>
        )}
      </nav>
    </main>
  );
}
