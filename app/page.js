import AsSeenIn from "@/components/as-seen-in";
import Strains from "@/components/strains";

export default function Home() {
  return (
    <main className="container">
      <h1>The Shire</h1>
      <p>The Finest Weed in the Southfarthing</p>

      <p>We cultivate strains as varied and enchanting as the landscapes of Middle-Earth. From the comforting 'Old Toby' to the adventurous 'Bag End Blend', each of our strains is a homage to the rich tapestry of our world. They are grown to bring a bit of our magical lands into the homes and hearts of those who partake.</p>

      <h2>Quality</h2>
      <p>Quality for us is as essential as a hearty meal. Each leaf and bud is inspected with care to ensure our strains are as pure and wholesome as a Hobbit’s pantry.  </p>

      <h2>Sustanability</h2>
      <p>Inspired by the lush greenery of the Shire, our farm is a bastion of sustainable practices. We use methods that are gentle on the land, ensuring that our footprint on Middle-Earth is as light as a Hobbit’s touch. </p>

      <h2>Tradition</h2>
      <p>Continuing the legacy of 'Old Toby' Hornblower's pioneering spirit in Longbottom, our farm upholds the deep-rooted traditions of the Shire. We harmoniously merge time-honored techniques with modern insights, ensuring that each strain, particularly our cherished 'Old Toby,' embodies the tranquility and communal spirit that are hallmarks of our lands.</p>

      <h2>Our Strains</h2>
      <p>
        Discover our enchanting selection of strains, each carefully cultivated
        to offer a unique experience:
      </p>
      <Strains />

      <div>
        <h2>Our Packaging</h2>
        <ul>
          <li>
            <strong>Reclaimed Wood Boxes:</strong> Durable and reusable, these
            boxes are crafted from reclaimed wood, embodying the essence of
            nature.
          </li>
          <li>
            <strong>Biodegradable Cloth Bags:</strong> Made from organic
            materials, these bags decompose naturally, leaving no trace behind.
          </li>
          <li>
            <strong>Recycled Paper Wrappings:</strong> Utilizing recycled paper
            for packaging, printed with soy-based inks, reducing environmental
            impact.
          </li>
        </ul>
      </div>

      <AsSeenIn />

      <div>
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
        <p></p>
      </div>
      <div>
        <h2>Contact Us</h2>
        <p>
          For inquiries or to arrange a visit, please reach out to us at
          [contact information].
        </p>
      </div>
    </main>
  );
}