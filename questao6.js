// 6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.
var aprovados = 0;
var resposta = "S";

while (resposta.toUpperCase() === "S") {
    var nota1 = parseFloat(prompt("Digite a primeira nota:"));
    var nota2 = parseFloat(prompt("Digite a segunda nota:"));

    var media = (nota1 + nota2) / 2;
    console.log("Média final: " + media);

    if (media >= 9.5) {
        console.log("Aluno aprovado!");
        aprovados++;
    } else {
        console.log("Aluno reprovado!");
    }

    resposta = prompt("Calcular a média de outro aluno Sim/Não? (S/N)");
}

console.log("Quantidade de alunos aprovados: " + aprovados);
