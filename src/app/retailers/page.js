import Map from "@/components/modules/map";
import styles from "./styles.module.scss";

export default function RetailersPage() {
  return (
    <main className="page-content">
      <div className={styles.mapWrapper}>
        <Map variant="light" />
      </div>
    </main>
  );
}
