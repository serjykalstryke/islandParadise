import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// Application components all end up here via the App component and are then rendered in the root div in the public index.html file
const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
