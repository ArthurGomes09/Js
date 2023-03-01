let num1, num2, num3
num1 =parseFloat(prompt("Digite o primeiro número: "))
num2 =parseFloat(prompt("Digite o segundo número: "))
num3 =parseFloat(prompt("Digite o terceiro número: "))

if(num1 < num2 && num1 < num3){
    if(num2 < num3){
        document.write(`${num1} - ${num2} - ${num3}`)
    } else{
        document.write(`${num1} - ${num3} - ${num2}`)
    }
}
if(num2 < num3 && num3 < num1){
    if(num1 < num3){
        document.write(`${num2} - ${num1} - ${num3}`)
    }else{
        document.write(`${num2} - ${num3} - ${num1}`)
    }
    
}
