import supabase from "./supabaseClientAPI";

export default async function fetchUserMoviesAPI(
  selectedColumns,
  columnValues
) {
  try {
    console.log("gwhjghfewh");
    const { data, error } = await supabase
      .from("user_movies")
      .select(selectedColumns)
      .eq([columnValues.columnOne[0]], columnValues.columnOne[1])
      .eq([columnValues.columnTwo[0]], columnValues.columnTwo[1]);

    if (error) throw new Error(`Supabase Fetch Error: ${error.message}`);
    console.log(data, error);
    return data;
  } catch (err) {
    throw new Error(err);
  }
}
