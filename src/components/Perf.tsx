import React, { useState, useEffect, useRef } from "react";
import { useUnit } from "effector-react";
import { $lineExtendedCount, $svgCurrentLine } from "../model/game.model.ts";

const deltaMs = 1000;

export function Perf() {
  const [line, lineExtendedCount] = useUnit([
    $svgCurrentLine,
    $lineExtendedCount,
  ]);
  const [perfData, setPerfData] = useState<
    { newTime: number; timestamp: number }[]
  >([]);

  useEffect(() => {
    if (line?.perf) {
      setPerfData((prev) => {
        const now = Date.now();
        const before1000ms = now - deltaMs;

        const filtered = prev.filter((t) => t.timestamp > before1000ms);
        filtered.push({ ...line.perf, timestamp: now });

        return filtered;
      });
    }
  }, [line?.perf]);

  const maxNewTime =
    perfData.length > 0 ? Math.max(...perfData.map((d) => d.newTime)) : 0;

  const totalNewTime = perfData.reduce((sum, d) => sum + d.newTime, 0);

  return (
    <div>
      <p
        style={{
          fontSize: "10px",
          padding: "0",
          margin: "0",
          lineHeight: "1",
        }}
      >
        max tldraw calc: <b>{maxNewTime.toFixed(2)}ms</b> ({lineExtendedCount}){" "}
        <br />
        total in 1sec: <b>{totalNewTime.toFixed(2)}</b>ms
      </p>
    </div>
  );
}
