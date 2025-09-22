// 10 - Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.
var dentro = 0;
var fora = 0;

for (var i = 1; i <= 10; i++) {
    var valor = parseInt(prompt("Digite o valor " + i + ":"));

    if (valor >= 24 && valor <= 42) {
        dentro++;
    } else {
        fora++;
    }
}

console.log("Valores dentro do intervalo (24 a 42): " + dentro);
console.log("Valores fora do intervalo: " + fora);
