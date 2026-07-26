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
  gap: 6px;

  label {
    font-size: 13px;
    font-weight: 700;
    color: var(--slate);
  }

  select {
    font-family: inherit;
    font-size: 15px;
    font-weight: 700;
    color: var(--ink);
    background-color: var(--sunken);
    border: 1px solid var(--line-strong);
    border-radius: 12px;
    padding: 11px 34px 11px 14px;
    outline: none;
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%237a828c' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 14px center;

    &:focus {
      background-color: #fff;
      border-color: var(--brand);
      box-shadow: 0 0 0 4px rgba(52, 152, 219, 0.18);
    }

    &:disabled {
      cursor: not-allowed;
      color: var(--muted);
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
