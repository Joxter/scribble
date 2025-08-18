import React, { useState, useEffect, useRef } from "react";

export function Fps() {
  const [fps, setFps] = useState(0);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const animationIdRef = useRef<number>(0);

  useEffect(() => {
    const updateFPS = () => {
      const currentTime = performance.now();
      frameCountRef.current++;

      if (currentTime - lastTimeRef.current >= 1000) {
        const calculatedFPS = Math.round(
          (frameCountRef.current * 1000) / (currentTime - lastTimeRef.current),
        );

        setFps(calculatedFPS);
        frameCountRef.current = 0;
        lastTimeRef.current = currentTime;
      }

      animationIdRef.current = requestAnimationFrame(updateFPS);
    };

    animationIdRef.current = requestAnimationFrame(updateFPS);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
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
      {fps} FPS
    </div>
  );
}
