import Press from "@/components/modules/press";
import StrainCarousel from "@/components/modules/strain-carousel";
import Map from "@/components/modules/map";
import Hero from "@/components/modules/hero";
import Reviews from "@/components/modules/reviews";
import SplitImage from "@/components/modules/split-image";
import Button from "@/components/ui/button";
import HeaderBlock from "@/components/modules/header-block";
import CtaSection from "@/components/modules/cta-section";
import Quote from "@/components/modules/quote";
import Accordion, { AccordionItem } from "@/components/ui/accordion";
import { faqs } from "@/lib/faqData";
import Reveal from "@/components/ui/reveal";

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
                <Button variant="primary" href="/about">About Us</Button>
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
          <Quote attribution="Bilbo Baggins, Esq.">
            The Finest Pipe-weed in the Southfarthing
          </Quote>
        </section>

        <section id="strains" className="row">
          <div className="content-grid">
            <HeaderBlock
              as="h2"
              pretitle="Our Collection"
              title="Strains"
              description="Explore Middle-earth's most beloved varieties, each cultivated in the rolling hills of the Shire."
              noMargin
            />
          </div>
          <StrainCarousel />
        </section>

        <section id="buy" className="content-grid bg-map-green row">
          <HeaderBlock
            as="h2"
            variant="light"
            pretitle="Find us"
            title="Where to Buy"
            description="Find our premium leaf at these fine establishments. You don't need to go to Mordor and back to find such fine pipe-weed."
          />
          <Reveal delay={200}>
            <Map />
          </Reveal>
        </section>

        <section id="press" className="content-grid row">
          <HeaderBlock as="h2" title="As Seen In" />
          <Reveal delay={100}>
            <Press />
          </Reveal>
        </section>

        <section id="reviews" className="content-grid bg-map-green row">
          <HeaderBlock
            as="h2"
            variant="light"
            pretitle="Testimonials"
            title="Reviews"
            description="What the good folk of Middle-earth have to say."
          />
          <Reviews />
        </section>

        <section id="faq" className="content-grid row">
          <HeaderBlock as="h2" pretitle="Common Questions" title="FAQ" />
          <Reveal delay={300}>
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
          </Reveal>
        </section>

        <section className="content-grid bg-map-green">
          <CtaSection variant="dark" />
        </section>
      </main>
    </>
  );
}
