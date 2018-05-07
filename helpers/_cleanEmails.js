/* Function to clean out emails */

module.exports = function cleanEmails(arr) {
    let noEmails = []; // stores non-email strings
    arr.map(x => (x.split("").includes("@") ? "" : noEmails.push(x))); // splits string and check if the result array has an "@" character. If it doesn't, then it isn't an email. Push it to noEmails.
    return noEmails;
};
