import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { appRouter } from "./router/routes";

const rootDocument: HTMLElement = document.getElementById(
  "root",
) as HTMLElement;

createRoot(rootDocument).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
);
