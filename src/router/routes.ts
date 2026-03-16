import type { RouteObject } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import App from "@/App";

const routes: RouteObject[] = [{ path: "/", Component: App }];

export const appRouter = createBrowserRouter(routes);
