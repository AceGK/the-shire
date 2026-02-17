import Map from "@/components/modules/map";
import HeaderBlock from "@/components/modules/header-block";
import Reveal from "@/components/ui/reveal";

export default function RetailersPage() {
  return (
    <main className="page-content content-grid">
      <HeaderBlock
        isPageHeader
        title="Where to Buy"
        description="Find our premium Southfarthing leaf at these fine establishments across Middle-earth."
      />
      <Reveal delay={200}>
        <Map variant="light" />
      </Reveal>
    </main>
  );
}
