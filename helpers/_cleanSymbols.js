const Typo = require("typo-js");
const dictionary = new Typo('en_US');

/* Function to clean up symbols ,.:\n\t)(?*$- and then check spelling */

module.exports = function cleanSymbols(arr){
    let typos = [];
    arr.map((word) => {
        let cleanWord = word.replace(/[^a-zA-Z0-9 ]/g," ");
        // \t\n, ./<>?;:"'`!@#$%^&*()\[\]{}_+=|\\-
        dictionary.check(cleanWord) ? cleanWord : typos.push(cleanWord);
    })
    // console.log("----------------------- no symbols: " + typos);
    return typos;
}