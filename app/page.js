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


      <div id="about" className="split">
        <div>
          {/* <img src="/images/hobbit-house.jpg" alt="The Shire" width="100%" /> */}
          image
        </div>


        <div>
          <p>We cultivate strains as varied and enchanting as the landscapes of Middle-Earth. From the comforting &apos;Old Toby&apos; to the adventurous &apos;Bag End Blend&apos;, each of our strains is a homage to the rich tapestry that is Arda. They are grown to bring a bit of our magical lands into the homes and hearts of those who partake.</p>

          <h2>Quality</h2>
          <p>Quality for us is as essential as a hearty meal. Each leaf and bud is inspected with care to ensure our strains are as pure and wholesome as a Hobbit&apos;s pantry.  </p>

          <h2>Sustanability</h2>
          <p>Inspired by the lush greenery of the Shire, our farm is a bastion of sustainable practices. We use methods that are gentle on the land, ensuring that our footprint on Middle-Earth is as light as a Hobbit&apos;s touch. </p>

          <h2>Tradition</h2>
          <p>Continuing the legacy of &apos;Old Toby&apos; Hornblower&apos;s pioneering spirit in Longbottom, our farm upholds the deep-rooted traditions of the Shire. We harmoniously merge time-honored techniques with modern insights, ensuring that each strain, particularly our cherished &apos;Old Toby&apos;, embodies the tranquility and communal spirit that are hallmarks of our lands.</p>
        </div>
      </div>



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
        <h2>Support our partners</h2>
        <ul>
          <li>Merry&apos;s Munchies</li>
          <li>Gimli&apos;s Grinders</li>
          <li>ENT Vapes</li>
          <li>Treebeard&apos;s Tinctures</li>
          <li>Galadriel's Glassworks</li>
        </ul>
      </section>
    </main>
  );
}