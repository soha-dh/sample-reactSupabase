
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layouts/root-layout";
import Login from "./routes/login";
import Register from "./routes/register";
import Dashboard from "./routes/dashboard";
import { dashboardLoader } from "./routes/dashboard.action";
import { loginAction } from "./routes/login.action";
import { registerAction } from "./routes/register.action";
import { logoutAction } from "./routes/logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        loader: dashboardLoader,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);