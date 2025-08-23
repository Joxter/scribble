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
    { oldTime: number; newTime: number; timestamp: number }[]
  >([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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

  const maxOldTime =
    perfData.length > 0 ? Math.max(...perfData.map((d) => d.oldTime)) : 0;
  const maxNewTime =
    perfData.length > 0 ? Math.max(...perfData.map((d) => d.newTime)) : 0;

  const totalOldTime = perfData.reduce((sum, d) => sum + d.oldTime, 0);
  const totalNewTime = perfData.reduce((sum, d) => sum + d.newTime, 0);

  return (
    <div>
      <p
        style={{ fontSize: "10px", padding: "0", margin: "0", lineHeight: "1" }}
      >
        old: {maxOldTime.toFixed(2)}; new: {maxNewTime.toFixed(2)} (
        {perfData.length}, {lineExtendedCount})<br />
        total: {(totalOldTime + totalNewTime).toFixed(2)}ms
      </p>
    </div>
  );
}
