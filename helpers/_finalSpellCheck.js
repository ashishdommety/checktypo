/* Function to conduct a final spellcheck */
module.exports = function finalSpellCheck(arr){
    let finalTypos = [];
    for(let a=0; a < arr.length; a++){
        if(!dictionary.check(arr[a])){
            finalTypos.push(arr[a]);
        }
    }
    return finalTypos;
}

