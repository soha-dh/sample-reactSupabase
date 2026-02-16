import { Form, useActionData, useNavigation, Link } from "react-router-dom";

type ActionData = {
  error?: string;
};

export default function Register() {
  const data = useActionData() as ActionData | undefined;
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Register</h1>

      <Form method="post" className="flex flex-col gap-3">
         <input
          name="name"
          type="text"
          placeholder="Name"
          required
          className="border p-2 rounded"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="border p-2 rounded"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className="border p-2 rounded"
        />

        {data?.error && (
          <p className="text-red-500 text-sm">{data.error}</p>
        )}

        <button
          disabled={isSubmitting}
          className="bg-black text-white p-2 rounded disabled:opacity-50 mb-7"
        >
          {isSubmitting ? "Loading..." : "Register"}
        </button>
      </Form>

      <span>Has Account already? <Link className="text-blue-600 underline" to="/login">
          Login
        </Link></span>
    </div>
  );
}