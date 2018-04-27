/* Function to clean up white spaces */

module.exports = function cleanSpaces(arr) {
  let splitWords = []; // holds two words
  let noSpaces = []; // holds all elements with no spaces
  arr.map(
    x =>
      /\s/g.test(x)
        ? x.split(" ").map(y => splitWords.push(y))
        : noSpaces.push(x)
  ); // looks for spaces. If they exist, split the word and push each of them into noSpaces. If they dont, push them into noSpaces.
  splitWords.map(x => (x.length ? noSpaces.push(x) : "")); // check if any empty strings got pushed in
  return noSpaces; // return noSpaces
};
