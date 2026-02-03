import Link from 'next/link';
import { slugify } from '@/lib/utils';
import styles from './styles.module.scss';
import type { Strain } from '@/types';

interface StrainCardProps {
  strain: Strain;
  className?: string;
}

export default function StrainCard({ strain, className = '' }: StrainCardProps) {
  return (
    <Link
      href={`/strain/${slugify(strain.name)}`}
      className={`${styles.card} ${className}`}
    >
      <img src={strain.image} alt={`${strain.name} nug`} />
      <span className={styles.name}>{strain.name}</span>
      <span className={`${styles.type} ${styles[strain.type]}`}>
        {strain.type}
      </span>
      <span className={styles.lineage}>{strain.lineage}</span>
    </Link>
  );
}
