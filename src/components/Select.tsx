import React from "react";
import { css } from "@linaria/core";

type Props<T> = {
  label?: string;
  value: T;
  onChange: (value: T) => void;
  options: { value: T; label: string }[];
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

export function Select<T extends string | number>({
  label,
  value,
  onChange,
  options,
  disabled,
}: Props<T>) {
  return (
    <div className={root}>
      {label && <label>{label}</label>}
      <select
        value={String(value)}
        onChange={(e) => {
          const selectedOption = options.find(
            (opt) => String(opt.value) === e.target.value,
          );
          if (selectedOption) {
            onChange(selectedOption.value);
          }
        }}
        disabled={disabled}
      >
        {options.map((option) => (
          <option key={String(option.value)} value={String(option.value)}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
