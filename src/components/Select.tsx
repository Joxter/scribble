import React from "react";
import { css } from "@linaria/core";

type Props = {
  label?: string;
  value: number;
  onChange: (value: number) => void;
  options: { value: number; label: string }[];
  disabled?: boolean;
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

  select {
    padding: 8px 12px;
    font-size: 14px;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    outline: none;
    transition: outline 0.2s;
    background-color: white;
    cursor: pointer;

    &:focus {
      outline: 2px solid #3b82f6;
    }

    &:disabled {
      background-color: #f3f4f6;
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
`;

export function Select({ label, value, onChange, options, disabled }: Props) {
  return (
    <div className={root}>
      {label && <label>{label}</label>}
      <select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        disabled={disabled}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
