import type { ReactNode } from 'react';
import Image from 'next/image';
import Reveal from '@/components/ui/reveal';
import styles from './styles.module.scss';

interface SplitImageProps {
  image: string;
  alt?: string;
  pretitle?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  buttons?: ReactNode;
  reverse?: boolean;
  className?: string;
}

export default function SplitImage({
  image,
  alt = '',
  pretitle,
  title,
  subtitle,
  children,
  buttons,
  reverse = false,
  className,
}: SplitImageProps) {
  return (
    <div
      className={[
        styles.splitImage,
        reverse ? styles.reverse : '',
        className || '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <Reveal className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </Reveal>

      <div className={styles.content}>
        {pretitle && <Reveal delay={100}><span className={styles.pretitle}>{pretitle}</span></Reveal>}
        {title && <Reveal delay={200}><h2 className={styles.title}>{title}</h2></Reveal>}
        {subtitle && <Reveal delay={300}><p className={styles.subtitle}>{subtitle}</p></Reveal>}
        {children && <Reveal delay={400}><div className={styles.body}>{children}</div></Reveal>}
        {buttons && <Reveal delay={500}><div className={styles.buttons}>{buttons}</div></Reveal>}
      </div>
    </div>
  );
}
