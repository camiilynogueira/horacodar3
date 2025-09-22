// 4 - Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).

var soma = 0;
var qtd = 0;

for (var i = 15; i <= 100; i++) {
    soma += i;
    qtd++;
}

var media = soma / qtd;
console.log("Média: " + media);
