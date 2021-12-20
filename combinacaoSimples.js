/* 
Realiza o cálculo de uma combinação simples
*/

//Utiliza o cálculo do fatorial para calcular as combinações
function fatorial(x){
    var fat = 1
    for (let i = 1; (i < x + 1); i++) {
        fat = fat * i
    }
    return fat
}

//Realiza o cálculo de combinação simples 
function combinacaoSimples(k, n){
    if (k > n) {
        var totalCombinacao = fatorial(k) / (fatorial(n) * fatorial(k - n))
        console.log(`Combinações possíveis: ${totalCombinacao}`)  
    } else {
        console.log("O valor do grupo é menor que o agrupamento")
    }
}

combinacaoSimples(4, 2)