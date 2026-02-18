import {Form, Outlet, Link } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="p-6">
      <nav className="flex gap-4 mb-6">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Form method="post" action="/logout">
  <button className="bg-red-500 text-white p-2 mt-4">
    Logout
  </button>
</Form>
      </nav>

      <Outlet />
    </div>
  );
}