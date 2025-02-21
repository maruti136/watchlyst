export default function generateNewStatus(column, value) {
  if (column === "watched")
    return value ? { watched: false } : { watched: true, bookmarked: false };

  if (column === "bookmarked")
    return value ? { bookmarked: false } : { watched: false, bookmarked: true };

  if (column === "favourite")
    return value ? { favourite: false } : { watched: true, favourite: true };
}
