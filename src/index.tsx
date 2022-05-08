import React from "react";
import { createRoot } from "react-dom/client";
import { AppProvider } from "./contexts/AppContext";
import "./index.css";
import Layout from "./layout/Layout";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <AppProvider>
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  </AppProvider>
);

reportWebVitals();
