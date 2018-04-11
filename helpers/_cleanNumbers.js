/* Function to clean out numbers */

module.exports = function cleanNumbers(arr){
    let noNumbers = []; // holds non-number strings
    arr.map((x) => isNaN(x) ? noNumbers.push(x) : ''); // checks if number exists and pushes it into noNumbers if it doesn't
    return noNumbers; // returns array with no number elements
}