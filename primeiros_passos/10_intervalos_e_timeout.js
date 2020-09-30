
/* Intervalos */
    var num = 0;
    function count(){
        num ++;
        console.log(num);
    }

    setInterval(count, 1000)  //Executa a função count() a cada 1000mS

/* timeout */
    function printMsg(){
        console.log('SHOW!');
    }

    setTimeout(printMsg, 3000) //Após o carregamento da página, aguarda 3 segundos e executa a função printMsg()
