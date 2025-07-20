import React from "react";

export function LineWidthSelector({
  value,
  onChange,
}: {
  value: number;
  onChange: (width: number) => void;
}) {
  const widths = [3, 5, 8, 12, 18, 25];

  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      {widths.map((width) => (
        <button
          key={width}
          onClick={() => onChange(width)}
          style={{
            width: "32px",
            height: "32px",
            border: "none",
            padding: "0",
            backgroundColor: value === width ? "#007bff" : "#eee",
            cursor: "pointer",
            display: "flex",
          }}
        >
          <div
            style={{
              width: `${Math.max(width, 2)}px`,
              height: `${Math.max(width, 2)}px`,
              backgroundColor: "#333",
              borderRadius: "50%",
              margin: "auto",
            }}
          />
        </button>
      ))}
    </div>
  );
}
