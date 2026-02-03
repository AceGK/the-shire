import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import strainsData from '@/lib/strains.json';
import { terpenes, effects } from '@/lib/cannabisIcons';
import { slugify, getStrainBySlug } from '@/lib/utils';
import styles from './styles.module.scss';
import type { Strain } from '@/types';

const strains = strainsData as Strain[];

export async function generateStaticParams() {
  return strains.map((strain) => ({
    slug: slugify(strain.name),
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
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

export default async function StrainPage({ params }: PageProps) {
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
          <img src={strain.image} alt={`${strain.name} nug`} />
        </div>

        <div className={styles.details}>
          <span className={`${styles.type} ${styles[strain.type]}`}>
            {strain.type}
          </span>
          <h1>{strain.name}</h1>

          {strain.description && (
            <p className={styles.description}>{strain.description}</p>
          )}

          <p className={styles.lineage}>Lineage: <span>{strain.lineage}</span></p>

          {/* Cannabinoids Section */}
          {strain.cannabinoids && (
            <section className={styles.section}>
              <h2>Cannabinoids</h2>
              <div className={styles.cannabinoidList}>
                {Object.entries(strain.cannabinoids).map(([key, value]) => (
                  <div key={key} className={styles.cannabinoidItem}>
                    <span className={styles.cannabinoidName}>{key.toUpperCase()}</span>
                    <span className={styles.cannabinoidValue}>{value}%</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Terpenes Section */}
          {strain.terpenes && strain.terpenes.length > 0 && (
            <section className={styles.section}>
              <h2>Terpene Profile</h2>
              {strain.totalTerpenes && (
                <div className={styles.totalTerpenes}>
                  Total Terpenes: {strain.totalTerpenes}
                </div>
              )}
              <div className={styles.terpeneGrid}>
                {strain.terpenes.map((terpeneKey) => {
                  const terpene = terpenes[terpeneKey as keyof typeof terpenes];
                  if (!terpene) return null;
                  return (
                    <div
                      key={terpeneKey}
                      className={styles.terpeneCard}
                      style={{ '--terpene-color': terpene.color } as React.CSSProperties}
                    >
                      <div className={styles.terpeneIcon}>
                        {terpene.icon}
                      </div>
                      <div className={styles.terpeneInfo}>
                        <h3>{terpene.name}</h3>
                        <p>{terpene.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Effects Section */}
          {strain.effects && strain.effects.length > 0 && (
            <section className={styles.section}>
              <h2>Anticipated Effects</h2>
              <div className={styles.effectsGrid}>
                {strain.effects.map((effectKey) => {
                  const effect = effects[effectKey as keyof typeof effects];
                  if (!effect) return null;
                  return (
                    <div
                      key={effectKey}
                      className={styles.effectCard}
                      style={{ '--effect-color': effect.color } as React.CSSProperties}
                    >
                      <div className={styles.effectIcon}>
                        {effect.icon}
                      </div>
                      <span className={styles.effectName}>{effect.name}</span>
                    </div>
                  );
                })}
              </div>
            </section>
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
