import Process from "@/components/modules/process";
import Packaging from "@/components/modules/packaging";
import SplitImage from "@/components/modules/split-image";
import HeaderBlock from "@/components/modules/header-block";
import CtaSection from "@/components/modules/cta-section";

export default function About() {
  return (
    <main id="main-content">
      <HeaderBlock
        isPageHeader
        title="About Us"
        description="Cultivating the finest leaf in the Southfarthing since S.R. 1070."
        noMargin
      />
      <section className="content-grid row">
        <SplitImage
          image="/images/hobbit-house-4.jpg"
          alt="Hobbit house"
          pretitle="How We Grow"
          title="Our Philosophy"
        >
          <p>
            In The Shire, we cherish the slow life, where every leaf and bud is
            nurtured with patience and love. Our sustainable farming practices
            ensure that we give back to the land as much as we take, maintaining
            a balance as old as the hills that surround us.
          </p>
        </SplitImage>

        <SplitImage
          image="/images/tradition.jpg"
          alt="Hobbit house"
          pretitle="Est. S.R. 1070"
          title="Our Founder"
          reverse={true}
        >
          <p>
            Tobold &apos;Old Toby&apos; Hornblower hails from Longbottom in the Southfarthing of the Shire. His
            pioneering spirit led to the first true cultivation of the herb, transforming the local tradition of
            pipe-weed into a revered art form. Tobold&apos;s legacy
            lives on in our farm, guiding us in sustaining quality, community,
            and a profound connection with nature.
          </p>
        </SplitImage>
      </section>

      <section id="process" className="content-grid bg-map-green row">
        <div>
          <Process />
        </div>
        <div>
          <Packaging />
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
