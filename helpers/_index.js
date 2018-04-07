/* 
Order of function calls
- first spell check
    - clean symbols
        - clean white spaces
            - clean empty strings
                - filter out numbers
                    - filter out emails
                        - final spellcheck 
                            - remove custom arguments
*/

const cleanSymbols = require("./_cleanSymbols"),
      cleanSpaces = require("./_cleanSpaces"),
      cleanEmptyStrings = require("./_cleanEmptyStrings"),
      spellCheck = require("./_spellCheck"),
      cleanNumbers = require("./_cleanNumbers"),
      cleanEmails = require("./_cleanEmails"),
      cleanCustomArgs = require("./_cleanCustomArgs");

module.exports = function (contentArray){
        // change arrangment to reflect correct arrangement
        let noSymbols = cleanSymbols(contentArray);
        let noSpaces = cleanSpaces(noSymbols);
        let noEmpty = cleanEmptyStrings(noSpaces);
        let spellCheck = finalSpellCheck(noEmpty);
        let noNums = cleanNumbers(finalCheck);
        let noMails = cleanEmails(noNums);
        
        // add conditional to clean custom args if prescribed, or just go ahead and filter.
        
        return noMails;
}