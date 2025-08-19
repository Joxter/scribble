import { scan } from "react-scan";
import React from "react";
import "./main.css";
import { createRoot } from "react-dom/client";
import { Router } from "./Router";

scan({ enabled: true });

const root = createRoot(document.getElementById("app")!);
root.render(<Router />);
