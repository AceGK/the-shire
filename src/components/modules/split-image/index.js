import Image from 'next/image';
import styles from './styles.module.scss';

/**
 * SplitImage - A two-column layout with image and content
 *
 * @param {Object} props
 * @param {string} props.image - Image source URL
 * @param {string} [props.alt] - Image alt text
 * @param {string} [props.pretitle] - Small text above title
 * @param {string} props.title - Main heading
 * @param {string} [props.subtitle] - Text below title
 * @param {React.ReactNode} [props.children] - Content/body text
 * @param {React.ReactNode} [props.buttons] - Button row content
 * @param {boolean} [props.reverse=false] - Flip image to right side
 * @param {string} [props.className] - Additional class name
 */
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
}) {
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
            sizes="(max-width: 768px) 100vw, 480px"
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
