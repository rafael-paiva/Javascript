/*
    O map vai pegar cada índice do array, executar uma função para alterar cada índice e formar um novo array
*/

var valores = [0 , 2 , 5 , 8 , 12];

var dobro = valores.map(function(valor){   //Gera um novo array, alterando cada elemento de acordo com a função passada
    return valor * 2;
});

console.log(dobro);
