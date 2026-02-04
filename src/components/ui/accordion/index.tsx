'use client';

import { useState, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './styles.module.scss';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

interface AccordionProps {
  children: ReactNode;
  className?: string;
}

export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ''}`}>
      <button
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={styles.title}>{title}</span>
        <ChevronDown className={styles.icon} />
      </button>
      <div className={styles.content}>
        <div className={styles.contentInner}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Accordion({ children, className }: AccordionProps) {
  return (
    <div className={`${styles.accordion} ${className || ''}`}>
      {children}
    </div>
  );
}
