/* Breve introdução à funções, tem um capítulo dedicado à elas*/
/* Funções são blocos de código que executam ações */

/* Função sem parâmetros */
    function exibirMensagem(){     //Exibe uma mensagem (Apenas declara, mas não executa)
        console.log('SUCESSO!');
    }

    exibirMensagem();  //Executa a função

/* Função com parâmetros */
    function somar(valor1, valor2){   //Retorna o valor1 + valor2
        var res = valor1 + valor2;
        return res;
    }

    var resultadoSoma = somar(4 , 9);

    console.log(resultadoSoma);
