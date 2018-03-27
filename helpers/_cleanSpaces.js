/* Function to clean up white spaces */

export default function cleanSpaces(){
    let newWords = [];
    
    for(let i=0; i < typos.length; i++){
      if(/\s/g.test(typos[i])){  // look for white spaces in string
        let tempSet = typos[i].split(" ");  // if they exist, split the string again
        for(let j=0; j < tempSet.length; j++){
          newWords.push(tempSet[j]);
        }
      }
    }

    return newWords;
}
    