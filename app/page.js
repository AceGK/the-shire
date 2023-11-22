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


      <section id="about" className="bg-gradient full-width">

    <div className="about">
          <div>
            <img src="/images/hobbit-house.jpg" alt="The Shire" />
            <h2>Quality</h2>
            <p>Quality for us is as essential as a hearty meal. Each leaf and bud is inspected with care to ensure our strains are as pure and wholesome as a Hobbit&apos;s pantry.  </p>
          </div>

          <div>
            <img src="/images/hobbit-house.jpg" alt="The Shire" />
            <h2>Sustainable</h2>
            <p>Inspired by the lush greenery of the Shire, our farm is a bastion of sustainable practices. We use methods that are gentle on the land, ensuring that our footprint on Middle-Earth is as light as a Hobbit&apos;s touch. </p>
          </div>

          <div>
            <img src="/images/hobbit-house.jpg" alt="The Shire" />
            <h2>Organic</h2>
            <p>
              We believe in the purity of nature, and our organic practices ensure that our strains are as natural as the rolling hills of the Shire. We use no pesticides or chemicals, and our plants are grown in the most natural way possible.
            </p>
          </div>

          <div>
            <img src="/images/hobbit-house.jpg" alt="The Shire" />
            <h2>Tradition</h2>
            <p>Continuing the legacy of &apos;Old Toby&apos; Hornblower&apos;s pioneering spirit in Longbottom,, our farm upholds the deep-rooted traditions of cultivating the finest Southfarthing leaf, renowned for its smooth, rich flavor.</p>
          </div>
          </div>
      </section>



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