// 5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.

var num1 = parseInt(prompt("Digite o primeiro número (menor):"));
var num2 = parseInt(prompt("Digite o segundo número (maior):"));
var soma = 0;
var qtd = 0;

for (var i = num1; i <= num2; i++) {
    soma += i;
    qtd++;
}

var media = soma / qtd;
console.log("Média: " + media);
