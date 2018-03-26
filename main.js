const Typo = require("typo-js");
const dictionary = new Typo('en_US');
const Nightmare = require("nightmare");
const nightmare = Nightmare({show:false});

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

    // NOTE - filter out emails function
    let noEmails = [];

    for(let d=0; d < noNumbers.length; d++){
      if(!noNumbers[d].split("").includes("@")){
        noEmails.push(noNumbers[d]);
      }
    }

    console.log("Without Emails: \n");
    console.log(noEmails);
    console.log("-------------------------------------------------------");

    //NOTE: Remove custom arguments
    let withoutPermitted = function(){
      let filteredArr = [];
      let argumentsArr = [];

      // copy arguments obj to array
      for(let k=0; k < arguments.length; k++){
        argumentsArr.push(arguments[k]);
      }

      // loop through noEmail array
      for(let j=0; j < noEmails.length; j++){ 
        /* If noEmail array element doesn't exist in argument array, push to filtered array */
        if(!argumentsArr.includes(noEmails[j])){
          filteredArr.push(noEmails[j]);
        }
      }

      return filteredArr;
    }

    console.log("Without Elements: \n");
    console.log(withoutPermitted('iBT','BGA','TOEIC','IELTS'));
    console.log("-------------------------------------------------------");


    /* 
     ~~~ Ideas: ~~~
      Split each filter level into functions (7 levels of filtration)
      Unit test them
      Add a .json/.config file that consists of the url to check & some permitted typos
      Take the remaining array of typos and locate them on the page
      Make node spin out a local html that mimicks the url source but changes the color of the typos to red, while also listing all the typos on the top of the html
    */
  })