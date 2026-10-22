import Image from 'next/image';
import strainBlurs from '@/lib/strainBlurs.json';

interface StrainImageProps {
  src: string;
  alt: string;
  /** Largest width the image renders at, so Next serves a right-sized file. */
  sizes: string;
  /** Load right away instead of lazily; use for above-the-fold images. */
  priority?: boolean;
  className?: string;
}

// Strain photos are 800×800. Passing the size reserves the space before the
// file arrives, and the blurred preview fills it in the meantime.
export default function StrainImage({ src, alt, sizes, priority, className }: StrainImageProps) {
  const blurDataURL = (strainBlurs as Record<string, string>)[src];

  return (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={800}
      sizes={sizes}
      priority={priority}
      placeholder={blurDataURL ? 'blur' : 'empty'}
      blurDataURL={blurDataURL}
      className={className}
    />
  );
}
