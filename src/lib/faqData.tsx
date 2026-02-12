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
    title: "Is The Shire Supply Co. a real company?",
    content: (
      <>
        <p>
          <strong>The Shire Supply Company</strong> is a fictional brand created
          for demonstration and portfolio purposes. No products are available for purchase, and no transactions can be made through this website. It is not associated with
          Middle-earth Enterprises nor the Tolkien Estates.
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
          In Tolkien&apos;s universe, pipe-weed is without a doubt tobacco — a
          variety of <em>Nicotiana</em> believed to be brought to Middle-earth
          by the Númenóreans, and later cultivated by Hobbits in the Shire.
          Tolkien himself clarified this in the prologue to{" "}
          <em>The Lord of the Rings</em>:
        </p>
        <p>
          <blockquote>
            &ldquo;There is another astonishing thing about Hobbits of old that
            must be mentioned, an astonishing habit: they imbibed or inhaled,
            through pipes of clay or wood, the smoke of the burning leaves of a
            herb, which they called pipe-weed or leaf, a variety probably of
            Nicotiana.&rdquo;
            <footer>
              — J.R.R. Tolkien, <cite>The Fellowship of the Ring</cite>
            </footer>
          </blockquote>
        </p>
        <p>
          <strong>So why does this site feature cannabis?</strong> As someone
          rooted in the cannabis industry, I wanted to bring that same spirit of
          Hobbit craft and appreciation to a plant with far richer data to
          explore — terpene profiles, strain lineages, cannabinoid breakdowns,
          and cross-breeding histories. Tobacco doesn&apos;t offer nearly the
          same depth of variety to catalog.
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
          The Shire Supply Company logo and press logos are original creations
          for this website.
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
