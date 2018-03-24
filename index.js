const Typo = require("typo-js");
const dictionary = new Typo('en_US');
const Nightmare = require("nightmare");
const nightmare = Nightmare({show:false});

let is_spelled_correctly = dictionary.check("hello");
let array_of_suggestions = dictionary.suggest("helo");
console.log(dictionary.check("immersive"));

nightmare
  .goto("https://extension.berkeley.edu/international/programs/legal-studies/")
  .evaluate(() => document.querySelector("body").innerText.split(" "))
  .end()
  .then(function(result){
    /* use this part to push typos into an array and return that array*/
    let typos = [];
    
    // clean word up (remove ,.:\n\t)
    result.map((word) => {
      let cleanWord = word.replace(/[,.:\n\t]/g," ");
      dictionary.check(cleanWord) ? cleanWord : typos.push(cleanWord);
    })

    // log out typos
    console.log(typos);
  

    for(let i=0; i < typos.length; i++){
      if(/\s/g.test(typos[i])){  // look for white spaces in string
        let tempSet = typos[i].split(" ");  // if they exist, split the string again

        /* re-check for typos after and push any into new array */

        
      }
    }
  })