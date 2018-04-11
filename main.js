const Typo = require("typo-js");
const dictionary = new Typo('en_US');
const Nightmare = require("nightmare");
const nightmare = Nightmare({show:false});
const checkTypo = require("./helpers/_index");
// console.log("checkTypo: " + checkTypo);
console.log("running...");
nightmare
  .goto("https://extension.berkeley.edu/international/programs/legal-studies/")
  .evaluate(() => document.querySelector("body").innerText.split(" "))
  .end()
  .then(function(result){
      // console.log(result);
      console.log(checkTypo(result));
  })