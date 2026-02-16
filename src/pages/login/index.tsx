import { Form, useActionData, useNavigation } from "react-router-dom";

type ActionData = {
  error?: string;
};

export default function Login() {
  const data = useActionData() as ActionData | undefined;
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <Form method="post" className="flex flex-col gap-3">
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
          className="bg-black text-white p-2 rounded disabled:opacity-50"
        >
          {isSubmitting ? "Loading..." : "Login"}
        </button>
      </Form>
    </div>
  );
}