import { Form, useActionData } from "react-router-dom";
import type { ActionResponse } from "../types/action-response";

export default function Register() {
  const actionData = useActionData() as ActionResponse | undefined;

  return (
    <Form method="post" className="flex flex-col gap-3 max-w-sm">
      <input name="email" placeholder="Email" className="border p-2" />
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="border p-2"
      />
      <button className="bg-black text-white p-2">Register</button>

      {actionData?.error && (
        <p className="text-red-500">{actionData.error}</p>
      )}
    </Form>
  );
}