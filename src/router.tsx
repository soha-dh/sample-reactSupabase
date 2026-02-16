import {
  createBrowserRouter,
  redirect,
  type ActionFunctionArgs,
} from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

// 🔹 fake login (فعلاً تستی)
async function loginAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  // تست ساده
  if (!email || !password) {
    return { error: "Email and password required" };
  }

  // موفق → برو home
  return redirect("/");
}

// 🔹 fake register
async function registerAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return { error: "Email and password required" };
  }

  return redirect("/login");
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
    action: loginAction,
  },
  {
    path: "/register",
    element: <Register />,
    action: registerAction,
  },
]);