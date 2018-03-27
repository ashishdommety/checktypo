/* Function to clean out numbers */

export default function cleanNumbers(){
    let noNumbers = [];

    for(let b=0; b < finalTypos.length; b++){
      if(isNaN(finalTypos[b])){
        noNumbers.push(finalTypos[b]);
      }
    }    

    return noNumbers;
}