/* Function to remove empty strings */

export default function cleanEmptyStrings(arr){
    let nonEmpty = [];
    for(let k=0; k < arr.length; k++){
      if(arr[k].length !== 0){
        nonEmpty.push(arr[k]);
      }
    }

    return nonEmpty;
}