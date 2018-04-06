const Typo = require("typo-js");
const dictionary = new Typo('en_US');

/* Function to conduct a final spellcheck */
module.exports = function finalSpellCheck(arr){
    let finalTypos = [];
    for(let a=0; a < arr.length; a++){
        if(!dictionary.check(arr[a])){
            finalTypos.push(arr[a]);
        }
    }
    console.log("----------------------- finalTypos: " + finalTypos);
    return finalTypos;
}

