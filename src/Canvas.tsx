import React, { useRef, useEffect, useState } from "react";
import { DEMO_ID } from "./config";

const scale = window.devicePixelRatio;

const canvasSize = 800;

type History = [event: string, x: number, y: number];

type Props = {
  db: any;
  onHistoryChange: (event: any) => void;
  history?: History;
  lineWidth?: number;
  color?: string;
};

export function Canvas({ onHistoryChange, db, lineWidth = 3, color = "#000" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const history = db.useQuery({
    party: { $: { where: { id: DEMO_ID } } },
  }).data.party[0].canvas;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = Math.floor(canvasSize * scale);
    canvas.height = Math.floor(canvasSize * scale);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.scale(scale, scale);
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";

    ctx.clearRect(0, 0, canvasSize, canvasSize);
    ctx.beginPath();

    history.forEach((ev) => {
      const [event, x, y] = ev;
      if (event === "start") {
        ctx.moveTo(x, y);
      } else if (event === "move") {
        ctx.lineTo(x, y);
      } else if (event === "end") {
        // nothing
      } else {
        console.log("Unknown event", ev);
      }
    });
    ctx.stroke();
  }, [history]);

  const getCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const k = canvasSize / canvas.getBoundingClientRect().width;

    const rect = canvas.getBoundingClientRect();

    if ("touches" in e) {
      const touch = e.touches[0] || e.changedTouches[0];
      return {
        x: (touch.clientX - rect.left) * k,
        y: (touch.clientY - rect.top) * k,
      };
    } else {
      return {
        x: (e.clientX - rect.left) * k,
        y: (e.clientY - rect.top) * k,
      };
    }
  };

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const coords = getCoordinates(e);
    if (!coords) return;

    const { x, y } = coords;

    ctx.beginPath();
    ctx.moveTo(x, y);

    db.transact(
      db.tx.party[DEMO_ID].update({
        canvas: [...history, ["start", x, y], ["move", x, y]],
      }),
    );

    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    e.preventDefault();

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const coords = getCoordinates(e);
    if (!coords) return;

    const { x, y } = coords;

    ctx.lineTo(x, y);
    ctx.stroke();
    db.transact(
      db.tx.party[DEMO_ID].update({
        canvas: [...history, ["move", x, y]],
      }),
    );
  };

  const stopDrawing = (e?: React.TouchEvent) => {
    if (e) e.preventDefault();
    db.transact(
      db.tx.party[DEMO_ID].update({
        canvas: [...history, ["end"]],
      }),
    );

    setIsDrawing(false);
  };

  return (
    <canvas
      ref={canvasRef}
      style={{
        border: "1px solid #ccc",
        cursor: "crosshair",
        width: "100%",
        aspectRatio: "1",
        touchAction: "none",
      }}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
      onTouchStart={startDrawing}
      onTouchMove={draw}
      onTouchEnd={stopDrawing}
      onTouchCancel={stopDrawing}
    />
  );
}
