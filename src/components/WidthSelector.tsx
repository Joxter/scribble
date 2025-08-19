import { widths } from "../config.ts";

const valGap = 4;

type Props = {
  value: number;
  onChange: (width: number) => void;
};

export function WidthSelector({ value, onChange }: Props) {
  const currentIndex = widths.indexOf(value);
  const valWidth = Math.max(...widths);

  let pinLeft = currentIndex * valWidth + valGap * currentIndex;

  return (
    <div
      style={{
        display: "inline-flex",
        gap: "4px",
        position: "relative",
        height: "32px",
        backgroundColor: "#eee",
        borderRadius: "16px",
        cursor: "pointer",
        padding: "4px",
        boxShadow: "0 0px 4px rgba(0,0,0,0.1)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: pinLeft + "px",
          display: "flex",
          top: "0px",
          width:
            currentIndex === widths.length - 1
              ? valWidth + 10 + "px"
              : valWidth + 4 + "px",
          height: "100%",
          backgroundColor: "#007bff",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          gap: valGap + "px",
          position: "relative",
          width: "100%",
        }}
      >
        {widths.map((width) => {
          return (
            <div
              onClick={() => onChange(width)}
              key={width}
              style={{
                display: "flex",
                width: valWidth + "px",
                height: valWidth + "px",
              }}
            >
              <div
                style={{
                  margin: "auto",
                  width: `${width}px`,
                  height: `${width}px`,
                  backgroundColor: width === value ? "#555" : "#666",
                  borderRadius: "50%",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
