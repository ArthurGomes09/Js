function positivo(num1){
    if(num1 < 0){
    document.write(0)
    return 0
}else{
    document.write(1)
    return 1
} 
}
positivo(parseFloat(prompt("digite o número: ")))