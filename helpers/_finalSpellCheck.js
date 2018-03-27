/* Function to conduct a final spellcheck */
export default function finalSpellCheck(){
    let finalTypos = [];
    for(let a=0; a < nonEmpty.length; a++){
        if(!dictionary.check(nonEmpty[a])){
            finalTypos.push(nonEmpty[a]);
        }
    }
    return finalTypos;
}

