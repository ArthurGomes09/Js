 numero1 = parseFloat(prompt("Digite o primeiro número: "))
 
 oper = prompt("O que deseja? somar ou subtrair? Utilize 'soma', 'Soma' ou '+' | 'sub', 'subtração', '-': ")

 numero2 = parseFloat(prompt("Digite o segundo número: "))


function operacao(numero1, numero2, oper){
    if(oper == 'soma' || oper == 'Soma' || oper == '+'){
    return numero1 + numero2
    }
    else if(oper == 'sub' || oper == 'subtração' || oper == '-'){
    return numero1 - numero2
    }
    else{
        alert("Infelizmente não foi possível efetuar a operação, <br> tente novamente mais tarde!")
    }
    }
    document.write(`O resultado é: `, operacao(numero1, numero2, oper))

// A partir da criação das variáveis "numero1", "numero2" e "oper" o programa determina os números a serem comparados e por fim o tipo de operação que vai ser executada no "Resultado".

// Antes disso, é criada uma função chamada "operacao" que junto de uma cadeia de condições, determinam a equivalência dos números e retornam o tipo de operação, tornando as variáveis "numero1" e "numero2" em soma ou subtração de fato.

// A função passa a receber uma ordem de soma ou subtração dependendo do tipo de resposta do usuário a variável "oper".

// Se o usuário por conseguinte não determinar o tipo de operação como "soma", "Soma" ou "+", ou "sub", "subtração" ou "-", o código irá emitir um alerta ao usuário lhe avisando que houve um erro na digitação.

// A partir do momento que se é definido o resultado da operação é mostrado na própria página WEB concatenando o texto com as variáveis depois da efetuação da soma ou subtração.