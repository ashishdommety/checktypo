/* 
    Current order of function calls
    - clean typos and spellcheck
        - clean white spaces
            - clean empty strings
                - final spellcheck 
                    - filter out numbers
                        - filter out emails
                            - remove custom arguments
*/

const cleanSymbols = require("./_cleanSymbols"),
      cleanSpaces = require("./_cleanSpaces"),
      cleanEmptyStrings = require("./_cleanEmptyStrings"),
      finalSpellCheck = require("./_finalSpellCheck"),
      cleanNumbers = require("./_cleanNumbers"),
      cleanEmails = require("./_cleanEmails"),
      cleanCustomArgs = require("./_cleanCustomArgs");

module.exports = function (contentArray){
    
        let noSymbols = cleanSymbols(contentArray);
        let noSpaces = cleanSpaces(noSymbols);
        let noEmpty = cleanEmptyStrings(noSpaces);
        let finalCheck = finalSpellCheck(noEmpty);
        let noNums = cleanNumbers(finalCheck);
        let noMails = cleanEmails(noNums);
        
        // add conditional to clean custom args if prescribed, or just go ahead and filter.
        
        return noMails;
}