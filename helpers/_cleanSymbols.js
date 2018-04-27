/* Function to clean up symbols */
module.exports = cleanSymbols = arr =>
  arr.map(word => word.replace(/[^a-zA-Z0-9 @]/g, " "));
