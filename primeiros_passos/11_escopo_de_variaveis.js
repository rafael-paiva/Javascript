/*
    O escopo de uma variável se refere ao local onde ela pode ser usada
*/

var nome = 'Rafael'  //variável local, pode ser acessada de qualquer local do arquivo

function mudarNome(){
    var nome = 'Raphael' //variável local, só pode ser acessada dentro da função
    console.log(nome)
}

mudarNome()        //Imprime 'Raphael'

console.log(nome)  //Imprime 'Rafael'