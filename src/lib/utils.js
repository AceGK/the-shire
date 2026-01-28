// Utility functions

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function getStrainBySlug(strains, slug) {
  return strains.find(strain => slugify(strain.name) === slug);
}
