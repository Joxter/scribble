import React from "react";

type Props = {
  color: string;
  height?: number;
};

export function PlayerFigure({ color, height = 32 }: Props) {
  const width = Math.round((height * 22) / 48);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 48"
      style={{ display: "block" }}
    >
      <circle cx={11} cy={8} r={7} fill={color} />
      <rect x={3} y={17} width={16} height={24} rx={7} fill={color} />
      <rect x={6} y={39} width={4} height={9} rx={2} fill={color} />
      <rect x={12} y={39} width={4} height={9} rx={2} fill={color} />
    </svg>
  );
}
