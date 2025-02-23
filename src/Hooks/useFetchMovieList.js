import { useQuery } from "@tanstack/react-query";

const fetchMovies = async function ({ queryKey }) {
  const [, searchQuery] = queryKey;
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=3304f6c9&s=${searchQuery}`
  );
  return response.json();
};

export default function useFetchMovieList(query) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["movies", query],
    queryFn: fetchMovies,
    enabled: !!query,
  });
  return { data, isLoading, isError };
}
