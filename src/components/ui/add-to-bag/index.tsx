'use client';

import { useId, useState } from 'react';
import ShoppingBagIcon from '@/assets/icons/shopping-bag.svg';
import Button from '@/components/ui/button';
import Price from '@/components/ui/price';
import QuantityStepper from '@/components/ui/quantity-stepper';
import { useCart, MAX_QUANTITY } from '@/context/CartContext';
import { DEFAULT_WEIGHT, WEIGHTS, formatPrice, getWeightOption } from '@/lib/pricing';
import type { StrainPrices, Weight } from '@/types';
import styles from './styles.module.scss';

interface AddToBagProps {
  slug: string;
  name: string;
  prices: StrainPrices;
}

export default function AddToBag({ slug, name, prices }: AddToBagProps) {
  const { addItem, openBag, getQuantity, hydrated } = useCart();
  const [weight, setWeight] = useState<Weight>(DEFAULT_WEIGHT);
  const [quantity, setQuantity] = useState(1);
  const groupName = useId();

  const inBag = hydrated ? getQuantity(slug, weight) : 0;
  const remaining = MAX_QUANTITY - inBag;
  const atLimit = remaining <= 0;
  const stepperValue = Math.min(quantity, Math.max(remaining, 1));
  const weightLabel = getWeightOption(weight).label.toLowerCase();
  const total = prices[weight] * stepperValue;

  const handleAdd = () => {
    if (atLimit) return;
    addItem(slug, weight, stepperValue);
    setQuantity(1);
    openBag();
  };

  return (
    <div className={styles.addToBag}>
      <p className={styles.price}>
        <Price amount={total} className={styles.priceAmount} />
        {stepperValue > 1 && (
          <span className={styles.priceEach}>
            <Price amount={prices[weight]} /> each
          </span>
        )}
      </p>

      <fieldset className={styles.weights}>
        <legend className={styles.legend}>Weight</legend>
        <div className={styles.weightOptions}>
          {WEIGHTS.map((option) => (
            <label key={option.id} className={styles.weightOption}>
              <input
                type="radio"
                name={groupName}
                value={option.id}
                checked={weight === option.id}
                onChange={() => setWeight(option.id)}
                aria-label={`${option.label}, ${formatPrice(prices[option.id])}`}
              />
              <span className={styles.weightName} aria-hidden="true">{option.short}</span>
              <span className={styles.weightPrice} aria-hidden="true">
                <Price amount={prices[option.id]} />
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className={styles.controls}>
        <QuantityStepper
          value={stepperValue}
          onChange={setQuantity}
          max={Math.max(remaining, 1)}
          label={name}
        />
        <Button variant="primary" size="lg" onClick={handleAdd} disabled={atLimit} className={styles.button}>
          <span className={styles.buttonInner}>
            <ShoppingBagIcon width={16} height={16} aria-hidden="true" />
            Add to Bag
          </span>
        </Button>
      </div>
      <p className={styles.status} aria-live="polite">
        {atLimit
          ? `You have the maximum of ${MAX_QUANTITY} ${weightLabel}s in your bag.`
          : inBag > 0
            ? `${inBag} × ${weightLabel} already in your bag.`
            : ''}
      </p>
    </div>
  );
}
