import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "@/page/landing/Landing";
import "./index.css";

const rootDocument: HTMLElement = document.getElementById(
  "root",
) as HTMLElement;

createRoot(rootDocument).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
