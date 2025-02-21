import { useQuery } from "@tanstack/react-query";
import fetchUserMoviesAPI from "../supabase/supabaseFetchAPI";

export default function useFetchUserMovie(userId, movieID) {
  const {
    data: movieAndStatus,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movieDetail", movieID],
    queryFn: async ({ queryKey }) => {
      const [, searchMovieID] = queryKey;

      // Fetch data from OMDB API
      const movieResponse = await fetch(
        `http://www.omdbapi.com/?apikey=3304f6c9&i=${searchMovieID}`
      );
      const movieData = await movieResponse.json();

      // Fetch options from Supabase
      const [status] = await fetchUserMoviesAPI(
        ["watched", "bookmarked", "favourite"].join(","),
        {
          columnOne: ["userID", userId],
          columnTwo: ["movie_id", searchMovieID],
        }
      );
      return { movieData, status };
    },
    enabled: !!movieID,
  });

  return { movieAndStatus, isLoading, error };
}
