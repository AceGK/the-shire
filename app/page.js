import AsSeenIn from "@/components/as-seen-in";
import Strains from "@/components/strains";

export default function Home() {
  return (
    <main className="container">
      <img src="/images/hobbit-house.jpg" alt="The Shire" width="100%" />
      <h1>The Shire</h1>
      <p>The Finest Weed in the Southfarthing</p>

      <div>
      <img src="/images/hobbit-house.jpg" alt="The Shire" width="100%" />
        <p>We cultivate strains as varied and enchanting as the landscapes of Middle-Earth. From the comforting 'Old Toby' to the adventurous 'Bag End Blend', each of our strains is a homage to the rich tapestry that is Arda. They are grown to bring a bit of our magical lands into the homes and hearts of those who partake.</p>
      </div>

      <div>
      <img src="/images/hobbit-house.jpg" alt="The Shire" width="100%" />
        <h2>Quality</h2>
        <p>Quality for us is as essential as a hearty meal. Each leaf and bud is inspected with care to ensure our strains are as pure and wholesome as a Hobbit’s pantry.  </p>

        <h2>Sustanability</h2>
        <p>Inspired by the lush greenery of the Shire, our farm is a bastion of sustainable practices. We use methods that are gentle on the land, ensuring that our footprint on Middle-Earth is as light as a Hobbit’s touch. </p>

        <h2>Tradition</h2>
        <p>Continuing the legacy of 'Old Toby' Hornblower's pioneering spirit in Longbottom, our farm upholds the deep-rooted traditions of the Shire. We harmoniously merge time-honored techniques with modern insights, ensuring that each strain, particularly our cherished 'Old Toby', embodies the tranquility and communal spirit that are hallmarks of our lands.</p>

      </div>

      <h2>Our Strains</h2>
      <p>
        Discover our enchanting selection of strains, each carefully cultivated
        to offer a unique experience:
      </p>
      <Strains />

      <div>
        <h2>Our Packaging</h2>
        <img src="/images/hobbit-house.jpg" alt="The Shire" width="100%" />
        <ul>
          <li>
            <strong>Mallorn Leaf Bags:</strong> Made from the resilient leaves of Mallorn trees, our organic bags naturally decompose leaving no environmental trace.
          </li>
          <li>
            <strong>Elven Crafted Jars</strong> Masterfully crafted by Elves, our jars embody the elegance and precision of Rivendell's finest artisans. Made with ethereal yet durable materials, they ensure the freshness and purity of their contents, much like the lasting beauty of Lothlórien.
          </li>
          <li>
            <strong>Dwraven Crafted Barrels</strong> Our barrels are the same used for the finest dwarven ales. They are sturdy and reusable, perfect for storing your pipe-weed or other herbs.
          </li>
        </ul>
      </div>

      <AsSeenIn />

      <div>
      <img src="/images/hobbit-house.jpg" alt="The Shire" width="100%" />
        <h2>Visit Us</h2>
        <p>
          We invite you to visit The Shire and immerse yourself in our way of
          life. Stroll through our flourishing gardens, learn about our
          artisanal approach to cultivation, and discover the unique
          characteristics of our strains. Our friendly folk are always here to
          greet you with a warm smile and a hearty chat.
        </p>
      </div>
      <div>
        <h2>Where to Buy</h2>
        [map]
        <ul>
          <li>Misty Mountain Meds</li>
          <li>The Green Dragon Dispensary</li>
          <li>Hobbiton Herbals</li>
          <li>Misty Mountain Meds</li>
          <li>Rohan Remedies</li>
        </ul>

      </div>
      <div>
      <img src="/images/hobbit-house.jpg" alt="The Shire" width="100%" />
        <h2>Contact Us</h2>
        <p>
          For inquiries or to arrange a visit, please reach out to us at
          [contact information].
        </p>
      </div>
    </main>
  );
}