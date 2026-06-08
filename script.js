function calcular() {
    var forma = document.querySelector('#iforma')//variavel para conferir qual forma de pagamento
    var bandeira = document.querySelector('#ibandeira') //variavel para conferir qual bandeira
    var msg = document.querySelector('#res') //defini variavel para o paragrafo que da as mensagens
    var caixa = document.querySelector('#ivalor') //definir a variavel para representar o input
    var valor = Number(caixa.value) //covertu o valor do input para numero
    var tipo = document.getElementsByName('tipo') //criei a propreidade completa ja marcada
    var receber = tipo[1].checked //criei a propreidade completa ja marcada
    var cobrar = tipo[0].checked //criei a propreidade completa ja marcada
    msg.innerHTML = '' //deixar o paragrafo vazio 
    if (valor == 0) { // se o campo estiver vazio mostra mensagem de erro na cor vermelha
        msg.innerHTML = '[ERRO]: Adicione um valor'
        msg.style.color = 'red'
    } 
    //TODOS OS DÉBITOS - START
    else if (forma.value === 'DE' && receber && bandeira.value === 'VM') {
        // vai mostrar o valor receber no débito Visa ou Master
        var resultado = 100 * (1.68 / 100) + valor
        msg.innerHTML = `Cobre R$${resultado}`
    } else if (forma.value === 'DE' && cobrar && bandeira.value === 'VM') {
        //Mostra o valor a cobrar no débito Visa ou Master
        var resultado = valor - 100 * (1.66 / 100) 
        msg.innerHTML = `Cobre R$${resultado}`
    }else if (forma.value === 'DE' && receber && bandeira.value === 'EA'){
        var resultado = 100 * (2.93 / 100) + valor //diferença de 0.8 centavos
        msg.innerHTML = `Cobre R$${resultado}`
    }else if ( forma.value === 'DE' && cobrar && bandeira.value ==='EA'){
        var resultado = valor - 100 * (2.85 / 100 ) //sem diferença (sd)
        msg.innerHTML = `Cobre R$${resultado}`
    }
    //TODOS OS DÉBITOS - END
}