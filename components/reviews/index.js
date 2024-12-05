import styles from './styles.module.scss';

export default function Reviews() {
  return (
    <div className={styles.reviews}>
      <h2>Reviews</h2>
      <ul>
        <li>
          <h3>Aragorn E.</h3>
          <div>As a ranger, I&apos;ve tasted many herbs, but nothing quite as regal as the pipe-weed from The Shire; truly fit for the King of Gondor.</div>
        </li>
        <li>
          <h3>Boromir B.</h3>
          <div>One does not simply walk into The Shire without marveling at its rich tapestry of Hobbit-grown herbs, as deep and nuanced as Gondor&apos;s own lore.</div>
        </li>
        <li>
          <h3>Gandalf G.</h3>
          <div>This farm, much like the Hobbits themselves, is unassuming yet full of surprises. Each plant is nurtured with a care that rivals even that of the Elves.</div>
        </li>
      </ul>
    </div>
  );
}

