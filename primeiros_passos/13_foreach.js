var meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
];

function imprimir(mes, indice){
    console.log(indice + ' - ' + mes);
}

meses.forEach(imprimir);    //Para cada índice de meses, executa a função 'imprimir'