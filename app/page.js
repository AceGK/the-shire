import Press from "@/components/press";
import Process from "@/components/process";
import Strains from "@/components/strains";
import Map from "@/components/map";
import Hero from "@/components/hero";
import Visit from "@/components/visit";
import Packaging from "@/components/packaging";
import Reviews from "@/components/reviews";
import About from "@/components/about";

export default function Home() {
  return (
    <>
      <main id="main-content">
        <Hero id="home" />

        <section id="about" className="content-grid bg-texture">
          <About />
          </section>

        <section id="process" className="content-grid bg-color">
          <Process />
          <Packaging />
        </section>

        <section id="strains" className="content-grid bg-texture">
          <Strains />
        </section>

        <section id="visit" className="content-grid bg-color">
          <Visit />
        </section>

        <section id="buy" className="content-grid bg-color">
          <Map />
          <h2>Support our partners</h2>
          <ul>
            <li>Merry&apos;s Munchies</li>
            <li>Gimli&apos;s Grinders</li>
            <li>ENT Vapes</li>
            <li>Treebeard&apos;s Tinctures</li>
            <li>Galadriel&apos;s Glassworks</li>
          </ul>
        </section>

        <section id="press" className="content-grid bg-texture">
          <Press />
        </section>

        <section id="reviews" className="content-grid bg-texture">
          <Reviews />
        </section>
      </main>
    </>
  );
}