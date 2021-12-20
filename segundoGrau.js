/* 
Calcula a equação de 2° Grau da função utilizando o delta
para calcular as duas raízes da equação  
*/

function segundoGrau(a, b, c){
    const delta = (b**2) - 4 * a * c //Calcula o Delta
    if (delta > 0) { //Raízes diferentes
        var x1 = (-(b) + Math.sqrt(delta)) / 2 * a
        var x2 = (-(b) - Math.sqrt(delta)) / 2 * a
        console.log(`X¹ = ${x1}\nX² = ${x2}`)
    } if (delta == 0) { //Raízes iguais
        var x = -b / 2 * a
        console.log(`X¹ e X² = ${x}`)
    }
    console.log(`Delta: ${delta}`)
}