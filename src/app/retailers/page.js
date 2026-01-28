import Map from "@/components/modules/map";
import HeaderBlock from "@/components/modules/header-block";

export default function RetailersPage() {
  return (
    <main className="page-content content-grid">
      <HeaderBlock
        title="Where to Buy"
        description="Find our premium Southfarthing leaf at these fine establishments across Middle-earth."
      />
        <Map variant="light" />
    </main>
  );
}
