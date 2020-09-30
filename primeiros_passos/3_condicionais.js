
/* If - else - else if */
    var idade = 2;
    if(idade >= 18){           //Se a variável idade for maior ou igual a 18
        console.log('Adulto');
    } else if (idade < 18 && idade >= 14){ //Se a variável idade for menor que 18 e maior ou igual a 14
        console.log('Adolescente');
    } else {                    //Se nenhuma das condições acima estiver sido satisfeita
        console.log('Criança');
    }

/* Switch case */
    var time = 'Cruzeiro';  
    switch (time){            //Separa os possíveis valores de 'time'
        case 'Flamengo':      //Se o time == 'Flamengo'
            var sigla = 'FLA';
            break;
        case 'Cruzeiro':      //Se o time == 'Cruzeiro'
            var sigla = 'CRU';
            break;
        case 'Atlético':      //Se o time == 'Atlético'
            var sigla = 'ATL';
            break;
        default:              //Se não for nenhuma das opções acima
            var sigla = 'nulo';
            break;             
    } 
    console.log(sigla);

    var segundaDiv = sigla === 'CRU'; //retorna 'true' se sigla for idêntica à 'CRU' e false se não for
    console.log(segundaDiv);

