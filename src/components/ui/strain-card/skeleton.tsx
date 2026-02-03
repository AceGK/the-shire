import styles from './styles.module.scss';

interface StrainCardSkeletonProps {
  count?: number;
}

export function StrainCardSkeleton() {
  return (
    <div className={styles.skeleton}>
      <div className={styles.skeletonImage} />
      <div className={styles.skeletonName} />
      <div className={styles.skeletonType} />
      <div className={styles.skeletonLineage} />
    </div>
  );
}

export function StrainGridSkeleton({ count = 8 }: StrainCardSkeletonProps) {
  return (
    <>
      <div className={styles.skeletonFilterBar}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className={styles.skeletonFilterButton} />
        ))}
      </div>
      <div className={styles.skeletonGrid}>
        {[...Array(count)].map((_, i) => (
          <StrainCardSkeleton key={i} />
        ))}
      </div>
    </>
  );
}
