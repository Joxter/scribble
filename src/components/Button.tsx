import React from "react";
import { css } from "@linaria/core";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "submit" | "button";
};

const root = css`
  width: 100%;
  padding: 8px 12px;
  font-size: 14px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  font-weight: 500;
`;

export function Button({ children, onClick, className, type }: Props) {
  return (
    <button
      type={type || "button"}
      className={`${root} ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
