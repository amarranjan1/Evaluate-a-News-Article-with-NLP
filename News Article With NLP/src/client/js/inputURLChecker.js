// Function to check if a given inputURL is a valid URL
function isValidURL(inputURL) {
    // Regular expression pattern to match URLs
    const urlRegex = inputURL.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&/=]*)/g);
    
    // If the inputURL matches the pattern, it is a valid URL
    // Return true, otherwise return false
    return urlRegex === null ? false : true;
  }
  
  // Export the isValidURL function to be used in other modules
  export { isValidURL };
  