/* Function to clean out numbers */

export default function cleanNumbers(arr){
    let noNumbers = [];

    for(let b=0; b < arr.length; b++){
      if(isNaN(arr[b])){
        noNumbers.push(arr[b]);
      }
    }    

    return noNumbers;
}