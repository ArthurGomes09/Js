var nota1 , nota2 , nota3, resu, aluno1, aluno2, n1a2, n2a2, n3a2, resu2

aluno1 = prompt("Insira Seu Nome Aluno 1")
aluno2 = prompt("Insira Seu Nome Aluno 2")
nota1 = parseInt(prompt("Insira sua nota 1"))
nota2 = parseInt(prompt("Insira sua nota 2"))
nota3 = parseInt(prompt("Insira sua nota 3"))
n1a2 = parseInt(prompt("Insira sua nota 1 aluno 2"))
n2a2 = parseInt(prompt("Insira sua nota 2 aluno 2"))
n3a2 = parseInt(prompt("Insira sua nota 3 aluno 2"))

resu = (nota1 + nota2 + nota3)/3
resu2= (n1a2 + n2a2 + n3a2)/3

document.write(

    `<h1>${aluno1} tem como suas notas respectivamente: 
    <br> 
    ${nota1}<br>
    ${nota2}<br>
    ${nota3}
    <br> 
    </h1> <br> <h2>logo sua média aritmética é :</h2> 
    ${resu .toFixed(1)} <hr> 

    <h1>${aluno2} tem como suas notas respectivamente: 
    <br> 
    ${n1a2}<br>
    ${n2a2}<br>
    ${n3a2}
    <br> 
    </h1> <br> <h2> logo sua média aritmética é : </h2> 
    ${resu2 .toFixed(1)} <hr>`
 )