"use client";

import React from "react";
import styles from "./button.module.css";

interface MiButtonProps {
  children: React.ReactNode;
  variant?: "solid" | "outline";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<MiButtonProps> = ({
  children,
  variant = "solid",
  size = "md",
  onClick,
  className = "",
}) => {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    className,
  ].join(" ");

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
