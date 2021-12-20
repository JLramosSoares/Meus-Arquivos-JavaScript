
/* 
Faz o cálculo do fatorial de um número
*/

function fatorial(x){
    var fat = 1
    for (let i = 1; (i < x + 1); i++) {
        fat = fat * i
    }
    return fat
}
