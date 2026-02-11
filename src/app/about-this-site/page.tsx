import HeaderBlock from "@/components/modules/header-block";
import Accordion, { AccordionItem } from "@/components/ui/accordion";

export default function AboutThisSite() {
  return (
    <main id="main-content">
      <HeaderBlock
        isPageHeader
        title="About This Site"
        description="Information about this website, including copyright notices and attribution."
      />

      <section className="content-grid pt-5 pb-11">
        <Accordion>
          <AccordionItem title="Copyright Notice" defaultOpen>
            <p>
              <strong>The Shire Supply Company</strong> is a fictional brand
              created for demonstration and portfolio purposes. It is not
              associated with Middle-earth Enterprises nor the Tolkien Estates.
              It is driven by the passion for Tolkiens works.
            </p>
            <p>
              This website is inspired by J.R.R. Tolkien&apos;s Middle-earth
              legendarium. All references to The Hobbit, Lord of the Rings,
              Middle Earth, The Shire, and the characters, places, items and
              events therein, are trademarks or registered trademarks of
              Middle-earth Enterprises, LLC.
            </p>
          </AccordionItem>

          <AccordionItem title="Attribution">
            <p>
              The Shire Supply Company logo and press logos are original
              creations for this website.{" "}
            </p>

            <p>
              Photographic images were generated with{" "}
              <a href="https://www.midjourney.com/" rel="nofollow noreferrer">
                Midjourney
              </a>
              .
            </p>
            
            <p>This site was heavily inspired by <a href="https://www.hobbitontours.com/" rel="nofollow noreferrer">Hobbiton Tours</a> and <a href="https://www.cannabiotix.com/" rel="nofollow noreferrer">Cannabiotix</a>.</p>

            <p>
              Third party assets used on this website
              are sourced from various providers and are credited below:
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
                Official Hobbiton Movie Set tour map by <a href="https://www.hobbitontours.com/" rel="nofollow noreferrer">Hobbiton Tours</a>
              </li>
            </ul>
            
          </AccordionItem>

          <AccordionItem title="Technology Stack">
            <p>This website was built using modern web technologies:</p>
            <ul>
              <li>Next.js 15 with App Router</li>
              <li>React 18</li>
              <li>TypeScript</li>
              <li>SCSS Modules for styling</li>
              <li>Swiper.js for interactive sliders</li>
              <li>Leaflet.js for interactive maps</li>
              <li>FontAwesome and Lucide for icons</li>
              <li>Vercel for deployment</li>
            </ul>
          </AccordionItem>

          <AccordionItem title="Disclaimer">
            <p>
              This is a fictional website created for demonstration purposes.
              The Shire Supply Company does not exist as an actual business
              entity. No products are available for purchase, and no
              transactions can be made through this website.
            </p>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
