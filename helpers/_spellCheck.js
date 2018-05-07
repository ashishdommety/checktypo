const Typo = require("typo-js");
const dictionary = new Typo("en_US");

/* Function to conduct a spellcheck */
module.exports = function spellCheck(arr) {
    let finalTypos = []; // holds remaining typos
    arr.map(x => (dictionary.check(x) ? "" : finalTypos.push(x))); // checks if there is a typo
    return finalTypos.length ? finalTypos : "typo free!"; // if there are return them, otherwise return 'typo free!'
};
