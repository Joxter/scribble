import React from "react";
import { css } from "@linaria/core";

type Props = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  maxLen?: number;
};

const root = css`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 13px;
    font-weight: 700;
    color: var(--slate);
  }

  input {
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    color: var(--ink);
    background-color: var(--sunken);
    border: 1px solid var(--line-strong);
    border-radius: 12px;
    padding: 11px 14px;
    outline: none;
    width: 100%;

    &::placeholder {
      color: var(--muted);
      font-weight: 600;
    }

    &:focus {
      background-color: #fff;
      border-color: var(--brand);
      box-shadow: 0 0 0 4px rgba(52, 152, 219, 0.18);
    }
  }
`;

export function TextField({
  label,
  value,
  onChange,
  maxLen,
  type = "text",
  placeholder,
}: Props) {
  return (
    <div className={root}>
      {label && <label>{label}</label>}
      <input
        maxLength={maxLen}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
