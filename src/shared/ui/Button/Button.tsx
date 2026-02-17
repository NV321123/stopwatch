import React from "react";
import type { ButtonVariant, ButtonProps } from './Button.types';
import styles from "./Button.module.css";

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = ButtonVariant.PRIMARY,
  onClick,
  type = "button",
  ariaLabel,
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
