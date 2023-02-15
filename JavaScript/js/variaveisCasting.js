var nome, idade, altura
nome = prompt("Digite Seu Nome")
idade = parseInt(prompt ("Digite Sua Idade"))
altura = parseFloat(prompt("Digite Sua Altura"))

// parseInt(prompt("")) serve para armazenar uma Number

// parseFloat(prompt("")) server para armazenar uma Number Decimal

// prompt serve como o "Leia" do portugol, ele armezena um dado que o usuário inseriu e o transforma.

console.log(nome, idade, altura)
console.log(typeof nome)
console.log(typeof idade)
console.log(typeof altura)

document.write(`<h1> Olá ${nome}
        </h1> <br> Sua idade ${idade}</p> <br>
        <a> sua altura ${altura} </a>
`)