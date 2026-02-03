import type { Strain } from '@/types';

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function getStrainBySlug(strains: Strain[], slug: string): Strain | undefined {
  return strains.find(strain => slugify(strain.name) === slug);
}
