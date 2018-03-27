const Typo = require("typo-js");
const dictionary = new Typo('en_US');

/* Function to clean up symbols ,.:\n\t)(?*$- and then check spelling */

export default function cleanSymbols(arr){
    let typos = [];
    arr.map((word) => {
        let cleanWord = word.replace(/[,.:\n\t)(?*$-]/g," ");
        dictionary.check(cleanWord) ? cleanWord : typos.push(cleanWord);
    })
    return typos;
}