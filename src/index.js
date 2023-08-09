import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const root = document.getElementById("root");
const domNode = createRoot(root);

domNode.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
