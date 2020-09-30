
/*
Arrays são objetos indexados, onde o primeiro índice é o 0,
e o último é o n-1, em que n é o tamanho do array

índice = posição do elemento no array
array com 5 elementos (n = 5): -índices: [0][1]   [2][3] [4]
                               -valores: [9][true][0][57]['a']
*/

/* Formas de se declarar um array */
    //Forma 1
    var meses = new Array('Janeiro', 'Março', 'Outubro');
    console.log(meses);

    //Forma 2
    var notas = [6.5, 8.7, 8, 7.2];
    console.log(notas);

/* Criando um array vazio */
    var dados = [];
    console.log(dados);

/* Acessando o valor de um índice */
    console.log(notas[2]);

/* Alterando um valor a partir do índice */
    notas[2] = 6.1;
    console.log(notas[2]);

/* Acessando um índice com valor indefinido*/
    console.log(notas[7]);    //undefined

/* Inserindo elementos no final do array */
    /*newIndex = (notas.length) + 1;
    notas[newIndex] = 10;
    console.log(notas[newIndex]);*/
    // ou
    notas.push(10);    //Insere '10' no primeiro índice vazio
    console.log(notas);
/* Removendo um elemento do final do array */
    console.log(notas.pop());  //Imprime o elemento excluído
    console.log(notas);         //Imprime todo o array depois da exclusão

/* tamanho de um array*/
    qtdNotas = notas.length;
    console.log(qtdNotas);

/* Ordenar os valores dos arrays */
    //Ordenando strings: por ordem alfabética
        var alunos = ['Aline', 'Cláudio', 'Ziraldo', 'Bruno', 'Amanda'];
        alunos.sort();
        console.log(alunos);

    // Ordenando números
        var idades = [8, 5, 13, 17, 6, 15];
        idades.sort(function(a,b){return a - b;});   //Menor para o maior
        console.log(idades);

        idades.sort(function(a,b){return b - a;});   //Maior para o menor
        console.log(idades);

/* Deletando dados de um array */
    //Método 1
        delete idades[2];
        console.log(idades); //Substituirá o idades[2] por empty
    //Método 2
        idades.splice(3, 1);  //A partir do índice 3, delete 1 elemento
        console.log(idades);

/* Inserindo valores no meio de um array*/
    idades.splice(2, 0, 21, 14);  //A partir da posição 2, delete nenhum e inclua 21 e 14
    console.log(idades);

/* Iterar em um array */
    for (var index = 0; index < idades.length; index ++){
        console.log(idades[index]);
    }

/* Removendo o primeiro valor de um array */
    console.log(idades);
    var ret = idades.shift();
    console.log(ret);
    console.log(idades);

/* Inserindo um elemento na primeira posição do array */
    idades.unshift(11);
    console.log(idades);

/* Criando um array a partir de outro */
    var newArray = idades.slice(2, 5);   //Cria um array com as posições 2, 3 e 4
    console.log(newArray);
    newArray = idades.slice(2);          //Cria um array com os valores a partir do índice 2
    console.log(newArray);

/* Concatenando dois arrays */
    var initialMessage = 'hello ';
    var finalMessage = 'world';
    var wholeMessage = initialMessage.concat(finalMessage);
    console.log(wholeMessage);

/* Arrays bidimensionais */
    var table = [[1, 2, 3, 4],
                 [5, 6, 7, 8],
                 [9,10,11,12]
                ];
    console.log(table[1][3]);   //linha 2, coluna 4
