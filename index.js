const Typo = require("typo-js");
const dictionary = new Typo('en_US');
const Nightmare = require("nightmare");
const nightmare = Nightmare({show:false});

let is_spelled_correctly = dictionary.check("hello");
let array_of_suggestions = dictionary.suggest("helo");
console.log(dictionary.check("Facebook"));

nightmare
  .goto("https://extension.berkeley.edu/international/programs/legal-studies/")
  .evaluate(() => document.querySelector("body").innerText.split(" "))
  .end()
  .then(function(result){
    
    /* use this part to push typos into an array and return that array*/
    let typos = [];
    
    // NOTE - clean up symbols function
    // clean word up (remove ,.:\n\t)(
    result.map((word) => {
      let cleanWord = word.replace(/[,.:\n\t)(?*$-]/g," ");
      dictionary.check(cleanWord) ? cleanWord : typos.push(cleanWord);
    })
    console.log("Without ,.:\\n\\t:" + "\n");
    console.log(typos); // log out words without ,.:\n\t)?
    console.log("-------------------------------------------------------");

    // NOTE - clean up white spaces function
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

    // NOTE - clean up empty strings function
    //clean up empty strings
    let nonEmpty = [];
    for(let k=0; k < newWords.length; k++){
      if(newWords[k].length !== 0){
        nonEmpty.push(newWords[k]);
      }
    }

    console.log("Without empty strings: \n");
    console.log(nonEmpty);
    console.log("-------------------------------------------------------");

    // NOTE - Final Spellcheck
    let finalTypos = [];
    for(let a=0; a < nonEmpty.length; a++){
      if(!dictionary.check(nonEmpty[a])){
        finalTypos.push(nonEmpty[a]);
      }
    }
    console.log("Final SpellCheck: \n");
    console.log(finalTypos);
    console.log("-------------------------------------------------------");

    // NOTE - filter out numbers function
    let noNumbers = [];

    for(let b=0; b < finalTypos.length; b++){
      if(isNaN(finalTypos[b])){
        noNumbers.push(finalTypos[b]);
      }
    }
    
    console.log("Without Numbers: \n");
    console.log(noNumbers);
    console.log("-------------------------------------------------------");

    let noEmails = [];

    for(let d=0; d < noNumbers.length; d++){
      if(!noNumbers[d].split("").includes("@")){
        noEmails.push(noNumbers[d]);
      }
    }

    console.log("Without Emails: \n");
    console.log(noEmails);
    console.log("-------------------------------------------------------");
    /* 
      Next Steps?
      add education abbreviations (iBT, TOEIC, or TOEFL)
      ignore emails with '@'
      ignore numbers - done
      ignore social media tags
      split words with '-' and check again
    */
  })