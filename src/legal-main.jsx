import React from "react";
import ReactDOM from "react-dom/client";
import { LegalPage } from "./legal.jsx";
import "./portfolio.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <LegalPage page={root.dataset.page} />
  </React.StrictMode>
);
