import React, { useState, useEffect, useRef } from "react";
import { useUnit } from "effector-react";
import { $lineExtendedCount, $svgCurrentLine } from "../model/game.model.ts";

const deltaMs = 500;

export function Perf() {
  const [line, lineExtendedCount] = useUnit([
    $svgCurrentLine,
    $lineExtendedCount,
  ]);
  const [perfData, setPerfData] = useState<
    { oldTime: number; newTime: number }[]
  >([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (line?.perf) {
      setPerfData((prev) => {
        const now = Date.now();
        const updated = [...prev, { ...line.perf, timestamp: now }];
        return updated.filter((item) => now - item.timestamp <= deltaMs);
      });
    }
  }, [line?.perf]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const now = Date.now();
      setPerfData((prev) =>
        prev.filter((item) => now - item.timestamp <= deltaMs),
      );
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

  const totalOldTime = perfData.reduce((sum, d) => sum + d.oldTime, 0);
  const totalNewTime = perfData.reduce((sum, d) => sum + d.newTime, 0);

  return (
    <div>
      <p
        style={{ fontSize: "10px", padding: "0", margin: "0", lineHeight: "1" }}
      >
        old: {maxOldTime}; new: {maxNewTime} ({perfData.length},{" "}
        {lineExtendedCount})<br />
        total: {totalOldTime + totalNewTime}ms
      </p>
    </div>
  );
}
