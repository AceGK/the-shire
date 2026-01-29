import styles from './promo.module.scss';

export default function PromoBar({ message, onClose }) {
  return (
    <div className={styles.promoBar}>
      <div className={styles.promoInner}>
        <p className={styles.promoMessage}>{message}</p>
        <a href="/signup" className={styles.promoLink}>Click here to sign up</a>
        <button
          className={styles.promoClose}
          onClick={onClose}
          aria-label="Close promotional banner"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L13 13M1 13L13 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
