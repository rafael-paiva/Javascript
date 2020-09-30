

/*O JavaScript possui uma tipagem de dados dinâmica, o que significa que o tipo de dados pode variar ao longo do script.*/

/*Alterando o tipo de uma variável*/
    var dinamica = "texto"; //Cria uma variável do tipo string, com valor "texto"
    console.log(dinamica);
    dinamica = 25;          //Altera a variável 'dinamica' para inteiro
    console.log(dinamica);

/*Tipos de variáveis*/
    var nome = 'Rafael';  //String
    var idade = 19;       //int
    var altura = 1.75;    //Float
    var ativo = true;     //Boolean
    var times = ["Cruzeiro", "Flamengo", "Curintia"] // Array
    var aluno = {         //Object
        nome: 'Paula',
        idade: 20,
        peso: 58.5,
        altura: 1.70,
        ativo: true
    };

    console.log(aluno.nome);
