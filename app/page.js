import AsSeenIn from "@/components/as-seen-in";
import Strains from "@/components/strains";
import Map from "@/components/map";
import Hero from "@/components/hero";
import Visit from "@/components/visit";
import Packaging from "@/components/packaging";
import Reviews from "@/components/reviews";

export default function Home() {
  return (
    <>
    <Hero />
    <main>

      <section id="strains" className="content-grid bg-texture">
        <Strains />
      </section>

      <section className="content-grid bg-color">
        <Packaging />
      </section>

      <section className="content-grid bg-texture">
        <AsSeenIn />
      </section>

      <section id="buy" className="content-grid bg-texture">
        <Map />
      </section>

      <section id="visit" className="content-grid bg-texture">
        <Visit />
      </section>

      <section className="content-grid bg-texture">
        <Reviews />
      </section>
      <section className="content-grid bg-texture">
        <h2>Support our partners</h2>
        <ul>
          <li>Merry&apos;s Munchies</li>
          <li>Gimli&apos;s Grinders</li>
          <li>ENT Vapes</li>
          <li>Treebeard&apos;s Tinctures</li>
          <li>Galadriel&apos;s Glassworks</li>
        </ul>
      </section>
    </main>
    </>
  );
}