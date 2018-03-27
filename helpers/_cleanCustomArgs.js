
export default function cleanCustomArgs(){
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