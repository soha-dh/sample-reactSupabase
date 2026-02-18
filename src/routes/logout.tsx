import { redirect } from "react-router-dom";
import { supabase } from "../lib/supabase";

export async function logoutAction() {
  await supabase.auth.signOut();
  return redirect("/login");
}