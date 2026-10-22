'use client';

import { useId } from 'react';
import { useReducedMotion } from '@/lib/reducedMotion';
import styles from './styles.module.scss';

// The faint golden glint that passes over the ring. Set to true to turn it back on.
// While false, the ring still floats and its gold still shifts with the float.
const GLINT_ENABLED = false;

// The float in styles.module.scss runs on this same cycle and curve, so the
// lighting shifts in step with the bob: CSS ease-in-out is cubic-bezier(0.42, 0, 0.58, 1).
const FLOAT = { dur: '6s', keyTimes: '0; 0.5; 1', keySplines: '0.42 0 0.58 1; 0.42 0 0.58 1' };

// Outline of the Font Awesome "ring" duotone icon (src/assets/icons/ring-duotone.svg),
// inlined so the gradients, the gold and the glint all live in one SVG. Safari
// on iOS does not reliably repaint an animated gradient defined in a different
// SVG, and stacked copies of the icon could drift apart there.
const RING_OUTER =
  'M111.9 157.4C147.1 139.8 198 128 256 128s108.9 11.8 144.1 29.4C437.2 176 448 195.7 448 208s-10.8 32-47.9 50.6C364.9 276.2 314 288 256 288s-108.9-11.8-144.1-29.4C74.8 240 64 220.3 64 208s10.8-32 47.9-50.6zM83.3 100.2C39.4 122.2 0 158.4 0 208v96c0 49.6 39.4 85.8 83.3 107.8C129.1 434.7 190.3 448 256 448s126.9-13.3 172.7-36.2c43.9-22 83.3-58.2 83.3-107.8V208c0-49.6-39.4-85.8-83.3-107.8C382.9 77.3 321.7 64 256 64s-126.9 13.3-172.7 36.2z';
const RING_INNER =
  'M411.1 255.2C434.3 242 448 225.6 448 208c0-44.2-86-80-192-80s-192 35.8-192 80c0 17.6 13.7 34 36.9 47.2C141.2 235.9 195.8 224 256 224s114.8 11.9 155.1 31.2z';

interface OneRingProps {
  className?: string;
}

/**
 * The One Ring in soft gold. It floats, its light shifts as it bobs, and a faint
 * golden glint passes over it every few seconds. With reduced motion it is a
 * still, gold ring. Decorative, and hidden from screen readers.
 */
export default function OneRing({ className = '' }: OneRingProps) {
  const motion = !useReducedMotion();
  // Unique gradient ids per ring, so several rings can share a page
  const uid = useId().replace(/:/g, '');
  const ids = {
    gold: `${uid}-gold`,
    goldInner: `${uid}-gold-inner`,
    sheen: `${uid}-sheen`,
    sheenInner: `${uid}-sheen-inner`,
  };

  return (
    <span className={`${styles.ring} ${className}`}>
      {/* The default objectBoundingBox units fit each gradient to the path it
          paints, so the ring can be any size. */}
      <svg
        className={styles.svg}
        viewBox="0 0 512 512"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          {/* Same diagonal shading as a straight top-left to bottom-right
              gradient, but drawn from a circle centred past the ring's lower
              right, so each band bows and its ends dip (about 15% of the ring's
              size). Offsets count outward from that centre: the bottom-right
              corner sits at 0.41 and the top-left at 1, so the colours run in
              reverse. Move the centre further out (and raise r to match) for
              less bend, or closer for more. */}
          <radialGradient id={ids.gold} cx="1.7" cy="1.7" r="2.4" fx="1.7" fy="1.7">
            <stop offset="0.412" stopColor="#9e8140" />
            <stop offset="0.624" stopColor="#ad8f4a" />
            <stop offset="0.706" stopColor="#c2a462" />
            <stop offset="0.776" stopColor="#b2934c" />
            <stop offset="1" stopColor="#a2853f" />
            {/* As the ring rises and tilts, its bright patch slides down the
                band, then back as it settles */}
            {motion && (
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                values="-0.08 -0.08; 0.08 0.08; -0.08 -0.08"
                calcMode="spline"
                repeatCount="indefinite"
                {...FLOAT}
              />
            )}
          </radialGradient>
          {/* Inner face: the outer band's diagonal mirrored, as a concave
              surface catches the light from the other side, with its own soft
              highlight through the middle. Bent the same amount as the outer
              band, from a centre past the lower left. */}
          <radialGradient id={ids.goldInner} cx="-0.7" cy="1.7" r="2.4" fx="-0.7" fy="1.7">
            <stop offset="0.412" stopColor="#886c31" />
            <stop offset="0.612" stopColor="#94793b" />
            <stop offset="0.694" stopColor="#a5894b" />
            <stop offset="0.765" stopColor="#957a3c" />
            <stop offset="1" stopColor="#85692f" />
            {/* The concave inner face catches the light the opposite way */}
            {motion && (
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                values="0.08 0.08; -0.08 -0.08; 0.08 0.08"
                calcMode="spline"
                repeatCount="indefinite"
                {...FLOAT}
              />
            )}
          </radialGradient>

          {GLINT_ENABLED && (
            <>
              {/* Glint: a band of light on each face. The outer band runs at the
                  same diagonal as the gold gradient above; the concave inner face
                  mirrors that angle and travels the opposite way, a moment later
                  and fainter. Each pass eases in and out (slow at the edges, quick
                  through the middle), as a highlight does when it rolls around a
                  curved surface, takes about 1.8s, then rests. */}
              <linearGradient id={ids.sheen} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#ffe9a8" stopOpacity="0" />
                <stop offset="0.42" stopColor="#ffe9a8" stopOpacity="0" />
                <stop offset="0.5" stopColor="#ffe9a8" stopOpacity="0.14" />
                <stop offset="0.58" stopColor="#ffe9a8" stopOpacity="0" />
                <stop offset="1" stopColor="#ffe9a8" stopOpacity="0" />
                <animateTransform
                  attributeName="gradientTransform"
                  type="translate"
                  values="-1 0; 1 0; 1 0"
                  keyTimes="0; 0.3; 1"
                  calcMode="spline"
                  keySplines="0.45 0 0.55 1; 0 0 1 1"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </linearGradient>
              <linearGradient id={ids.sheenInner} x1="1" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#ffe9a8" stopOpacity="0" />
                <stop offset="0.4" stopColor="#ffe9a8" stopOpacity="0" />
                <stop offset="0.5" stopColor="#ffe9a8" stopOpacity="0.08" />
                <stop offset="0.6" stopColor="#ffe9a8" stopOpacity="0" />
                <stop offset="1" stopColor="#ffe9a8" stopOpacity="0" />
                <animateTransform
                  attributeName="gradientTransform"
                  type="translate"
                  values="1 0; -1 0; -1 0"
                  keyTimes="0; 0.3; 1"
                  calcMode="spline"
                  keySplines="0.45 0 0.55 1; 0 0 1 1"
                  dur="6s"
                  begin="0.2s"
                  repeatCount="indefinite"
                />
              </linearGradient>
            </>
          )}
        </defs>

        {/* Gold: outer band, then the inner face, kept slightly see-through so
            it sits back behind the band */}
        <path d={RING_OUTER} fill={`url(#${ids.gold})`} />
        <path d={RING_INNER} fill={`url(#${ids.goldInner})`} opacity={0.75} />

        {/* Glint, drawn on the same outlines so it can never drift off the ring */}
        {motion && GLINT_ENABLED && (
          <g className={styles.glint}>
            <path d={RING_OUTER} fill={`url(#${ids.sheen})`} />
            <path d={RING_INNER} fill={`url(#${ids.sheenInner})`} />
          </g>
        )}
      </svg>
    </span>
  );
}
