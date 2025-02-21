import supabase from "./supabaseClientAPI";

export default async function logoutAPI() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
  } catch (err) {
    throw new Error(err.message);
  }
}
