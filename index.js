const Typo = require("typo-js");
const dictionary = new Typo('en_US');
const Nightmare = require("nightmare");
const nightmare = Nightmare({show:false});

let is_spelled_correctly = dictionary.check("hello");
let array_of_suggestions = dictionary.suggest("helo");

nightmare
  .goto("https://extension.berkeley.edu/international/programs/legal-studies/")
  .evaluate(() => document.querySelector("body").innerText.split(" "))
  .end()
  .then((result) => {
    /* use this part to push typos into an array and return that array*/
    let typos = [];
    result.map((word) => dictionary.check(word) ? word : typos.push(word) );
    typos.length;
  })