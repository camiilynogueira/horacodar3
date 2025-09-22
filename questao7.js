// 7 - Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total. Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário.

var soma = 0;

for (var i = 1; i <= 6; i++) {
    var nota = parseFloat(prompt("Digite a nota " + i + " (0 a 10):"));

    while (nota < 0 || nota > 10) {
        nota = parseFloat(prompt("Valor inválido! Digite a nota " + i + " (0 a 10):"));
    }

    soma += nota;
}

var media = soma / 6;
console.log("Média final: " + media);
