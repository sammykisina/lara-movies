import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { AppProvider } from "./contexts/AppContext";
import { AuthProvider } from "./hooks/useAuth";
import "./index.css";
import Layout from "./layout/Layout";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <AppProvider>
    <RecoilRoot>
      <AuthProvider>
        <React.StrictMode>
          <Layout />
        </React.StrictMode>
      </AuthProvider>
    </RecoilRoot>
  </AppProvider>
);

reportWebVitals();
