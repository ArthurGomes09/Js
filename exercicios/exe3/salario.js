let salario = parseInt(prompt("Digite seu Salário"))
if (salario < 500){
    let salarioRea = (salario + ( salario * 0.3))
    console.log(`O valor do reajuste salarial é: ${salarioRea}`)
}else{
    console.log(`Seu salário é R$${500},00 Você não tem direito a reajuste de salário!`)
}