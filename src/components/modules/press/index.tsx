import Image from 'next/image';
import styles from './styles.module.scss';
import logos from '@/lib/press.json';

interface PressItem {
  name: string;
  logo: string;
  url: string;
}

export default function AsSeenIn() {
  return (
    <div className={styles.asSeen}>
      <ul className={styles.logos}>
        {(logos as PressItem[]).map((item, id) => (
          <li key={id} title={item.name}>
            <a href={item.url} target="_blank" rel="noopener noreferrer  nofollow">
              <Image
                src={item.logo}
                alt={item.name}
                width={120}
                height={50}
                className={styles.logo}
                unoptimized
              />
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
