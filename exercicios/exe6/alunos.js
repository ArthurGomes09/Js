var alunos, medias, total, notas
medias = 0
alunos = parseFloat(prompt("Quantos Alunos Tem Em Sala? "))
for(i=1; i<= alunos; i++){
    notas = parseFloat(prompt("Digite as notas (Uma Por Uma)"))
    medias = notas + medias
}
total = medias / alunos
document.write(`A média da turma é: ${total}`)
