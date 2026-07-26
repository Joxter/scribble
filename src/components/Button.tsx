import React from "react";
import { css } from "@linaria/core";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "submit" | "button";
  variant?: "primary" | "secondary" | "text" | "danger";
  size?: 1 | 2 | 3;
  disabled?: boolean;
};

const root = css`
  font-family: inherit;
  font-size: 16px;
  font-weight: 800;
  border-radius: 14px;
  padding: 13px 22px;
  cursor: pointer;
  line-height: 1.2;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const primary = css`
  color: #fff;
  background-color: var(--brand);
  border: none;
  border-bottom: 3px solid var(--brand-dark);

  &:active:not(:disabled) {
    border-bottom-width: 1px;
    transform: translateY(2px);
  }
`;

const secondary = css`
  color: var(--ink);
  background-color: #fff;
  border: 1px solid var(--line-strong);
  border-bottom: 3px solid var(--keycap-edge);

  &:active:not(:disabled) {
    border-bottom-width: 1px;
    transform: translateY(2px);
  }
`;

const text = css`
  color: var(--brand-dark);
  background-color: transparent;
  border: none;

  &:hover:not(:disabled) {
    background-color: var(--brand-bg);
  }
`;

const danger = css`
  color: var(--danger-text);
  background-color: #fff;
  border: 1px solid var(--danger-border);

  &:hover:not(:disabled) {
    background-color: #fff5f4;
  }
`;

/* sizes come after variants so their border tweaks win the cascade */
const size1 = css`
  font-size: 13px;
  border-radius: 9px;
  padding: 8px 14px;
  border-bottom-width: 2px;
`;

const size3 = css`
  font-size: 18px;
  font-weight: 900;
  border-radius: 16px;
  padding: 16px 26px;
  border-bottom-width: 4px;
`;

const variants = { primary, secondary, text, danger };
const sizes = { 1: size1, 2: "", 3: size3 };

export function Button({
  children,
  onClick,
  className,
  type,
  variant = "primary",
  size = 2,
  disabled,
}: Props) {
  return (
    <button
      type={type || "button"}
      className={`${root} ${variants[variant]} ${sizes[size]} ${className || ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
