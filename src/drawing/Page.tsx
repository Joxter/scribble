import React, { useEffect, useState } from "react";
import { CanvasSmoth } from "./Canvas";
import { canvasSize } from "../utils";
import { ColorSelector } from "./ColorSelector";
import { LineWidthSelector } from "./LineWidthSelector";

export function DrawingPage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 500);
  }, []);

  if (!show) {
    return <p>no show</p>;
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          alignItems: "center",
          padding: "0 20px",
          marginBottom: "10px",
        }}
      >
        <LineWidthSelector />
        <ColorSelector />
      </div>

      {/* Canvas - square, responsive, max 500px */}
      <div
        style={{
          width: "min(calc(100vh - 120px), calc(100vw - 40px), 500px)",
          height: "min(calc(100vh - 120px), calc(100vw - 40px), 500px)",
          flex: "0 0 auto",
        }}
      >
        <CanvasSmoth />
      </div>

      {/* Bottom row - reserved for future controls */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "500px",
          height: "40px",
          marginTop: "20px",
        }}
      >
        {/* Future controls can go here */}
      </div>
    </div>
  );
}
