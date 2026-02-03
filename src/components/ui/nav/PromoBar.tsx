import Link from 'next/link';
import { X } from 'lucide-react';
import styles from './promo.module.scss';

interface PromoBarProps {
  message?: string;
  onClose: () => void;
}

export default function PromoBar({ onClose }: PromoBarProps) {
  return (
    <div className={styles.promoBar}>
      <div className={styles.promoInner}>
        <p className={styles.promoMessage}>
          <Link href="/subscribe" className={styles.promoLink}>Join our Fellowship</Link> to receive 10% off!
        </p>
        <button
          className={styles.promoClose}
          onClick={onClose}
          aria-label="Close promotional banner"
        >
          <X size={24} />
        </button>
      </div>
    </div>
  );
}
