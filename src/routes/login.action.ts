import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { supabase } from "../lib/supabase";
import type { AuthFormData } from "../types/auth";
import type { ActionResponse } from "../types/action-response";

export async function loginAction({
  request,
}: ActionFunctionArgs): Promise<ActionResponse | Response> {
  const formData = await request.formData();

  const data: AuthFormData = {
    email: String(formData.get("email")),
    password: String(formData.get("password")),
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return { error: error.message };
  }

  return redirect("/dashboard");
}