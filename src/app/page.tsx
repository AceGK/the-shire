import Press from "@/components/modules/press";
import StrainCarousel from "@/components/modules/strain-carousel";
import Map from "@/components/modules/map";
import Hero from "@/components/modules/hero";
import Reviews from "@/components/modules/reviews";
import SplitImage from "@/components/modules/split-image";
import Button from "@/components/ui/button";
import HeaderBlock from "@/components/modules/header-block";
import CtaSection from "@/components/modules/cta-section";
import { Divider2 } from "@/components/ui/dividers";
import Accordion, { AccordionItem } from "@/components/ui/accordion";
import { faqs } from "@/lib/faqData";

export default function Home() {
  return (
    <>
      <main id="main-content">
        <Hero id="home" />

        <section id="about" className="content-grid row">
          <SplitImage
            image="/images/the-shire.jpg"
            alt="Hobbit house"
            pretitle="Our Story"
            title="Continuing a Legacy Since the Third Age"
            subtitle="A tradition of excellence & fine company"
            buttons={
              <>
                <Button href="/about">About Us</Button>
              </>
            }
          >
            <p>
              In the gentle hills of Longbottom, where the morning mist rolls
              through the valleys, we tend to our crops as Hobbits have for
              generations. No magic — just honest work and rich Shire soil.
            </p>
          </SplitImage>
        </section>

        <section className="content-grid bg-map-green row">
          <Divider2 size="lg" color="quote" />
          <figure className="full-width-quote">
            <blockquote>The Finest Pipe-weed in the Southfarthing</blockquote>
            {/* <figcaption>— Bilbo Baggins</figcaption> */}
          </figure>
          <Divider2 size="lg" color="quote" />
        </section>

        <section id="strains" className="row">
          <div className="content-grid">
            <HeaderBlock
              as="h2"
              title="Our Strains"
              description="Each of our strains pays homage to the enchanting world of Middle-Earth."
              noMargin
            />
          </div>
          <StrainCarousel />
        </section>

        <section id="buy" className="content-grid bg-map-green row">
          <HeaderBlock
            as="h2"
            variant="light"
            title="Where to Buy"
            description="Find our premium Southfarthing leaf at these fine establishments. You don't need to go to Mordor and back to find such fine pipe-weed."
          />
          <Map />
        </section>

        <section id="press" className="content-grid row">
          <HeaderBlock as="h2" title="As Seen In" />
          <Press />
        </section>

        <section id="reviews" className="content-grid bg-map-green row">
          <HeaderBlock as="h2" variant="light" title="Reviews" />
          <Reviews />
        </section>

        <section id="faq" className="content-grid row">
          <HeaderBlock as="h2" title="FAQ" />
          <Accordion>
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                title={faq.title}
                defaultOpen={faq.defaultOpen}
              >
                {faq.content}
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="content-grid bg-map-green">
          <CtaSection variant="dark" />
        </section>
      </main>
    </>
  );
}
