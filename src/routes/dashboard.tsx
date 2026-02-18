import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  const { user } = useLoaderData() as {
    user: { email?: string };
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome: {user.email}</p>
    </div>
  );
}