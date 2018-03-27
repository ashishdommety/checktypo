/* Function to clean out emails */

export default function cleanEmails(arr){
    let noEmails = [];

    for(let d=0; d < arr.length; d++){
      if(!arr[d].split("").includes("@")){
        noEmails.push(arr[d]);
      }
    }
    return noEmails;
}