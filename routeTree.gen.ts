import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./routes/__root";
import { IndexPage, getIndexHead } from "./routes/index";

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: IndexPage,
  head: getIndexHead,
});

export const routeTree = rootRoute.addChildren([indexRoute]);
