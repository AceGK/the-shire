import AsSeenIn from "@/components/as-seen-in";
import Strains from "@/components/strains";
import Map from "@/components/map";
import Hero from "@/components/hero";
import Visit from "@/components/visit";
import Packaging from "@/components/packaging";

export default function Home() {
  return (
    <main className="content-grid">

      <Hero />

      {/* <section id="strains">
        <Strains />
      </section> */}

      {/* <section>
        <Packaging />
      </section> */}

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
        <h2>Reviews</h2>
        <div>Aragorn: "As a ranger, I've tasted many herbs, but nothing quite as regal as the pipe-weed from The Shire; truly fit for the King of Gondor."</div>

        <div>Boromir: "One does not simply walk into The Shire without marveling at its rich tapestry of Hobbit-grown herbs, as deep and nuanced as Gondor's own lore."</div>

        <div>Gandalf the Grey: "This farm, much like the Hobbits themselves, is unassuming yet full of surprises. Each plant is nurtured with a care that rivals even that of the Elves. </div>
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