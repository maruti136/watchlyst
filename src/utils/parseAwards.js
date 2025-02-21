export default function parseAwards(awardsString) {
  const awards = [];
  if (awardsString === "NA") return awards;
  const awardsParts = awardsString.split(" ");

  for (let i = 0; i < awardsParts.length; i++) {
    if (!isNaN(awardsParts[i])) {
      const number = awardsParts[i];
      const nextWord = awardsParts[i + 1]?.toLowerCase();

      if (nextWord?.includes("oscar")) {
        awards.push(`${number} OSCARS`);
      } else if (nextWord?.includes("win")) {
        awards.push(`${number} WINS`);
      } else if (nextWord?.includes("nomination")) {
        awards.push(`${number} NOMINATIONS`);
      }
    }
  }

  return awards;
}
