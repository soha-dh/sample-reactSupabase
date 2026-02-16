import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">Home</h1>

      <div className="flex gap-4">
        <Link className="text-blue-600 underline" to="/login">
          Login
        </Link>

        <Link className="text-blue-600 underline" to="/register">
          Register
        </Link>
      </div>
    </div>
  );
}