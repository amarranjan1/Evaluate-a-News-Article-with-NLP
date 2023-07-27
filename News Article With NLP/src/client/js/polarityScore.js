// Function to convert scoreTag to human-readable sentiment
function polarityScore(scoreTag) {
    if (scoreTag === "P+") {
      return "very positive";
    } else if (scoreTag === "P") {
      return "positive";
    } else if (scoreTag === "NEU") {
      return "neutral";
    } else if (scoreTag === "N") {
      return "negative";
    } else if (scoreTag === "N+") {
      return "very negative";
    } else if (scoreTag === "NONE") {
      return "no sentiment";
    } else {
      // If the scoreTag does not match any known sentiment,
      // return "N/A" (Not Applicable) as a fallback.
      return "N/A";
    }
  }
  
  // Export the polarityScore function to be used in other modules
  export { polarityScore };
  