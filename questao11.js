// 11 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.

var N = parseInt(prompt("Digite um valor N:"));

for (var i = 1; i <= N; i++) {
    console.log("Tabuada do " + i + ":");
    for (var j = 1; j <= 10; j++) {
        console.log(i + " x " + j + " = " + (i * j));
    }
    console.log("");
}