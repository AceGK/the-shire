"use client";

import * as React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

/**
 * A polymorphic Button:
 * - Renders <button> by default
 * - Renders <Link> when href is provided
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {"primary" | "secondary" | "outline" | "destructive" | "ghost" | "link"} [props.variant="primary"]
 * @param {"sm" | "md" | "lg" | "icon"} [props.size="md"]
 * @param {string} [props.className]
 * @param {string} [props.href] - If present, renders a Link
 * @param {() => void} [props.onClick]
 * @param {"button" | "submit" | "reset"} [props.type="button"]
 * @param {boolean} [props.disabled=false]
 * @param {string} [props.title]
 * @param {string} [props.target]
 * @param {string} [props.rel]
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  onClick,
  type = "button",
  disabled = false,
  title,
  target,
  rel,
}) {
  const classes = `
    ${styles.button}
    ${styles[variant]}
    ${styles[size]}
    ${disabled ? styles.disabled : ""}
    ${className || ""}
  `;

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel} title={title}>
        {children}
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
      {children}
    </button>
  );
}
