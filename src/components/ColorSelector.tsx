const size = 28;
const gap = 8;

type Props = {
  value: string;
  onChange: (color: string) => void;
};

export function ColorSelector({ value, onChange }: Props) {
  const colors = [
    "#111111",
    "#34495e",
    "#faf9f5",
    "#ffffff",
    "#8b4513",
    "#fa3224",
    "#ffa729",
    "#ffd129",
    "#2ecc71",
    "#3498db",
    "#9b59b6",
    "#ff69b4",
  ];

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
            border: i === 2 || i === 3 ? `1px solid #333` : `none`,
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
