"use client";

import * as React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

type ButtonVariant = 'primary' | 'secondary' | 'default' | 'outline' | 'outlineLight' | 'ghost' | 'destructive' | 'link' | 'label';
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  hideOnMobile?: boolean;
  title?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  onClick,
  type = "button",
  disabled = false,
  hideOnMobile = false,
  title,
  target,
  rel,
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    disabled ? styles.disabled : "",
    hideOnMobile ? styles.hideOnMobile : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  const content =
    variant === "label" ? (
      <span className={styles.labelInner}>{children}</span>
    ) : (
      children
    );

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel} title={title} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={classes}
    >
      {content}
    </button>
  );
}
