let numeros = []


//Cria números inteiros aleatórios
function getRandomInt(){
    var max = Math.floor(100);
    var min = Math.ceil(1);
    return Math.floor(Math.random() * (max - min)) + min
}

//Adiciona em uma lista 10 números inteiros aleatórios
for(let i = 0; i < 10; i++){
    numeros.push(getRandomInt())
}

//Verifica qual é o maior valor da lista
function maior(numeros){  
    let maior;
    for(let i = 0;(i < numeros.length); i++){ /* Se escrever a palavra length errado da como undefined */
        if (i === 0){
            maior = numeros[i]
        } else if (maior < numeros[i]){
            maior = numeros[i]
        }
    }
    return maior
}

//Verfica qual é o menor valor da lista
function menor(numeros){
    let menor;
    for(let i = 0; (i < numeros.length); i++){
        if (i === 0){
            menor  = numeros[i]
        } else if (menor > numeros[i]){
            menor = numeros[i]
        }
    }
    return menor
}

let maiorMinhaLista = maior(numeros)
let menorMinhaLista = menor(numeros)

console.log("-----MINHA LISTA-----")
console.log(numeros)
console.log(`Maior: ${maiorMinhaLista}\nMenor: ${menorMinhaLista}`)

