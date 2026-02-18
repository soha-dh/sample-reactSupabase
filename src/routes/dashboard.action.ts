import { redirect } from "react-router-dom";
import { supabase } from "../lib/supabase";

export async function dashboardLoader() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return { user };
}