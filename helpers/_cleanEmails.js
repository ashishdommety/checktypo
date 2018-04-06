/* Function to clean out emails */

module.exports = function cleanEmails(arr){
    let noEmails = [];

    for(let d=0; d < arr.length; d++){
      if(!arr[d].split("").includes("@")){
        noEmails.push(arr[d]);
      }
    }
    console.log("----------------------- noEmails: " + noEmails);
    return noEmails;
}