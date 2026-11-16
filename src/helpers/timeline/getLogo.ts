import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/{companies,education}/*.{png,jpg,jpeg,webp,svg}',
  { eager: true },
);

const logos = new Map<string, ImageMetadata>();

for (const [path, file] of Object.entries(files)) {
  const name = path.replace(/^.*\//, '').replace(/\.\w+$/, '');

  if (logos.has(name)) throw new Error(`Two logos named "${name}" in src/assets/companies|education/`);

  logos.set(name, file.default);
}

export const getLogo = (name?: string) => {
  if (!name) return undefined;

  const src = logos.get(name);

  if (!src) throw new Error(`Missing logo "${name}" in src/assets/companies/ or src/assets/education/`);

  return { src, dark: logos.get(`${name}-dark`) };
};
