var escola ="SESISENAI"
// quando se trabalha com variaveis do tipo string, pode se trabalhar com alguns aspectos.
console.log("escola "+escola +"!") // < concatenação da variável.
console.log("escola ".concat(escola) .concat("!")) // < concatenação com a função .concat.

var professor1 = "Jonathas"
var idade1 = 32

var professor2 ="Carlos"
var idade2 = 30

var professor3 = "Bruno"
var idade3 = 26

// O jhonatas tem 32 anos, O Carlos tem 30 anos e o Bruno tem 26 anos!
console.log("o "+professor1, "tem "+idade1, "anos, O "+professor2, "tem "+idade2, "anos", "e o "+professor3, "tem "+idade3, "anos!") 
// 
console.log(`O ${professor1} tem ${idade1} anos, O ${professor2} tem ${idade2} anos e o ${professor3} tem ${idade3} anos!`)// < Concatenar com template string.
