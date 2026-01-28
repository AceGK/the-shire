import Press from "@/components/modules/press";
import Strains from "@/components/modules/strains";
import Map from "@/components/modules/map";
import Hero from "@/components/modules/hero";
import Reviews from "@/components/modules/reviews";
import About from "@/components/modules/about";
import SplitImage from "@/components/modules/split-image";
import Button from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <main id="main-content">
        <Hero id="home" />

        <section id="about" className="content-grid">
          {/* <div>
            <About />
          </div> */}
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
            <p>In the gentle hills of Longbottom, where the morning mist rolls through the valleys, we tend to our crops as Hobbits have for generations. No magic, no shortcuts — just honest work and rich Shire soil.</p>
          </SplitImage>
        </section>

        <section id="process" className="content-grid bg-map-green">

        </section>

        <section id="strains" className="content-grid">
          <div>
            <Strains />
          </div>
        </section>

        <section id="buy" className="content-grid bg-map-green">
          <div>
            <Map />
          </div>
        </section>

        <section id="press" className="content-grid">
          <div>
            <Press />
          </div>
        </section>

        <section id="reviews" className="content-grid bg-map-green">
          <div>
            <Reviews />
          </div>
        </section>

        {/* <section id="partners" className="content-grid">
          <div>
            <Partners />
          </div>
        </section> */}

        {/* <section id="visit" className="content-grid bg-color">
          <div>
            <Visit />
          </div>
        </section> */}
      </main>
    </>
  );
}
