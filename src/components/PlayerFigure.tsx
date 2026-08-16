import React from "react";
import { AvatarShape } from "../config.ts";

type Props = {
  color: string;
  shape?: AvatarShape;
  height?: number;
};

// ноги рисуются раньше тела: тело перекрывает их верх
function legs(y: number, h: number, x1: number, x2: number, w: number) {
  return (
    <>
      <rect x={x1} y={y} width={w} height={h} rx={2} />
      <rect x={x2} y={y} width={w} height={h} rx={2} />
    </>
  );
}

// шесть силуэтов из дизайн-системы, общая сетка 22×48
const shapes: Record<AvatarShape, React.ReactNode> = {
  neutral: (
    <>
      <circle cx={11} cy={8} r={7} />
      {legs(28, 20, 6, 12, 4)}
      <rect x={3} y={17} width={16} height={22} rx={7} />
    </>
  ),
  small: (
    <>
      <circle cx={11} cy={13} r={6} />
      {legs(30, 18, 7, 11.5, 3.6)}
      <rect x={4} y={21} width={14} height={19} rx={6} />
    </>
  ),
  tall: (
    <>
      <circle cx={11} cy={6} r={6} />
      {legs(23, 25, 6.4, 11.8, 3.8)}
      <rect x={5} y={13} width={12} height={21} rx={6} />
    </>
  ),
  big: (
    <>
      <circle cx={11} cy={8} r={7.5} />
      {legs(29, 19, 4, 13, 5)}
      <rect x={1} y={17} width={20} height={23} rx={9} />
    </>
  ),
  skirt: (
    <>
      <circle cx={11} cy={8} r={7} />
      {legs(28, 20, 7, 11.5, 3.6)}
      <path d="M6 17h10l3.6 16.4a2 2 0 0 1-2 2.6H4.4a2 2 0 0 1-2-2.6z" />
    </>
  ),
  buff: (
    <>
      <circle cx={11} cy={7} r={6.2} />
      {legs(28, 20, 6, 12, 4.2)}
      <path d="M1.6 16.6C1.2 15.2 2.2 14 3.6 14h14.8c1.4 0 2.4 1.2 2 2.6l-3.6 14c-.3 1.2-1.4 2-2.6 2H7.8c-1.2 0-2.3-.8-2.6-2z" />
    </>
  ),
};

export function PlayerFigure({ color, shape = "neutral", height = 32 }: Props) {
  const width = Math.round((height * 22) / 48);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 48"
      fill={color}
      style={{ display: "block" }}
    >
      {shapes[shape]}
    </svg>
  );
}
