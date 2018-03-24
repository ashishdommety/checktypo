const Typo = require("typo-js");
const dictionary = new Typo('en_US');
const Nightmare = require("nightmare");
const nightmare = Nightmare({show:false});

let is_spelled_correctly = dictionary.check("hello");
let array_of_suggestions = dictionary.suggest("helo");

nightmare
  .goto("https://extension.berkeley.edu/international/programs/legal-studies/")
  .evaluate(function(){
    let content = document.querySelector("body").innerText;
    return content.split(" ");
  })
  .end()
  .then(function(result){
    console.log(result);
  })
// console.log(is_spelled_correctly);
// console.log(array_of_suggestions);