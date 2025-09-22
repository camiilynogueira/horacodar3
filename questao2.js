// 2 - Escreva um algoritmo para ler 2 valores informados pelo usuário e enquanto o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor, mas para a mesma variável. Ou seja, para o segundo valor não pode ser aceito o valor zero nem um valor negativo. O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor e exibir o resultado ao usuário.

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