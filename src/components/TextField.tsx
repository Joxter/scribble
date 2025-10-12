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
  gap: 4px;

  label {
    font-size: 12px;
    font-weight: 500;
    color: #374151;
  }

  input {
    padding: 8px 12px;
    font-size: 14px;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    outline: none;
    transition: outline 0.2s;

    &:focus {
      outline: 2px solid #3b82f6;
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
