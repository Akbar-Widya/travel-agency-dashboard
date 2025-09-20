import { type RouteConfig, route, layout } from "@react-router/dev/routes"; // Adjust import based on your setup

export default [
  layout("routes/admin/admin-layout.tsx", [
    route("dashboard", "./routes/admin/dashboard.tsx"), // Correct: path, then file path
    route("all-users", "./routes/admin/all-users.tsx"), // Correct: path, then file path
  ]),
] satisfies RouteConfig;
