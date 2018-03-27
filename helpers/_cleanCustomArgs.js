/* Function to clean custom arguments */

export default function cleanCustomArgs(arr){
  let arr = arr;
  
    return function customArgs(){
      let filteredArr = [];
      let argumentsArr = [];

      // copy arguments obj to array
      for(let k=0; k < arguments.length; k++){
        argumentsArr.push(arguments[k]);
      }

      // loop through noEmail array
      for(let j=0; j < arr.length; j++){ 
        /* If noEmail array element doesn't exist in argument array, push to filtered array */
        if(!argumentsArr.includes(arr[j])){
          filteredArr.push(arr[j]);
        }
      }

      return filteredArr;
    }
   
}