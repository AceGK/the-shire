import Press from "@/components/modules/press";
import Process from "@/components/modules/process";
import Strains from "@/components/modules/strains";
import Map from "@/components/modules/map";
import Partners from "@/components/modules/partners";
import Hero from "@/components/modules/hero";
import Visit from "@/components/modules/visit";
import Packaging from "@/components/modules/packaging";
import Reviews from "@/components/modules/reviews";
import About from "@/components/modules/about";

export default function Home() {
  return (
    <>
      <main id="main-content">
        <Hero id="home" />

        <section id="about" className="content-grid">
          <div>
            <About />
          </div>
        </section>

        <section id="process" className="content-grid bg-map-green">
          <div>
            <Process />
          </div>
          <div>
            <Packaging />
          </div>
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
