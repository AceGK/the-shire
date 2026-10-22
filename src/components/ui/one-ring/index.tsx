'use client';

import RingIcon from '@/assets/icons/ring-duotone.svg';
import { useReducedMotion } from '@/lib/reducedMotion';
import styles from './styles.module.scss';

// The float in styles.module.scss runs on this same cycle and curve, so the
// lighting shifts in step with the bob: CSS ease-in-out is cubic-bezier(0.42, 0, 0.58, 1).
const FLOAT = { dur: '6s', keyTimes: '0; 0.5; 1', keySplines: '0.42 0 0.58 1; 0.42 0 0.58 1' };

interface OneRingProps {
  className?: string;
}

/**
 * The One Ring in soft gold. It floats, its light shifts as it bobs, and a faint
 * golden glint passes over it every few seconds. With reduced motion it is a
 * still, gold ring. Decorative: hide it from screen readers where it is used.
 *
 * The gradient ids are fixed, so use one per page.
 */
export default function OneRing({ className = '' }: OneRingProps) {
  const motion = !useReducedMotion();

  return (
    <span className={`${styles.ring} ${className}`}>
      {/* Gold fills, kept close to the flat accent gold. The default
          objectBoundingBox units fit each gradient to the path it paints, so
          the ring can be any size. */}
      <svg className={styles.defs} width="0" height="0" focusable="false">
        <defs>
          {/* Same diagonal shading as a straight top-left to bottom-right
              gradient, but drawn from a large circle centred well past the
              ring's lower right, so each band bows slightly and its ends dip.
              Offsets count outward from that centre: the bottom-right corner
              sits at 0.6 and the top-left at 1, so the colours run in reverse.
              Move the centre further out (and raise r to match) for less bend. */}
          <radialGradient id="ring-gold" cx="2.5" cy="2.5" r="3.54" fx="2.5" fy="2.5">
            <stop offset="0.6" stopColor="#9e8140" />
            <stop offset="0.744" stopColor="#ad8f4a" />
            <stop offset="0.8" stopColor="#c2a462" />
            <stop offset="0.848" stopColor="#b2934c" />
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
          <linearGradient id="ring-gold-inner" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#9a7d3e" />
            <stop offset="1" stopColor="#bba05f" />
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
          </linearGradient>

          {/* Glint: a band of light on each face. The outer band runs at the
              same diagonal as the gold gradient above; the concave inner face
              mirrors that angle and travels the opposite way, a moment later
              and fainter. Each pass eases in and out (slow at the edges, quick
              through the middle), as a highlight does when it rolls around a
              curved surface, takes about 1.8s, then rests. */}
          <linearGradient id="ring-sheen" x1="0" y1="0" x2="1" y2="1">
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
          <linearGradient id="ring-sheen-inner" x1="1" y1="0" x2="0" y2="1">
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
        </defs>
      </svg>

      <RingIcon className={styles.ringGold} />
      {motion && <RingIcon className={styles.ringSheen} />}
    </span>
  );
}
