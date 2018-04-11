/* 
Order of function calls
    - clean symbols
        - clean white spaces (cleans empty strings also)
                - filter out numbers
                    - filter out emails
                        - final spellcheck 
                            - remove custom arguments
*/

const cleanSymbols = require("./_cleanSymbols"),
      cleanSpaces = require("./_cleanSpaces"),
      spellCheck = require("./_spellCheck"),
      cleanNumbers = require("./_cleanNumbers"),
      cleanEmails = require("./_cleanEmails"),
      cleanCustomArgs = require("./_cleanCustomArgs");

module.exports = function (contentArray){
        let noSymbols = cleanSymbols(contentArray);
        let noSpaces = cleanSpaces(noSymbols);
        let noNums = cleanNumbers(noSpaces);
        let noMails = cleanEmails(noNums);
        let noTypos = spellCheck(noMails);
        
        // add conditional to clean custom args if prescribed, or just go ahead and filter.
        
        return noTypos;
}