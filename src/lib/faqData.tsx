import Link from "next/link";
import { ReactNode } from "react";

export interface FaqItem {
  id: string;
  title: string;
  defaultOpen?: boolean;
  content: ReactNode;
}

export const faqs: FaqItem[] = [
  {
    id: "is-real-company",
    title: "Is The Shire Supply Co. a Real Company?",
    content: (
      <>
        <p>
          <strong>The Shire Supply Company</strong> is a fictional brand created
          for demonstration and portfolio purposes. No products are available
          for purchase, and no transactions can be made through this website. It
          is not associated with Middle-earth Enterprises nor the Tolkien
          Estates.
        </p>

        <p>
          This website is inspired by J.R.R. Tolkien&apos;s Middle-earth
          legendarium. All references to The Hobbit, Lord of the Rings, Middle
          Earth, The Shire, and the characters, places, items and events
          therein, are trademarks or registered trademarks of Middle-earth
          Enterprises, LLC.
        </p>
      </>
    ),
  },
  {
    id: "pipe-weed",
    title: "Concerning Pipe-weed: Tobacco or Cannabis?",
    content: (
      <>
        <p>
          In Tolkien&apos;s universe, pipe-weed is without a doubt tobacco.
          Tolkien himself clarified this in the prologue to{" "}
          <em>The Lord of the Rings</em>:
        </p>
        <p>
          <blockquote>
            &ldquo;There is another astonishing thing about Hobbits of old that
            must be mentioned, an astonishing habit: they imbibed or inhaled,
            through pipes of clay or wood, the smoke of the burning leaves of a
            herb, which they called pipe-weed or leaf, a variety probably of{" "}
            <strong>Nicotiana</strong>…the <strong>tobacco</strong> of the
            Southfarthing…&rdquo;
            <footer>
              — J.R.R. Tolkien,{" "}
              <cite>
                The Fellowship of the Ring: Prologue — Concerning Hobbits
              </cite>
            </footer>
          </blockquote>
        </p>
        <p>
          <strong>So why does this site feature cannabis?</strong> My background
          is in cannabis web development, so the choice was natural, and
          cannabis offers far richer data to explore — terpene profiles, strain
          lineages, cannabinoid breakdowns, and cross-breeding histories.
          Tobacco doesn&apos;t offer the same depth of variety to catalog. The
          site is designed to feel like a real cannabis farm and dispensary,
          serving as a living portfolio piece I can showcase to industry
          partners.
        </p>
      </>
    ),
  },
  {
    id: "strains",
    title: "Are These Real Strains/Varieties?",
    content: (
      <>
        <p>
          No — all strains on this site are fictional. However, several are
          named after actual pipe-weed varieties from Tolkien&apos;s{" "}
          <em>The Lord of the Rings</em>. In the Prologue, Meriadoc Brandybuck
          writes in his <em>Herblore of the Shire</em>:
        </p>
        <blockquote>
          &ldquo;Tobold Hornblower of Longbottom in the Southfarthing first grew
          the true pipe-weed in his gardens in the days of Isengrim the Second,
          about the year 1070 of Shire-reckoning. The best home-grown still
          comes from that district, especially the varieties now known as{" "}
          <strong>Longbottom Leaf</strong>, <strong>Old Toby</strong>, and{" "}
          <strong>Southern Star</strong>.&rdquo;
          <footer>
            — J.R.R. Tolkien,{" "}
            <cite>
              The Fellowship of the Ring: Prologue — Concerning Pipe-weed
            </cite>
          </footer>
        </blockquote>
        <p>
          These three varieties appear on this site alongside original creations
          like Tookies, Green Dragon, Mirkwood Mist, and others — each inspired
          by characters, places, and lore from Middle-earth, as well as real
          cannabis strain names. The cannabinoid profiles, terpene data, and
          strain lineages are entirely fictional, crafted to demonstrate the
          kind of product detail pages found on real dispensary websites.
        </p>
      </>
    ),
  },
  {
    id: "attribution",
    title: "Attribution",
    content: (
      <>
        <p>
          <strong>The Shire Supply Company</strong> logo and{" "}
          <Link href="/#press">press logos</Link> are original creations for
          this website.
        </p>

        <p>
          Photographic images were generated with{" "}
          <a href="https://www.midjourney.com/" rel="nofollow noreferrer">
            Midjourney
          </a>
          .
        </p>

        <p>
          This site was heavily inspired by{" "}
          <a href="https://www.hobbitontours.com/" rel="nofollow noreferrer">
            Hobbiton Tours
          </a>{" "}
          and{" "}
          <a href="https://www.cannabiotix.com/" rel="nofollow noreferrer">
            Cannabiotix
          </a>
          .
        </p>

        <p>
          Third party assets used on this website are sourced from various
          providers and are credited below:
        </p>
        <ul>
          <li>
            <a
              href="https://www.danielreeve.co.nz/Fonts/"
              rel="nofollow noreferrer"
            >
              Kereru
            </a>{" "}
            font by Daniel Reeve
          </li>
          <li>
            Middle Earth map tile by Emil Johansson /{" "}
            <a href="https://lotrproject.com" rel="nofollow noreferrer">
              lotrproject.com
            </a>
          </li>
          <li>
            Official Hobbiton Movie Set tour map by{" "}
            <a href="https://www.hobbitontours.com/" rel="nofollow noreferrer">
              Hobbiton Tours
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "technology",
    title: "Technology Stack",
    content: (
      <>
        <p>This website was built using:</p>
        <ul>
          <li>Next.js 15</li>
          <li>React 18</li>
          <li>TypeScript</li>
          <li>SCSS</li>
          <li>Swiper.js</li>
          <li>Leaflet.js</li>
          <li>FontAwesome and Lucide</li>
          <li>Vercel</li>
        </ul>
      </>
    ),
  },
];
