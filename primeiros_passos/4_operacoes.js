var num1 = 5, num2 = 23;

/* soma */
    var resultadoSoma = num1 + num2;
    console.log(resultadoSoma);
    //Cuidado! Somar um número com uma string, irá concatenar os dois valores:
    var concat = num1 + '2';  //Retornará 52
    console.log(concat);

/* Subtração */
    var resultadoSubtracao = num1 - num2;
    console.log(resultadoSubtracao);

/* Multiplicação */
    var resultadoMultiplicacao = num1 * num2;
    console.log(resultadoMultiplicacao);

/* Divisão */
    var resultadoDivisao = num2/num1;
    console.log(resultadoDivisao);

/* Resto da divisão (módulo)*/
    var restoDivisao = num2 % num1;
    console.log(restoDivisao);

/* Incremento */
    var resultadoIncremento = num1 += 8;
    console.log(resultadoIncremento);

/* Decremento */
    var resultadoDecremento = num1 -= 2;
    console.log(resultadoDecremento);
