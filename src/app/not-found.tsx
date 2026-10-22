import type { Metadata } from 'next';
import Button from '@/components/ui/button';
import OneRing from '@/components/ui/one-ring';
import styles from './not-found.module.scss';

export const metadata: Metadata = {
  title: 'Page Not Found | The Shire Supply Co.',
};

export default function NotFound() {
  return (
    <main className={`${styles.notFound} content-grid`}>
      <div className={styles.inner}>
        {/* "404" with the One Ring as the zero. Decorative; the pretitle says it in words. */}
        <div className={styles.code} aria-hidden="true">
          <span>4</span>
          <OneRing />
          <span>4</span>
        </div>

        <p className={styles.pretitle}>Error 404 · Page Not Found</p>
        <h1 className={styles.title}>Not All Who Wander Are Lost</h1>
        <p className={styles.text}>
          But this page certainly is. Perhaps it slipped off a finger in the Misty Mountains, or
          was cast into the fires of Mount Doom. Either way, the road goes ever on, and there is
          plenty more to find back in the Shire.
        </p>

        <div className={styles.actions}>
          <Button href="/" variant="primary" size="lg">
            Return to the Shire
          </Button>
          <Button href="/strains" variant="outline" size="lg">
            Browse Strains
          </Button>
        </div>
      </div>
    </main>
  );
}
