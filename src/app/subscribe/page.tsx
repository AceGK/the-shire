import type { Metadata } from 'next';
import HeaderBlock from '@/components/modules/header-block';
import NewsletterForm from '@/components/ui/newsletter-form';
import Reveal from '@/components/ui/reveal';
import styles from './styles.module.scss';

export const metadata: Metadata = {
  title: 'Join the Fellowship | The Shire',
  description: 'Sign up for news from the Shire and receive 10% off your first order.',
};

const perks = [
  '10% off your first order',
  'First word of new harvests and limited strains',
  'Tales, recipes and pipe-weed lore from the Southfarthing',
];

export default function SubscribePage() {
  return (
    <main className="page-content content-grid">
      <HeaderBlock
        isPageHeader
        pretitle="10% Off Your First Order"
        title="Join the Fellowship"
        description="Add your name to our ledger and we'll send word from the Shire, along with 10% off your first order."
      />

      <Reveal delay={200}>
        <section className={styles.card} aria-label="Newsletter sign-up">
          <ul className={styles.perks}>
            {perks.map((perk) => (
              <li key={perk}>{perk}</li>
            ))}
          </ul>

          <NewsletterForm
            variant="light"
            label="Your email address"
            successLead="Welcome to the Fellowship! Your 10% off code will find you at"
          />

          <p className={styles.finePrint}>Unsubscribe at any time.</p>
        </section>
      </Reveal>
    </main>
  );
}
