import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HeaderBlock from '@/components/modules/header-block';
import SplitImage from '@/components/modules/split-image';
import CtaSection from '@/components/modules/cta-section';
import Button from '@/components/ui/button';
import SpacingTokens from './SpacingTokens';
import styles from './styles.module.scss';

/*
 * Development sandbox: /test/spacing
 *
 * Every combination of eyebrow, title and subtitle in the shared heading
 * components, each followed by placeholder content, so the vertical rhythm can be
 * compared side by side. Tick "Show spacing" to tint each element; the bare
 * strips between the tints are the gaps. Resize the window to check mobile.
 *
 * Production builds always return a 404, as with /test.
 */

export const metadata: Metadata = {
  title: 'Spacing Test | The Shire',
  robots: { index: false, follow: false },
};

const EYEBROW = 'Our Collection';
const SUBTITLE =
  "Explore Middle-earth's most beloved varieties, each cultivated in the rolling hills of the Shire.";

// Every mix of the optional parts around a title
const COMBOS = [
  { label: 'Title only', pretitle: undefined, description: undefined },
  { label: 'Eyebrow + title', pretitle: EYEBROW, description: undefined },
  { label: 'Title + subtitle', pretitle: undefined, description: SUBTITLE },
  { label: 'Eyebrow + title + subtitle', pretitle: EYEBROW, description: SUBTITLE },
];

const SPLIT_COMBOS = [
  {
    label: 'Eyebrow + title + subtitle + body + button',
    pretitle: 'Our Story',
    subtitle: 'A tradition of excellence & fine company',
    button: true,
  },
  { label: 'Eyebrow + title + body', pretitle: 'How We Grow', subtitle: undefined, button: false },
  {
    label: 'Title + subtitle + body',
    pretitle: undefined,
    subtitle: 'A tradition of excellence & fine company',
    button: false,
  },
  { label: 'Title + body', pretitle: undefined, subtitle: undefined, button: false },
];

function Placeholder({ light = false }: { light?: boolean }) {
  return (
    <div className={`${styles.placeholder} ${light ? styles.placeholderLight : ''}`}>
      Section content
    </div>
  );
}

function Example({
  label,
  children,
  dark = false,
}: {
  label: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className={`${styles.example} ${dark ? `${styles.exampleDark} bg-map-green` : ''}`}>
      <p className={styles.exampleLabel}>{label}</p>
      <div className={styles.demo}>{children}</div>
    </div>
  );
}

export default function SpacingTestPage() {
  if (process.env.NODE_ENV === 'production') notFound();

  return (
    <main className={`${styles.page} page-content`}>
      <div className="content-grid">
        <HeaderBlock
          isPageHeader
          pretitle="Development only"
          title="Spacing Test"
          description="Every heading combination with the content that follows it. This page returns a 404 in production."
        />

        <label className={styles.toggle}>
          <input type="checkbox" />
          Show spacing (tints each element; the bare strips are the gaps)
        </label>

        <SpacingTokens />
      </div>

      <section className={`content-grid ${styles.group}`}>
        <h2 className={styles.groupTitle}>Page header (h1)</h2>
        {COMBOS.map((combo) => (
          <Example key={combo.label} label={combo.label}>
            <HeaderBlock
              isPageHeader
              title="Our Strains"
              pretitle={combo.pretitle}
              description={combo.description}
            />
            <Placeholder />
          </Example>
        ))}
      </section>

      <section className={`content-grid ${styles.group}`}>
        <h2 className={styles.groupTitle}>Section header (h2), dark text</h2>
        {COMBOS.map((combo) => (
          <Example key={combo.label} label={combo.label}>
            <HeaderBlock
              as="h2"
              title="Strains"
              pretitle={combo.pretitle}
              description={combo.description}
            />
            <Placeholder />
          </Example>
        ))}
      </section>

      <section className={`content-grid ${styles.group}`}>
        <h2 className={styles.groupTitle}>Section header (h2), light text on green</h2>
        {COMBOS.map((combo) => (
          <Example key={combo.label} label={combo.label} dark>
            <HeaderBlock
              as="h2"
              variant="light"
              title="Where to Buy"
              pretitle={combo.pretitle}
              description={combo.description}
            />
            <Placeholder light />
          </Example>
        ))}
      </section>

      <section className={`content-grid ${styles.group}`}>
        <h2 className={styles.groupTitle}>Subsection header (h3)</h2>
        {COMBOS.map((combo) => (
          <Example key={combo.label} label={combo.label}>
            <HeaderBlock
              as="h3"
              title="Recyclable Packaging"
              pretitle={combo.pretitle}
              description={combo.description}
            />
            <Placeholder />
          </Example>
        ))}
      </section>

      <section className={`content-grid ${styles.group}`}>
        <h2 className={styles.groupTitle}>Split image</h2>
        {SPLIT_COMBOS.map((combo) => (
          <Example key={combo.label} label={combo.label}>
            <SplitImage
              image="/images/the-shire-supply-co-story.jpg"
              alt=""
              pretitle={combo.pretitle}
              title="Continuing a Legacy Since the Third Age"
              subtitle={combo.subtitle}
              buttons={
                combo.button ? (
                  <Button variant="primary" href="/about">
                    About Us
                  </Button>
                ) : undefined
              }
            >
              <p>
                In the gentle hills of Longbottom, where the morning mist rolls through the valleys,
                we tend to our crops as Hobbits have for generations. No magic, just honest work and
                rich Shire soil.
              </p>
            </SplitImage>
          </Example>
        ))}
      </section>

      <section className={`content-grid ${styles.group}`}>
        <h2 className={styles.groupTitle}>Call to action</h2>
        <Example label="Light">
          <CtaSection variant="light" />
        </Example>
        <Example label="Dark, on green" dark>
          <CtaSection variant="dark" />
        </Example>
      </section>

      <section className={`content-grid ${styles.group}`}>
        <h2 className={styles.groupTitle}>Plain headings and body text</h2>
        <Example label="Global h2, h3, h4 and paragraphs (no component styles)">
          <div className={styles.prose}>
            <h2>Section heading</h2>
            <p>
              Body text at the global size and line height. In a hole in the ground there lived a
              hobbit. Not a nasty, dirty, wet hole, nor yet a dry, bare, sandy hole: it was a
              hobbit-hole, and that means comfort.
            </p>
            <h3>Subsection heading</h3>
            <p>
              A second paragraph, to check the gap above and below a smaller heading and between
              paragraphs.
            </p>
            <h4>Card title</h4>
            <p>And a short line under the smallest heading.</p>
          </div>
        </Example>
      </section>
    </main>
  );
}
