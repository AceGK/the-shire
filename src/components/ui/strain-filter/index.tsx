'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import StrainCard from '@/components/ui/strain-card';
import styles from './styles.module.scss';
import type { Strain } from '@/types';

const FILTER_OPTIONS = ['all', 'sativa', 'indica', 'hybrid'] as const;
type FilterOption = typeof FILTER_OPTIONS[number];

interface StrainFilterProps {
  strains: Strain[];
}

export default function StrainFilter({ strains }: StrainFilterProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = (searchParams.get('type') || 'all') as FilterOption;

  const handleFilterChange = (filter: FilterOption) => {
    const params = new URLSearchParams(searchParams);
    if (filter === 'all') {
      params.delete('type');
    } else {
      params.set('type', filter);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const filteredStrains = activeFilter === 'all'
    ? strains
    : strains.filter(strain => strain.type === activeFilter);

  return (
    <>
      <div className={styles.filterBar}>
        {FILTER_OPTIONS.map((filter) => (
          <button
            key={filter}
            className={`${styles.filterButton} ${activeFilter === filter ? styles.active : ''}`}
            onClick={() => handleFilterChange(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredStrains.map((strain, id) => (
          <StrainCard key={id} strain={strain} />
        ))}
      </div>
    </>
  );
}
