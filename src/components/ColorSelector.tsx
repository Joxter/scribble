import { colors } from "../config.ts";

const size = 28;
const gap = 8;

type Props = {
  value: string;
  onChange: (color: string) => void;
};

export function ColorSelector({ value, onChange }: Props) {
  return (
    <div
      style={{
        flexWrap: "wrap",
        display: "flex",
        gap: gap + "px",
        justifyContent: "space-between",
      }}
    >
      {colors.map((color, i) => (
        <button
          key={color}
          onClick={() => onChange(color)}
          style={{
            width: size + "px",
            height: size + "px",
            border: color === "#ffffff" ? `1px solid #333` : `none`,
            borderRadius: "100%",
            padding: "0",
            backgroundColor: color,
            cursor: "pointer",
            boxShadow:
              color === value
                ? "0 0 0 2px #fff, 0 0 0 5px rgb(0, 123, 255)"
                : "none",
          }}
        />
      ))}
    </div>
  );
}
