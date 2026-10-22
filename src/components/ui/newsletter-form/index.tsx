'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Button from '@/components/ui/button';
import styles from './styles.module.scss';

interface NewsletterFormProps {
  /** "dark" for green sections such as the footer, "light" for cream pages. */
  variant?: 'dark' | 'light';
  label?: string;
  /** Shown before the subscriber's email in the confirmation message. */
  successLead?: string;
  className?: string;
}

// Front-end only for now: there is no mailing-list backend, so a valid
// submission just swaps the field for a confirmation message.
export default function NewsletterForm({
  variant = 'dark',
  label = 'Join the Fellowship',
  successLead = 'Welcome to the Fellowship! Word from the Shire will find you at',
  className,
}: NewsletterFormProps) {
  // Unique per instance: the footer and the subscribe page can both be on screen
  const inputId = useId();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const messageRef = useRef<HTMLParagraphElement>(null);

  // The submit button disappears on success, so move focus to the message
  // rather than letting it fall back to the page body.
  useEffect(() => {
    if (submitted) messageRef.current?.focus();
  }, [submitted]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={[styles.form, styles[variant], className].filter(Boolean).join(' ')}
    >
      {/* The confirmation replaces the field, so its label goes with it */}
      {!submitted && <label htmlFor={inputId}>{label}</label>}
      {submitted ? (
        <p ref={messageRef} className={styles.success} role="status" tabIndex={-1}>
          {successLead} <strong>{email}</strong>.
        </p>
      ) : (
        <div className={styles.row}>
          <input
            id={inputId}
            type="email"
            placeholder="your@email.com"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" variant="primary" size="sm" className={styles.submit}>
            Sign Up
          </Button>
        </div>
      )}
    </form>
  );
}
