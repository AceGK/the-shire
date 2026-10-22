'use client';

import { useMemo, useState, type FormEvent, type ReactNode } from 'react';
import Link from 'next/link';
import {
  Bike,
  Clock,
  CreditCard,
  Feather,
  LocateFixed,
  Lock,
  MapPin,
  Search,
  Store,
  Wallet,
} from 'lucide-react';
import Button from '@/components/ui/button';
import Price from '@/components/ui/price';
import { useCart } from '@/context/CartContext';
import { getWeightOption } from '@/lib/pricing';
import retailersData from '@/lib/retailers.json';
import styles from './styles.module.scss';

type Fulfilment = 'delivery' | 'pickup';
type DeliverySpeed = 'standard' | 'express';
type Payment = 'card' | 'on-collection';

interface Retailer {
  name: string;
  region: string;
}

const retailers = retailersData as Retailer[];

const REGIONS = ['Westfarthing', 'Eastfarthing', 'Northfarthing', 'Southfarthing', 'Buckland', 'Bree-land'];

/** Standard delivery is free from this subtotal up, in pounds. */
const FREE_DELIVERY_FROM = 50;
const STANDARD_FEE = 5;
const EXPRESS_FEE = 12;

const PICKUP_TIMES = [
  'As soon as possible',
  'Elevenses (11am)',
  'Luncheon (1pm)',
  'Afternoon tea (4pm)',
  'Supper (7pm)',
];

/**
 * A demo checkout. Every field works, but the Place Order button is disabled and
 * the form never submits, so no order or payment detail leaves the page.
 */
export default function Checkout() {
  const { items, count, subtotal, hydrated } = useCart();
  const [fulfilment, setFulfilment] = useState<Fulfilment>('delivery');
  const [speed, setSpeed] = useState<DeliverySpeed>('standard');
  const [payment, setPayment] = useState<Payment>('card');
  const [retailerQuery, setRetailerQuery] = useState('');
  const [retailer, setRetailer] = useState(retailers[0]?.name ?? '');

  const standardFee = subtotal >= FREE_DELIVERY_FROM ? 0 : STANDARD_FEE;
  const fee = fulfilment === 'pickup' ? 0 : speed === 'express' ? EXPRESS_FEE : standardFee;
  const total = subtotal + fee;

  const filteredRetailers = useMemo(() => {
    const q = retailerQuery.trim().toLowerCase();
    if (!q) return retailers;
    return retailers.filter(
      (r) => r.name.toLowerCase().includes(q) || r.region.toLowerCase().includes(q)
    );
  }, [retailerQuery]);

  // Demo only: block Enter-key submits too, so nothing is ever sent.
  const handleSubmit = (e: FormEvent) => e.preventDefault();

  if (!hydrated) {
    return <div className={styles.loading} aria-busy="true" aria-label="Loading your bag" />;
  }

  if (items.length === 0) {
    return (
      <section className={styles.empty}>
        <p className={styles.emptyTitle}>Your bag is empty</p>
        <p className={styles.emptyText}>
          Not even a pinch of pipe-weed. Browse our strains to fill it up.
        </p>
        <Button href="/strains" variant="primary">
          Browse Strains
        </Button>
      </section>
    );
  }

  return (
    <form className={styles.layout} onSubmit={handleSubmit} noValidate>
      <div className={styles.main}>
        {/* 1. Delivery or pickup */}
        <fieldset className={styles.section}>
          <legend className={styles.sectionTitle}>
            <span className={styles.step}>1</span> How would you like it?
          </legend>
          <div className={styles.toggle}>
            <ToggleOption
              checked={fulfilment === 'delivery'}
              onChange={() => setFulfilment('delivery')}
              icon={<Bike size={22} aria-hidden="true" />}
              title="Delivery"
              detail="Pony post to your door"
            />
            <ToggleOption
              checked={fulfilment === 'pickup'}
              onChange={() => setFulfilment('pickup')}
              icon={<Store size={22} aria-hidden="true" />}
              title="Pickup"
              detail="Free from a retailer"
            />
          </div>
        </fieldset>

        {/* 2. Contact */}
        <fieldset className={styles.section}>
          <legend className={styles.sectionTitle}>
            <span className={styles.step}>2</span> Contact details
          </legend>
          <div className={styles.grid}>
            <Field label="First name" name="firstName" autoComplete="given-name" placeholder="Bilbo" />
            <Field label="Last name" name="lastName" autoComplete="family-name" placeholder="Baggins" />
            <Field label="Email" name="email" type="email" autoComplete="email" placeholder="bilbo@bagend.shire" wide />
            <Field label="Phone" name="phone" type="tel" autoComplete="tel" placeholder="Optional" wide />
          </div>
        </fieldset>

        {/* 3. Address or retailer */}
        {fulfilment === 'delivery' ? (
          <fieldset className={styles.section}>
            <legend className={styles.sectionTitle}>
              <span className={styles.step}>3</span> Delivery address
            </legend>

            <LocationSearch
              id="address-search"
              label="Search for your address"
              placeholder="Start typing your address…"
              icon={<Search size={18} aria-hidden="true" />}
              locateLabel="Use my location"
            />

            <p className={styles.divider}>
              <span>or enter it manually</span>
            </p>

            <div className={styles.grid}>
              <Field label="Address line 1" name="address1" autoComplete="address-line1" placeholder="Bag End, Bagshot Row" wide />
              <Field label="Address line 2" name="address2" autoComplete="address-line2" placeholder="Optional" wide />
              <Field label="Town" name="town" autoComplete="address-level2" placeholder="Hobbiton" />
              <div className={styles.field}>
                <label htmlFor="checkout-region">Region</label>
                <select id="checkout-region" name="region" defaultValue="Westfarthing" autoComplete="address-level1">
                  {REGIONS.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
              <Field label="Postcode" name="postcode" autoComplete="postal-code" placeholder="WF1 2BE" />
              <Field label="Delivery notes" name="notes" placeholder="By the round green door" />
            </div>

            <h3 className={styles.subTitle}>Delivery speed</h3>
            <div className={styles.options}>
              <OptionCard
                name="speed"
                checked={speed === 'standard'}
                onChange={() => setSpeed('standard')}
                icon={<Clock size={18} aria-hidden="true" />}
                title="Standard"
                detail="2 to 3 days by pony post"
                price={standardFee}
              />
              <OptionCard
                name="speed"
                checked={speed === 'express'}
                onChange={() => setSpeed('express')}
                icon={<Feather size={18} aria-hidden="true" />}
                title="Express"
                detail="Next day, by eagle"
                price={EXPRESS_FEE}
              />
            </div>
            {standardFee > 0 && (
              <p className={styles.hint}>
                Add <Price amount={FREE_DELIVERY_FROM - subtotal} /> more for free standard delivery.
              </p>
            )}
          </fieldset>
        ) : (
          <fieldset className={styles.section}>
            <legend className={styles.sectionTitle}>
              <span className={styles.step}>3</span> Pickup location
            </legend>

            <LocationSearch
              id="retailer-search"
              label="Search retailers by name or region"
              placeholder="Search by town or region…"
              icon={<MapPin size={18} aria-hidden="true" />}
              locateLabel="Near me"
              value={retailerQuery}
              onChange={setRetailerQuery}
            />

            {filteredRetailers.length ? (
              <div className={`${styles.options} ${styles.retailers}`}>
                {filteredRetailers.map((r) => (
                  <OptionCard
                    key={r.name}
                    name="retailer"
                    checked={retailer === r.name}
                    onChange={() => setRetailer(r.name)}
                    icon={<Store size={18} aria-hidden="true" />}
                    title={r.name}
                    detail={r.region}
                  />
                ))}
              </div>
            ) : (
              <p className={styles.hint}>No retailers match &ldquo;{retailerQuery}&rdquo;.</p>
            )}

            <div className={styles.grid}>
              <div className={`${styles.field} ${styles.wide}`}>
                <label htmlFor="checkout-pickup-time">Pickup time</label>
                <select id="checkout-pickup-time" name="pickupTime" defaultValue={PICKUP_TIMES[0]}>
                  {PICKUP_TIMES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </fieldset>
        )}

        {/* 4. Payment */}
        <fieldset className={styles.section}>
          <legend className={styles.sectionTitle}>
            <span className={styles.step}>4</span> Payment
          </legend>
          <div className={styles.options}>
            <OptionCard
              name="payment"
              checked={payment === 'card'}
              onChange={() => setPayment('card')}
              icon={<CreditCard size={18} aria-hidden="true" />}
              title="Card"
              detail="Visa, Mastercard, Amex"
            />
            <OptionCard
              name="payment"
              checked={payment === 'on-collection'}
              onChange={() => setPayment('on-collection')}
              icon={<Wallet size={18} aria-hidden="true" />}
              title={fulfilment === 'pickup' ? 'Pay at pickup' : 'Pay on delivery'}
              detail="Coin or card on the day"
            />
          </div>

          {payment === 'card' && (
            <div className={styles.grid}>
              <Field label="Card number" name="cardNumber" autoComplete="off" inputMode="numeric" placeholder="1234 5678 9012 3456" wide />
              <Field label="Expiry" name="expiry" autoComplete="off" inputMode="numeric" placeholder="MM / YY" />
              <Field label="CVC" name="cvc" autoComplete="off" inputMode="numeric" placeholder="123" />
            </div>
          )}
        </fieldset>

        <label className={styles.checkbox}>
          <input type="checkbox" name="ofAge" />
          <span>I confirm I am of age. For hobbits, that is thirty-three.</span>
        </label>
      </div>

      {/* Order summary */}
      <aside className={styles.summary} aria-labelledby="summary-title">
        <div className={styles.summaryHeader}>
          <h2 id="summary-title">Order Summary</h2>
          <span>
            {count} {count === 1 ? 'item' : 'items'}
          </span>
        </div>

        <ul className={styles.lines}>
          {items.map(({ key, slug, weight, quantity, strain, lineTotal }) => (
            <li key={key} className={styles.line}>
              <div className={styles.thumb}>
                <img src={strain.image} alt="" />
                <span className={styles.qty}>
                  <span className="visually-hidden">Quantity </span>
                  {quantity}
                </span>
              </div>
              <div className={styles.lineBody}>
                <Link href={`/strain/${slug}`} className={styles.lineName}>
                  {strain.name}
                </Link>
                <span className={styles.lineVariant}>{getWeightOption(weight).label}</span>
              </div>
              <Price amount={lineTotal} className={styles.linePrice} />
            </li>
          ))}
        </ul>

        <div className={styles.promo}>
          <label htmlFor="checkout-promo" className="visually-hidden">
            Discount code
          </label>
          <input id="checkout-promo" name="promo" placeholder="Discount code" autoComplete="off" />
          <button type="button">Apply</button>
        </div>

        <dl className={styles.totals}>
          <div>
            <dt>Subtotal</dt>
            <dd>
              <Price amount={subtotal} />
            </dd>
          </div>
          <div>
            <dt>{fulfilment === 'pickup' ? 'Pickup' : 'Delivery'}</dt>
            <dd>{fee === 0 ? 'Free' : <Price amount={fee} />}</dd>
          </div>
          <div className={styles.grandTotal}>
            <dt>Total</dt>
            <dd>
              <Price amount={total} />
            </dd>
          </div>
        </dl>

        {/* Disabled buttons ignore the pointer, so the wrapper shows the not-allowed cursor. */}
        <div className={styles.placeOrder} title="Online checkout is coming soon">
          <Button type="submit" variant="primary" size="lg" disabled className={styles.placeOrderButton}>
            <Lock size={14} aria-hidden="true" />
            Place Order
          </Button>
        </div>
        <p className={styles.note}>Online checkout is coming soon. No order will be placed.</p>

        <Button href="/strains" variant="link" className={styles.continue}>
          Continue Shopping
        </Button>
      </aside>
    </form>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: 'numeric' | 'text' | 'email' | 'tel';
  wide?: boolean;
}

function Field({ label, name, type = 'text', placeholder, autoComplete, inputMode, wide }: FieldProps) {
  const id = `checkout-${name}`;
  return (
    <div className={`${styles.field} ${wide ? styles.wide : ''}`}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
      />
    </div>
  );
}

interface LocationSearchProps {
  id: string;
  label: string;
  placeholder: string;
  icon: ReactNode;
  locateLabel: string;
  value?: string;
  onChange?: (value: string) => void;
}

/** A search pill with a dummy "use my location" action. */
function LocationSearch({ id, label, placeholder, icon, locateLabel, value, onChange }: LocationSearchProps) {
  return (
    <div className={styles.search}>
      <label htmlFor={id} className="visually-hidden">
        {label}
      </label>
      <span className={styles.searchIcon}>{icon}</span>
      <input
        id={id}
        type="search"
        placeholder={placeholder}
        autoComplete="off"
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
      />
      <button type="button" className={styles.locate}>
        <LocateFixed size={16} aria-hidden="true" />
        <span>{locateLabel}</span>
      </button>
    </div>
  );
}

interface ToggleOptionProps {
  checked: boolean;
  onChange: () => void;
  icon: ReactNode;
  title: string;
  detail: string;
}

function ToggleOption({ checked, onChange, icon, title, detail }: ToggleOptionProps) {
  return (
    <label className={`${styles.toggleOption} ${checked ? styles.active : ''}`}>
      <input type="radio" name="fulfilment" checked={checked} onChange={onChange} />
      {icon}
      <span className={styles.optionText}>
        <strong>{title}</strong>
        <small>{detail}</small>
      </span>
    </label>
  );
}

interface OptionCardProps {
  name: string;
  checked: boolean;
  onChange: () => void;
  icon: ReactNode;
  title: string;
  detail: string;
  price?: number;
}

function OptionCard({ name, checked, onChange, icon, title, detail, price }: OptionCardProps) {
  return (
    <label className={`${styles.option} ${checked ? styles.active : ''}`}>
      <input type="radio" name={name} checked={checked} onChange={onChange} />
      <span className={styles.optionIcon}>{icon}</span>
      <span className={styles.optionText}>
        <strong>{title}</strong>
        <small>{detail}</small>
      </span>
      {price !== undefined && (
        <span className={styles.optionPrice}>{price === 0 ? 'Free' : <Price amount={price} />}</span>
      )}
    </label>
  );
}
