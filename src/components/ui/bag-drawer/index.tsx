'use client';

import { useEffect, useRef, type KeyboardEvent } from 'react';
import Link from 'next/link';
import CloseIcon from '@/assets/icons/x.svg';
import Button from '@/components/ui/button';
import QuantityStepper from '@/components/ui/quantity-stepper';
import { useCart, MAX_QUANTITY } from '@/context/CartContext';
import Price from '@/components/ui/price';
import { getWeightOption } from '@/lib/pricing';
import styles from './styles.module.scss';

const FOCUSABLE =
  'a[href]:not([tabindex="-1"]), button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])';

export default function BagDrawer() {
  const { items, count, subtotal, isOpen, closeBag, updateQuantity, removeItem, clear } = useCart();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  // Lock page scroll and move focus into the drawer while open; restore on close.
  // Locks <html> rather than <body> so it does not fight the mobile menu's body lock.
  useEffect(() => {
    if (!isOpen) return;
    returnFocusRef.current = document.activeElement as HTMLElement | null;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = 'hidden';
    const id = window.setTimeout(() => closeRef.current?.focus(), 50);

    return () => {
      window.clearTimeout(id);
      root.style.overflow = previousOverflow;
      returnFocusRef.current?.focus?.();
    };
  }, [isOpen]);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      closeBag();
      return;
    }
    if (e.key !== 'Tab' || !panelRef.current) return;

    const focusable = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
        onClick={closeBag}
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        id="bag-drawer"
        className={`${styles.drawer} ${isOpen ? styles.open : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="bag-drawer-title"
        onKeyDown={handleKeyDown}
      >
        <header className={styles.header}>
          <h2 id="bag-drawer-title">
            Your Bag
            {count > 0 && (
              <span className={styles.headerCount}>
                {count} {count === 1 ? 'item' : 'items'}
              </span>
            )}
          </h2>
          <button ref={closeRef} type="button" className={styles.close} onClick={closeBag} aria-label="Close bag">
            <CloseIcon width={22} height={22} />
          </button>
        </header>

        {items.length === 0 ? (
          <div className={styles.empty}>
            <p className={styles.emptyTitle}>Your bag is empty</p>
            <p className={styles.emptyText}>
              Not even a pinch of pipe-weed. Browse our strains to fill it up.
            </p>
            <Button href="/strains" variant="primary" onClick={closeBag}>
              Browse Strains
            </Button>
          </div>
        ) : (
          <>
            <ul className={styles.items}>
              {items.map(({ key, slug, weight, quantity, strain, unitPrice, lineTotal }) => (
                <li key={key} className={styles.item}>
                  <Link
                    href={`/strain/${slug}`}
                    className={styles.thumb}
                    onClick={closeBag}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <img src={strain.image} alt="" />
                  </Link>

                  <div className={styles.itemBody}>
                    <Link href={`/strain/${slug}`} className={styles.itemName} onClick={closeBag}>
                      {strain.name}
                    </Link>
                    <span className={`${styles.itemType} ${styles[strain.type]}`}>{strain.type}</span>
                    <span className={styles.itemVariant}>
                      {getWeightOption(weight).label} · <Price amount={unitPrice} />
                    </span>

                    <div className={styles.itemActions}>
                      <QuantityStepper
                        size="sm"
                        value={quantity}
                        max={MAX_QUANTITY}
                        label={`${strain.name}, ${getWeightOption(weight).label.toLowerCase()}`}
                        onChange={(next) => updateQuantity(slug, weight, next)}
                      />
                      <Price amount={lineTotal} className={styles.lineTotal} />
                      <button
                        type="button"
                        className={styles.remove}
                        onClick={() => removeItem(slug, weight)}
                        aria-label={`Remove ${getWeightOption(weight).label.toLowerCase()} of ${strain.name} from bag`}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <footer className={styles.footer}>
              <div className={styles.summary}>
                <span>Subtotal</span>
                <Price amount={subtotal} />
              </div>
              <Button href="/checkout" variant="primary" size="lg" className={styles.checkout} onClick={closeBag}>
                Checkout
              </Button>
              <div className={styles.footerLinks}>
                <Button href="/strains" variant="link" onClick={closeBag} className={styles.continue}>
                  Continue Shopping
                </Button>
                <button type="button" className={styles.clear} onClick={clear}>
                  Empty Bag
                </button>
              </div>
            </footer>
          </>
        )}
      </div>
    </>
  );
}
