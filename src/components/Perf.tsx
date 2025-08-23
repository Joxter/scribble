import React, { useState, useEffect, useRef } from "react";
import { useUnit } from "effector-react";
import { $svgCurrentLine } from "../model/game.model.ts";

export function Perf() {
  const line = useUnit($svgCurrentLine);
  const [perfData, setPerfData] = useState<
    { oldTime: number; newTime: number }[]
  >([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (line?.perf) {
      setPerfData((prev) => {
        const now = Date.now();
        const updated = [...prev, { ...line.perf, timestamp: now }];
        return updated.filter((item) => now - item.timestamp <= 500);
      });
    }
  }, [line?.perf]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const now = Date.now();
      setPerfData((prev) => prev.filter((item) => now - item.timestamp <= 500));
    }, 100);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const maxOldTime =
    perfData.length > 0 ? Math.max(...perfData.map((d) => d.oldTime)) : 0;
  const maxNewTime =
    perfData.length > 0 ? Math.max(...perfData.map((d) => d.newTime)) : 0;

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "150px",
        backgroundColor: "#fff",
        color: "#333",
        border: "1px solid #333",
        padding: "2px 4px",
        borderRadius: "4px",
        fontSize: "14px",
        fontFamily: "monospace",
        zIndex: 1000,
        userSelect: "none",
      }}
    >
      old: {maxOldTime}; new: {maxNewTime}
    </div>
  );
}
