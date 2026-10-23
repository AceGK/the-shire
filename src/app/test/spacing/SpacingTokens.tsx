'use client';

import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

// The rhythm settings from globals.scss, read live from the page so this list
// always shows what the browser is actually using at the current width.
const TOKENS = [
  ['--space-eyebrow', 'Eyebrow to title'],
  ['--space-title', 'Title to subtitle'],
  ['--space-subtitle', 'Subtitle to body copy (split image)'],
  ['--space-header', 'Heading group to section content'],
  ['--lh-heading', 'Heading line height'],
  ['--lh-subtitle', 'Subtitle line height'],
  ['--lh-body', 'Body line height'],
  ['--fs-eyebrow', 'Eyebrow size'],
  ['--ls-eyebrow', 'Eyebrow letter-spacing'],
  ['--fs-section-title', 'Section title size'],
  ['--fs-section-subtitle', 'Subtitle size'],
  ['--fs-body', 'Body size'],
] as const;

/** Resolve a custom property to pixels where it is a length, so clamp() shows its current value. */
function measure(name: string): string {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  if (/^[\d.]+$/.test(raw)) return raw; // unitless (line heights)
  const probe = document.createElement('div');
  probe.style.position = 'absolute';
  probe.style.visibility = 'hidden';
  probe.style.width = `var(${name})`;
  document.body.appendChild(probe);
  const px = probe.getBoundingClientRect().width;
  probe.remove();
  return px ? `${Math.round(px * 10) / 10}px` : raw;
}

export default function SpacingTokens() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      setWidth(window.innerWidth);
      setValues(Object.fromEntries(TOKENS.map(([name]) => [name, measure(name)])));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div className={styles.tokens}>
      <p className={styles.tokensCaption}>
        Values at the current window width{width ? ` (${width}px)` : ''}
      </p>
      <table>
        <tbody>
          {TOKENS.map(([name, label]) => (
            <tr key={name}>
              <th scope="row">{label}</th>
              <td>
                <code>{name}</code>
              </td>
              <td className={styles.tokenValue}>{values[name] ?? '…'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
