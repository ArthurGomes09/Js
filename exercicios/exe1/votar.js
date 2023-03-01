var nasc = prompt("Digite Seu Ano De Nascimento: ")
var anoAtual = prompt("Digite O Ano Atual")
var idade = anoAtual - nasc
if(idade >= 18 & idade >= 16){
document.write(`<h2>Você tem <h1>${idade}</h1> Anos de idade, logo pode votar e tirar a habilitação!</h2>`)
}
else if(idade = 17){
    document.write(`<h2>Você tem <h1>${idade}</h1> Anos de idade, logo pode votar, mas não pode tirar a habilitação ainda!</h2>`)
}
 else{
    document.write(`<h2>Você tem <h1>${idade}</h1> Anos de idade, logo não pode votar e nem tirar a habilitação!</h2>`)
}