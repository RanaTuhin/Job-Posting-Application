import { Navigate, useRoutes, type RouteObject } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../features/auth/pages/LoginPage";
import CreateJobPage from "../features/jobs/pages/CreateJobPage";
import JobsPage from "../features/jobs/pages/JobsPage";
import DashboardPage from "../pages/DashboardPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "jobs", element: <JobsPage /> },
      { path: "jobs/create", element: <CreateJobPage /> },
    ],
  },
];

const AppRouter = () => useRoutes(routes);

export default AppRouter;
