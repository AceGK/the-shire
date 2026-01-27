import styles from './styles.module.scss';
import reviews from '@/lib/reviews.json';

export default function Reviews() {
  return (
    <div className={styles.reviews}>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <h3>{review.name}</h3>
            <div>{review.review}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

