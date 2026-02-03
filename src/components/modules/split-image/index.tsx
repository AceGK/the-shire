import type { ReactNode } from 'react';
import Image from 'next/image';
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
      <div className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className={styles.content}>
        {pretitle && <span className={styles.pretitle}>{pretitle}</span>}
        <span className={styles.accentLine} />
        {title && <h2 className={styles.title}>{title}</h2>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {children && <div className={styles.body}>{children}</div>}
        {buttons && <div className={styles.buttons}>{buttons}</div>}
      </div>
    </div>
  );
}
