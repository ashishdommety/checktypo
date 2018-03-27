/* Function to clean out emails */

export default function cleanEmails(){
    let noEmails = [];

    for(let d=0; d < noNumbers.length; d++){
      if(!noNumbers[d].split("").includes("@")){
        noEmails.push(noNumbers[d]);
      }
    }
    return noEmails;
}