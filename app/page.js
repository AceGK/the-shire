import AsSeenIn from "@/components/as-seen-in";
import Strains from "@/components/strains";
import Map from "@/components/map";
import Hero from "@/components/hero";
import Visit from "@/components/visit";
import Packaging from "@/components/packaging";
import Reviews from "@/components/reviews";

export default function Home() {
  return (
    <main className="content-grid">

      <Hero />

      <section id="strains">
        <Strains />
      </section>

      <section>
        <Packaging />
      </section>

      <section>
        <AsSeenIn />
      </section>

      <section id="buy">
        <Map />
      </section>

      <section id="visit">
        <Visit />
      </section>

      <section>
        <Reviews />
      </section>
      <section>
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
  );
}