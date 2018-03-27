/* Function to clean up white spaces */

export default function cleanSpaces(arr){
    let newWords = [];
    
    for(let i=0; i < arr.length; i++){
      if(/\s/g.test(arr[i])){  // look for white spaces in string
        let tempSet = arr[i].split(" ");  // if they exist, split the string again
        for(let j=0; j < tempSet.length; j++){
          newWords.push(tempSet[j]);
        }
      }
    }

    return newWords;
}
    