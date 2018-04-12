const Typo = require("typo-js");
const dictionary = new Typo('en_US');
const Nightmare = require("nightmare");
const nightmare = Nightmare({show:false});
const Spinner = require("cli-spinner").Spinner;
const spinner = new Spinner("searching for typos...%s");
spinner.setSpinnerString('|/-\\');
const clear = require("clear");
const checkTypo = require("./helpers/_index");

module.exports = function checktypo(url){
  spinner.start();
  nightmare
  .goto(url)
  .evaluate(() => document.querySelector("body").innerText.split(" "))
  .end()
  .then(function(result){
      // console.log(result);
      spinner.stop();
      console.log("\n");
      clear();
      console.log(checkTypo(result));
  })
}

