import supabase from "./supabaseClientAPI";

export default async function loginAPI({ email, password }) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw new Error(error.message);
    return data;
  } catch (err) {
    throw new Error(err);
  }
}
