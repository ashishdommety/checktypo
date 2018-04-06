/* Function to remove empty strings */

module.exports = function cleanEmptyStrings(arr){
    let nonEmpty = [];
    for(let k=0; k < arr.length; k++){
      if(arr[k].length !== 0){
        nonEmpty.push(arr[k]);
      }
    }
    console.log("----------------------- nonEmpty: " + nonEmpty);
    return nonEmpty;
}