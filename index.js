const Typo = require("typo-js");
const dictionary = new Typo('en_US');
const Nightmare = require("nightmare");
const nightmare = Nightmare({show:false});

let is_spelled_correctly = dictionary.check("hello");
let array_of_suggestions = dictionary.suggest("helo");
console.log(dictionary.check("RIGHTS"));

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
    console.log("Without ,.:\\n\\t:" + "\n");
    console.log(typos); // log out words without ,.:\n\t
    console.log("-------------------------------------------------------");
    // seperate words with white spaces
    let newWords = [];
    
    for(let i=0; i < typos.length; i++){
      if(/\s/g.test(typos[i])){  // look for white spaces in string
        let tempSet = typos[i].split(" ");  // if they exist, split the string again
        for(let j=0; j < tempSet.length; j++){
          newWords.push(tempSet[j]);
        }
        /* re-check for typos after and push any into new array */
      }
    }

    console.log("Without white spaces: \n");
    console.log(newWords); // log out broken 
    console.log("-------------------------------------------------------");
    //clean up empty strings
    // let finalTypos = newWords.map((word) => word.length !== 0 ? word : '');
    let finalTypos = [];
    for(let k=0; k < newWords.length; k++){
      if(newWords[k].length !== 0){
        finalTypos.push(newWords[k]);
      }
    }

    console.log("Without empty strings: \n");
    console.log(finalTypos);
    console.log("-------------------------------------------------------");

    
    console.log("Final SpellCheck: \n");
    console.log()
  })