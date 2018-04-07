const Typo = require("typo-js");
const dictionary = new Typo('en_US');

/* Function to clean up symbols ,.:\n\t)(?*$- and then check spelling */
module.exports = cleanSymbols = (arr) => arr.map((word) => word.replace(/[^a-zA-Z0-9 @]/g," "))