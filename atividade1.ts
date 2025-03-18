/*+ 5 pontos em cima da média do semestre
Sem ajuda do professor, e usar somente os recursos ensinado em aula:

🚗⛽

Crie um programa que simula a venda de combustíveis em um posto de gasolina. O usuário deverá informar que deseja abastecer:
para Gasolina
para Etanol

O programa deve calcular e exibir o de acordo com os seguintes preços:
R$ 5,50 por litro
R$ 4,00 por litro
 Se a quantidade abastecida for de 20 litros, aplique um desconto de 5%  sobre o valor total.
 Nome:Pablo Isaac Sponchiado da Silva
 */

const teclado = require('prompt-sync')();

console.log(`=============================`);
console.log(`===== POSTO DE GASOLINA =====`);
console.log(`=============================`);

let gasolina: number = 5.50;
let etanol: number = 4.00;

console.log(` \nBoa tarde!! `)
console.log(`\nO litro da gasolina é ${gasolina} `);
console.log(`\nO litro do etanol é ${etanol} `);

let combustivel = teclado(`\nQual é o combustivel ? `);

if (combustivel = gasolina) {
    console.log(`\nO preço é 5.50 `);
}
else if (combustivel = etanol) {
    console.log(`\nO preço é 4.40 `);
}
else {
    console.log(`\nNão temos esse combustivel `);
}
let quantidade: number = teclado(`\nQuantos litros ?`);
let preco: number = quantidade * combustivel;

if (quantidade >= 20) {
    console.log(`\nVocê tem um desconto de 5% no valor! `);
    let desconto: number = (quantidade * combustivel) * 0.05;
    let preco: number = (quantidade * combustivel) - desconto;
    console.log(`\n O preço é ${preco} reais `);
}
else {
    console.log(` \nVocê não tem desconto no valor `);
    let preco: number = quantidade * combustivel;
    console.log(` \nO preço é ${preco} reais `);
}
console.log(` \nVolte sempre!!! `)