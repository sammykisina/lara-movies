import React from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "./hooks/useAuth";
import "./index.css";
import Layout from "./layout/Layout";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <RecoilRoot>
    <AuthProvider>
      <React.StrictMode>
        <Layout />
      </React.StrictMode>
    </AuthProvider>
  </RecoilRoot>
);

reportWebVitals();
