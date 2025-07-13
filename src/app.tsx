import React from "react";
import "./main.css";
import { createRoot } from "react-dom/client";
import { Canvas } from "./Canvas";

const root = createRoot(document.getElementById("app")!);
root.render(<Canvas />);
