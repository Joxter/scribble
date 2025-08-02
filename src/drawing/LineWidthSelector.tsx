import React, { useRef, useState, useEffect } from "react";
import { $currentLine, currentLineChanged } from "../game.model";
import { useUnit } from "effector-react";
import pencilSrc from "./Pencil.svg";

const widths = [3, 5, 8, 12, 18, 25];

export function LineWidthSelector() {
  const { size: value } = useUnit($currentLine);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const currentIndex = widths.indexOf(value);
  const isLast = currentIndex === widths.length - 1;

  const getClosestWidth = (clientX: number) => {
    if (!sliderRef.current) return value;

    const rect = sliderRef.current.getBoundingClientRect();

    const relativeX = clientX - rect.left;

    const percentage = Math.max(0, Math.min(1, relativeX / rect.width));

    const index = Math.round(percentage * (widths.length - 1));

    return widths[index];
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);

    const newWidth = getClosestWidth(e.clientX);
    currentLineChanged({ size: newWidth });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    const newWidth = getClosestWidth(e.clientX);
    currentLineChanged({ size: newWidth });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging]);

  const valWidth = Math.max(...widths);
  const valGap = 4;

  const silderWidth = valWidth * widths.length + valGap * (widths.length - 1);

  let pinLeft =
    8 - 2 + valWidth + currentIndex * valWidth + valGap * currentIndex;

  if (isLast) {
    pinLeft -= 2;
  }

  return (
    <div
      style={{
        display: "inline-flex",
        gap: "4px",
        position: "relative",
        width: 8 + 25 + 4 + silderWidth + "px",
        height: "32px",
        backgroundColor: "#eee",
        borderRadius: "16px",
        cursor: "pointer",
        padding: "4px",
        boxShadow: "0 0px 4px rgba(0,0,0,0.1)",
        overflow: "hidden",
      }}
    >
      <img
        src={pencilSrc}
        style={{ width: valWidth + "px", height: valWidth + "px" }}
      />

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
          cursor: isDragging ? "grabbing" : "grab",
          backgroundColor: "#007bff",
        }}
      ></div>
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        style={{
          display: "flex",
          gap: valGap + "px",
          position: "relative",
          width: "100%",
        }}
      >
        {widths.map((width, index) => {
          return (
            <div
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
