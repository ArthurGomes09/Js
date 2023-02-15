// condicional simples
if(false){
    console.log("Entrou no bloco IF (verdadeiro)")
}
// condicional composta
if(true){
    console.log("Entrou no bloco IF (verdadeiro)")
}else{
    console.log("entrou pro bloco Else (Falso)")
}



//condicional composta encadeada
if(false){
    console.log("Entrou no bloco If (verdadeiro)")
}
else if(true){
    console.log("Entrou no bloco Else If (segundo verdadeiro)")
}
else if(true){
    console.log("Entrou no bloco Else If (terceiro vercadeiro")
} else{
    console.log("Entrou no bloco Else (falso)")
}

let numero = "2" // teste com o 1
switch(numero){
    case "1": 
    console.log("caso 01")
    case "2": 
    console.log("caso 02")
    break;
    default:
        console.log("bloco falso") 
}