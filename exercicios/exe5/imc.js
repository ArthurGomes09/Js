var nome = prompt("Digite Seu Nome: ")
var altura = parseFloat(prompt("Informe Sua Altura Em Centímetros"))
var peso = parseFloat(prompt("Informe Seu Peso Em Quilogramas"))

let alturaM = altura/100

let imc = peso / (alturaM * 2)

let classificacao;
if(imc < 16){
    classificacao = `Baixo Peso Muito Grave!`
}
else if(imc >= 16 && imc <= 16.99){
    classificacao =`Baixo Peso Grave!`
}
else if(imc >=17 && imc <=18.49){
    classificacao =`Baixo Peso!`
}
else if(imc >= 18.50 && imc <=24.99){
    classificacao =`Peso Normal`
}
else if(imc >= 25 && imc <= 29.99){
    classificacao =`Sobrepeso!`
}
else if(imc >= 30 && imc <= 34.99){
     classificacao =`Obesidade Grau I!`
}
else if(imc >= 35 && imc <= 39.99){
    classificacao =`Obesidade Grau II!`
}
else if(imc >= 40){
    classificacao = `Obesidadae Grau III!`
}
document.write(`${nome} Possui índice de massa corporal igual a: ${imc.toFixed(2)}, sendo classificado como: ${classificacao}`)
