/*
    Encontra a posição inicial de uma palavra dentro de
    uma frase.
*/

function findIndexOf(phrase, word){
    let wordIndex = phrase.indexOf(word) //Captura o index (n ou -1)
    if (wordIndex !== -1){ //Verifica se a palavra existe na frase
        console.log(`A palavra "${word}" foi encontrada na posição ${wordIndex}`)
    } else {
        console.log(`Não foi possível localizar a palavra "${word}"`)
    }
}

var phrase = 'Só sei que nada sei e o fato de eu saber isso me coloca em vantagem sobre aqueles que acham que sabe.'
var word = 'saci'

findIndexOf(phrase, word)