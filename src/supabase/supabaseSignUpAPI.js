import supabase from "./supabaseClientAPI";

export default async function signUpAPI({ email, password, fullName }) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          fullName,
          avatar:
            "https://ftzecdrudoxvsowbazej.supabase.co/storage/v1/object/public/user-avatar//d2.webp",
        },
      },
    });

    if (error) throw new Error(`Supabase signup error: ${error.message}`);
    return { data };
  } catch (err) {
    throw new Error(err);
  }
}
