import { useMutation } from "@tanstack/react-query";
import updateMovieStatusAPI from "../supabase/supabseUpdateAPI";

export default function useUpdateMovieStatus() {
  const { mutate: updateMovieStatus } = useMutation({
    mutationFn: updateMovieStatusAPI,
  });

  return { updateMovieStatus };
}
