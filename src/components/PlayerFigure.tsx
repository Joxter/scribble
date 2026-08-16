import React from "react";
import { AvatarShape } from "../config.ts";

type Props = {
  color: string;
  shape?: AvatarShape;
  height?: number;
};

// все формы живут в одной сетке 22×48 и должны читаться на высоте 20px:
// различаем силуэтом, а не деталями
const shapes: Record<AvatarShape, React.ReactNode> = {
  classic: (
    <>
      <circle cx={11} cy={8} r={7} />
      <rect x={3} y={17} width={16} height={24} rx={7} />
      <rect x={6} y={39} width={4} height={9} rx={2} />
      <rect x={12} y={39} width={4} height={9} rx={2} />
    </>
  ),
  tall: (
    <>
      <circle cx={11} cy={7} r={6} />
      <rect x={5} y={15} width={12} height={22} rx={6} />
      <rect x={6} y={35} width={4} height={13} rx={2} />
      <rect x={12} y={35} width={4} height={13} rx={2} />
    </>
  ),
  round: (
    <>
      <circle cx={11} cy={7} r={6} />
      <rect x={1} y={15} width={20} height={26} rx={10} />
      <rect x={6} y={40} width={4} height={8} rx={2} />
      <rect x={12} y={40} width={4} height={8} rx={2} />
    </>
  ),
  block: (
    <>
      <rect x={4} y={1} width={14} height={14} rx={3} />
      <rect x={3} y={18} width={16} height={23} rx={3} />
      <rect x={5} y={41} width={5} height={7} />
      <rect x={12} y={41} width={5} height={7} />
    </>
  ),
  ears: (
    <>
      <circle cx={3} cy={7} r={3} />
      <circle cx={19} cy={7} r={3} />
      <circle cx={11} cy={8} r={7} />
      <rect x={4} y={17} width={14} height={24} rx={7} />
      <rect x={6} y={39} width={4} height={9} rx={2} />
      <rect x={12} y={39} width={4} height={9} rx={2} />
    </>
  ),
  tuft: (
    <>
      <path d="M11 -3 L16 4 L6 4 Z" />
      <circle cx={11} cy={9} r={7} />
      <rect x={3} y={18} width={16} height={23} rx={7} />
      <rect x={6} y={39} width={4} height={9} rx={2} />
      <rect x={12} y={39} width={4} height={9} rx={2} />
    </>
  ),
};

export function PlayerFigure({ color, shape = "classic", height = 32 }: Props) {
  const width = Math.round((height * 22) / 48);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 48"
      fill={color}
      style={{ display: "block", overflow: "visible" }}
    >
      {shapes[shape]}
    </svg>
  );
}
