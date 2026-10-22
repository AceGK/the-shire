import { CURRENCY_SYMBOL, formatPrice } from '@/lib/pricing';
import styles from './styles.module.scss';

interface PriceProps {
  amount: number;
  className?: string;
}

/**
 * A formatted price, e.g. "£12", with the symbol set small and raised. Screen
 * readers get the plain "£12" from the hidden text.
 */
export default function Price({ amount, className = '' }: PriceProps) {
  return (
    <span className={`${styles.price} ${className}`}>
      <span className={styles.symbol} aria-hidden="true">{CURRENCY_SYMBOL}</span>
      <span aria-hidden="true">{amount}</span>
      <span className="visually-hidden">{formatPrice(amount)}</span>
    </span>
  );
}
