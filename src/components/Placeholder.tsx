import React from "react";
import { css } from "@linaria/core";

type Props = {
  children: React.ReactNode;
  note?: string;
  className?: string;
};

const root = css`
  position: relative;
  border: 1px dashed var(--line-strong);
  border-radius: 14px;
  background-color: #fbfcfd;
  color: var(--muted);
  padding: 12px 14px;
`;

const note = css`
  display: block;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #aab0b8;
  margin-top: 8px;
`;

// dashed frame marks blocks that are designed but not wired to the model yet
export function Placeholder({ children, note: noteText, className }: Props) {
  return (
    <div className={`${root} ${className || ""}`}>
      {children}
      <span className={note}>{noteText || "скоро"}</span>
    </div>
  );
}
