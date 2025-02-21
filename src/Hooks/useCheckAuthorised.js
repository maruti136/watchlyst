import { useQuery } from "@tanstack/react-query";
import getAuthenticatedUserAPI from "../supabase/supabaseSessionAPI";

export default function useCheckAuthorised() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: getAuthenticatedUserAPI,
  });

  if (error) throw new Error(error);
  return { data, isLoading, error };
}
