/* Estrutura FOR */
    for (var i = 0; i <= 10; i ++){  //Executa um loop iniciando em 0 e indo até 10 incrementando i a cada ciclo
        console.log(i);
    }

/* Estrutura WHILE */
    var repeticoesRestantes = 5;
    while (repeticoesRestantes > 0){  //Mantém o loop enquanto 'repeticoesRestantes' > 0
        repeticoesRestantes --;
        console.log(repeticoesRestantes);
    }

/* DO - WHILE*/
    repeticoesRestantes = 8;
    do{
        console.log(repeticoesRestantes);
        repeticoesRestantes --;
    }while(repeticoesRestantes > 0);
/*
    A diferença entre o WHILE e o DO - WHILE é que
    o WHILE verifica a condição e depois executa, já
    o DO - WHILE executa o comando e depois verifica
*/
