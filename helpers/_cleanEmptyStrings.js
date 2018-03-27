/* Function to remove empty strings */

export default function cleanEmptyStrings(){
    let nonEmpty = [];
    for(let k=0; k < newWords.length; k++){
      if(newWords[k].length !== 0){
        nonEmpty.push(newWords[k]);
      }
    }

    return nonEmpty;
}