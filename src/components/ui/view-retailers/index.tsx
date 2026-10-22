'use client';

import { useCallback, useEffect, useRef, useState, type MouseEvent } from 'react';
import MapPinIcon from '@/assets/icons/map-pin.svg';
import CloseIcon from '@/assets/icons/x.svg';
import Button from '@/components/ui/button';
import Map from '@/components/modules/map';
import styles from './styles.module.scss';

interface ViewRetailersProps {
  className?: string;
}

export default function ViewRetailers({ className = '' }: ViewRetailersProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  // The map mounts only after the dialog is showing, so Leaflet can measure its container.
  const [showMap, setShowMap] = useState(false);

  const close = useCallback(() => dialogRef.current?.close(), []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !open) return;

    if (!dialog.open) dialog.showModal();
    setShowMap(true);

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = 'hidden';

    // Fires for the close button, a backdrop click, and the Escape key.
    const handleClose = () => {
      setOpen(false);
      setShowMap(false);
    };
    dialog.addEventListener('close', handleClose);

    return () => {
      dialog.removeEventListener('close', handleClose);
      root.style.overflow = previousOverflow;
    };
  }, [open]);

  // A click that lands on the dialog element itself is a click on the backdrop.
  const handleDialogClick = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) close();
  };

  return (
    <>
      <Button variant="outline" size="lg" onClick={() => setOpen(true)} className={`${styles.trigger} ${className}`}>
        <span className={styles.triggerInner}>
          <MapPinIcon width={16} height={16} aria-hidden="true" />
          View Retailers
        </span>
      </Button>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby="retailers-dialog-title"
        onClick={handleDialogClick}
      >
        <div className={styles.panel}>
          <header className={styles.header}>
            <div>
              <h2 id="retailers-dialog-title">Where to Buy</h2>
              <p>Find our Southfarthing leaf at these fine establishments across Middle-earth.</p>
            </div>
            <button type="button" className={styles.close} onClick={close} aria-label="Close retailers map">
              <CloseIcon width={22} height={22} />
            </button>
          </header>

          <div className={styles.body}>{showMap && <Map variant="light" />}</div>
        </div>
      </dialog>
    </>
  );
}
