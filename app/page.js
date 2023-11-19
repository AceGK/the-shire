import Strains from "@/components/strains";

export default function Home() {
  return (
    <main>
      <h1>The Shire</h1>
      <p>The Finest Weed in the Southfarthing</p>
      <h2>About Our Green Haven</h2>
      In the heart of a verdant valley lies The Shire, a quaint and charming
      cannabis farm where the wonders of nature and the joys of simplicity
      converge. Here, we live in harmony with the earth, tending to our plants
      with a gentle touch and a deep respect for the natural world.
      <h2>Our Philosophy</h2>
      In The Shire, we cherish the slow life, where every leaf and bud is
      nurtured with patience and love. Our sustainable farming practices ensure
      that we give back to the land as much as we take, maintaining a balance as
      old as the hills that surround us.
      <h2>Our Strains</h2>
      <p>
        Discover our enchanting selection of strains, each carefully cultivated
        to offer a unique experience:
      </p>
      <Strains />
      <p>
        White Wizard: Inspired by the wise and powerful wizards, White Wizard is
        a strain revered for its clarity-inducing and enlightening effects. It's
        excellent for moments of deep thought or philosophical discussions.
      </p>
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
      <div>
        <h2>As Seen in</h2>
        <ul>
          {/* new york times */}
          <li>The Middle-Earth Messenger</li>
          {/* the village voice */}
          <li>The Valinor Voice</li>
          {/* the Boston Hearld */}
          <li>Hobbiton Herald</li>
          {/* similar to the gazette */}
          <li>Gondor Gazette</li>
          {/* The San Francisco Chronicle */}
          <li>The Erebor Chronicle</li>
          {/* The Hollywood Reporter */}
          <li>The Rivendell Reporter</li>
          {/* BBC news */}
          <li>Númenor News</li>
          {/*  */}
          <li>The Rohan Report</li>
          {/*  */}
          <li>The Mordor Monitor</li>
          {/*  */}
          <li>The Bree Bugle</li>
          {/*  */}
        </ul>
      </div>
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