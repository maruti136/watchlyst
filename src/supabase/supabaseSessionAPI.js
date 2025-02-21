import supabase from "./supabaseClientAPI";

export default async function getAuthenticatedUserAPI() {
  try {
    const { data: activeSession, error: sessionError } =
      await supabase.auth.getSession();
    console.log(activeSession, sessionError);
    if (sessionError)
      throw new Error(`Supabase session error: ${sessionError.message}`);

    if (!activeSession.session) return null;

    const { data, error: userError } = await supabase.auth.getUser();
    if (userError) throw new Error(`Supabase user error: ${userError.message}`);
    return data?.user;
  } catch (err) {
    throw new Error(err);
  }
}
