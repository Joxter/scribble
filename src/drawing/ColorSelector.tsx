import React from "react";

export function ColorSelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (color: string) => void;
}) {
  const colors = [
    "#000000", // Black
    "#FF0000", // Red
    "#00FF00", // Green
    "#0000FF", // Blue
    "#FFFF00", // Yellow
    "#FF00FF", // Magenta
    "#00FFFF", // Cyan
    "#FFA500", // Orange
    "#800080", // Purple
    "#A52A2A", // Brown
  ];

  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => onChange(color)}
          style={{
            width: "32px",
            height: "32px",
            border: value === color ? "3px solid #007bff" : "1px solid #ccc",
            padding: "0",
            backgroundColor: color,
            cursor: "pointer",
            borderRadius: "50%",
          }}
        />
      ))}
    </div>
  );
}