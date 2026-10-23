import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HeaderBlock from '@/components/modules/header-block';
import { terpenes, effects } from '@/lib/cannabisIcons';
import styles from './styles.module.scss';

/*
 * Development sandbox: /test
 *
 * Shows every icon and divider in src/assets plus the terpene and effect icons,
 * so they can be checked at a glance. Add more test sections here as needed.
 *
 * Production builds always return a 404, before any of the page runs. That
 * includes Vercel preview deployments, which are production builds too.
 */

export const metadata: Metadata = {
  title: 'Test | The Shire',
  robots: { index: false, follow: false },
};

// Read the asset folders on every request, so newly added SVGs show up at once.
export const dynamic = 'force-dynamic';

interface SvgFile {
  file: string;
  markup: string;
}

function readSvgs(folder: string): SvgFile[] {
  const dir = path.join(process.cwd(), 'src', 'assets', folder);
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.svg'))
    .sort()
    .map((file) => ({ file, markup: fs.readFileSync(path.join(dir, file), 'utf8') }));
}

/** "shopping-bag.svg" -> "ShoppingBagIcon", the name used when importing it. */
function componentName(file: string): string {
  const base = file
    .replace(/\.svg$/, '')
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  return `${base}Icon`;
}

function SvgGrid({ folder, files, wide = false }: { folder: string; files: SvgFile[]; wide?: boolean }) {
  return (
    <ul className={`${styles.grid} ${wide ? styles.wide : ''}`}>
      {files.map(({ file, markup }) => (
        <li key={file} className={styles.tile}>
          {/* Our own files from src/assets, rendered as-is */}
          <span className={styles.preview} dangerouslySetInnerHTML={{ __html: markup }} />
          <span className={styles.name}>{file}</span>
          <code className={styles.code}>
            import {componentName(file)} from &apos;@/assets/{folder}/{file}&apos;;
          </code>
        </li>
      ))}
    </ul>
  );
}

export default function TestPage() {
  if (process.env.NODE_ENV === 'production') notFound();

  const icons = readSvgs('icons');
  const lucide = icons.filter((icon) => icon.markup.includes('lucide-static'));
  const other = icons.filter((icon) => !icon.markup.includes('lucide-static'));
  const dividers = readSvgs('dividers');

  return (
    <main className="page-content content-grid">
      <HeaderBlock
        isPageHeader
        pretitle="Development only"
        title="Test Page"
        description="Every icon and divider in the project. This page returns a 404 in production."
      />

      <p className={styles.note}>
        See also <a href="/test/spacing">the spacing test page</a>, with every heading combination.
      </p>

      <section className={styles.section}>
        <h2>Interface icons</h2>
        <p className={styles.note}>
          Lucide stroke icons in src/assets/icons. Size them with <code>width</code> and{' '}
          <code>height</code>; colour follows the text colour.
        </p>
        <SvgGrid folder="icons" files={lucide} />
      </section>

      <section className={styles.section}>
        <h2>Decorative icons</h2>
        <p className={styles.note}>Solid and duotone icons in src/assets/icons.</p>
        <SvgGrid folder="icons" files={other} />
      </section>

      <section className={styles.section}>
        <h2>Dividers</h2>
        <SvgGrid folder="dividers" files={dividers} wide />
      </section>

      <section className={styles.section}>
        <h2>Terpene icons</h2>
        <p className={styles.note}>
          Phosphor duotone icons in src/assets/icons/terpenes, shown in each terpene&apos;s colour.
        </p>
        <ul className={styles.grid}>
          {Object.entries(terpenes).map(([key, terpene]) => (
            <li key={key} className={styles.tile} style={{ color: terpene.color }}>
              <span className={styles.preview}>{terpene.icon}</span>
              <span className={styles.name}>{terpene.name}</span>
              <code className={styles.code}>terpenes.{key}.icon</code>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Effect icons</h2>
        <p className={styles.note}>
          Phosphor duotone icons in src/assets/icons/effects, shown in each effect&apos;s colour.
        </p>
        <ul className={styles.grid}>
          {Object.entries(effects).map(([key, effect]) => (
            <li key={key} className={styles.tile} style={{ color: effect.color }}>
              <span className={styles.preview}>{effect.icon}</span>
              <span className={styles.name}>{effect.name}</span>
              <code className={styles.code}>effects.{key}.icon</code>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
