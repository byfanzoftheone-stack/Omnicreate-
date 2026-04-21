import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SYSTEM } from "./system";

console.log("SYSTEM LOADED:", SYSTEM);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App system={SYSTEM} />
  </React.StrictMode>
);
