const Typo = require("typo-js");
const dictionary = new Typo("en_US");
const Spinner = require("cli-spinner").Spinner;
const spinner = new Spinner("searching for typos...%s");
spinner.setSpinnerString("|/-\\");
const clear = require("clear");
const checkTypo = require("./helpers/_index");
const cheerio = require("cheerio");
const request = require("request");

module.exports = function findTypos(url) {
  spinner.start();
  request(url, function(err, response, html) {
    spinner.stop();
    clear();
    if (err) {
      throw err;
    } else {
      const $ = cheerio.load(html);
      let webContent = $("body")
        .text()
        .split(" ");
      const typos = checkTypo(webContent);
      console.log(`typos found: ${typos}`);
      return typos;
    }
  });
};
