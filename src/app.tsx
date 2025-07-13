import React from "react";
import "./main.css";
import { createRoot } from "react-dom/client";
import { Router } from "./Router";

const root = createRoot(document.getElementById("app")!);
root.render(<Router />);
