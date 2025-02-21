import supabase from "./supabaseClientAPI";
import fetchUserMovieData from "./supabaseFetchAPI";
import generateNewStatus from "../utils/generateNewStatus";

function generateColumnValue(column, value) {
  if (column === "watched")
    return value ? { watched: false } : { watched: true, bookmarked: false };

  if (column === "bookmarked")
    return value ? { bookmarked: false } : { watched: false, bookmarked: true };

  if (column === "favourite")
    return value ? { favourite: false } : { watched: true, favourite: true };
}

export default async function updateMovieStatusAPI({
  userId,
  movieId,
  title,
  poster,
  type,
  year,
  column,
}) {
  try {
    const [data] = await fetchUserMovieData(column, {
      columnOne: ["userID", userId],
      columnTwo: ["movie_id", movieId],
    });

    if (data) {
      const updatedValues = generateColumnValue(column, data[column]);

      const { data: updatedData, error: updateError } = await supabase
        .from("user_movies")
        .update(updatedValues)
        .eq("userID", userId)
        .eq("movie_id", movieId)
        .select("*");

      if (updateError)
        throw new Error(`Supabase update error: ${updateError.message}`);
      return updatedData;
    } else {
      const newStatusValues = generateNewStatus(column, false);
      const { data: newData, error: insertError } = await supabase
        .from("user_movies")
        .insert([
          {
            userID: userId,
            movie_id: movieId,
            title,
            poster,
            type,
            year,
            ...newStatusValues,
          },
        ])
        .select("*");

      if (insertError)
        throw new Error(`Supabase update error: ${insertError.message}`);

      return newData;
    }
  } catch (err) {
    throw new Error(err);
  }
}
