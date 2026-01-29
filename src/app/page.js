import Press from "@/components/modules/press";
import StrainCarousel from "@/components/modules/strain-carousel";
import Map from "@/components/modules/map";
import Hero from "@/components/modules/hero";
import Reviews from "@/components/modules/reviews";
import About from "@/components/modules/about";
import SplitImage from "@/components/modules/split-image";
import Button from "@/components/ui/button";
import HeaderBlock from "@/components/modules/header-block";

export default function Home() {
  return (
    <>
      <main id="main-content">
        <Hero id="home" />

        <section id="about" className="content-grid">
          <SplitImage
            image="/images/the-shire.jpg"
            alt="Hobbit house"
            pretitle="Our Story"
            title="Continuing a Legacy Since the Third Age"
            subtitle="A tradition of excellence"
            buttons={
              <>
                <Button href="/about">About Us</Button>
              </>
            }
          >
            <p>In the gentle hills of Longbottom, where the morning mist rolls through the valleys, we tend to our crops as Hobbits have for generations. No magic — just honest work and rich Shire soil.</p>
          </SplitImage>
        </section>

        <section className="content-grid bg-map-green">
            <figure className="full-width-quote">
              <blockquote>The Finest Pipe-weed in the Southfarthing</blockquote>
              {/* <figcaption>— Bilbo Baggins</figcaption> */}
            </figure>
        </section>

        <section id="strains" className="content-grid">
          <HeaderBlock
            as="h2"
            title="Our Strains"
            description="Each of our strains pays homage to the enchanting world of Middle-Earth."
          />
          <StrainCarousel />
        </section>

        <section id="buy" className="content-grid bg-map-green">
          <HeaderBlock
            as="h2"
            variant="light"
            title="Where to Buy"
            description="Find our premium Southfarthing leaf at these fine establishments. You don't need to go to Mordor and back to find such fine pipe-weed."
          />
          <Map />
        </section>

        <section id="press" className="content-grid">
          <HeaderBlock
            as="h2"
            title="As Seen In"
          />
          <Press />
        </section>

        <section id="reviews" className="content-grid bg-map-green">
           <HeaderBlock
            as="h2"
            variant="light"
            title="Reviews"
          />
            <Reviews />
        </section>

      </main>
    </>
  );
}
