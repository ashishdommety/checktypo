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

const cleanSymbols = require("./_cleanEmails"),
      cleanSpaces = require("./_cleanSpaces"),
      cleanEmptyStrings = require("./_cleanEmptyStrings"),
      finalSpellCheck = require("./_finalSpellCheck"),
      cleanNumbers = require("./_cleanNumbers"),
      cleanEmails = require("./_cleanEmails"),
      cleanCustomArgs = require("./_cleanCustomArgs");

module.exports = function (contentArray){
    cleanCustomArgs(
        cleanEmails(
            cleanNumber(
                finalSpellCheck(
                    cleanEmptyStrings(
                        cleanSpaces(
                            cleanSymbols(contentArray)
                        )
                    )
                )
            )
        )
    )
}