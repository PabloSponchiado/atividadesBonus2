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
var teclado = require('prompt-sync')();
console.log("=============================");
console.log("===== POSTO DE GASOLINA =====");
console.log("=============================");
var gasolina = 5.50;
var etanol = 4.00;
console.log(" Boa tarde!! ");
console.log("\nO litro da gasolina \u00E9 ".concat(gasolina, " "));
console.log("\nO litro do etanol \u00E9 ".concat(etanol, " "));
var combustivel = teclado("\nQual \u00E9 o combustivel ? ");
if (combustivel = gasolina) {
    console.log("\nO pre\u00E7o \u00E9 5.50 ");
}
else if (combustivel = etanol) {
    console.log("\nO pre\u00E7o \u00E9 4.40 ");
}
else {
    console.log("\nN\u00E3o temos esse combustivel ");
}
var quantidade = teclado("\nQuantos litros ?");
var preco = quantidade * combustivel;
if (quantidade >= 20) {
    console.log(" Voc\u00EA tem um desconto de 5% no valor! ");
    var desconto = (quantidade * combustivel) * 0.05;
    var preco_1 = (quantidade * combustivel) - desconto;
    console.log(" O pre\u00E7o \u00E9 ".concat(preco_1, " reais "));
}
else {
    console.log(" Voc\u00EA n\u00E3o tem desconto no valor ");
    var preco_2 = quantidade * combustivel;
    console.log(" O pre\u00E7o \u00E9 ".concat(preco_2, " reais "));
}
console.log(" Volte sempre!!! ");
