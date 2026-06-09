//Seletores e eventos
const botao = document.querySelector('#btncalc')
botao.addEventListener('click', calcular)

//função principal
function calcular() {
    const forma = document.querySelector('#iforma')//variavel para conferir qual forma de pagamento
    const bandeira = document.querySelector('#ibandeira') //variavel para conferir qual bandeira
    const msg = document.querySelector('#res') //defini variavel para o paragrafo que da as mensagens
    const caixa = document.querySelector('#ivalor') //definir a variavel para representar o input
    const valor = Number(caixa.value) //coverteu o valor do input para numero
    const tipo = document.getElementsByName('tipo') //criei a propreidade completa ja marcada
    const receber = tipo[1].checked //criei a propreidade completa ja marcada
    const cobrar = tipo[0].checked //criei a propreidade completa ja marcada
    msg.innerHTML = '' //deixar o paragrafo vazio 
    if (valor <= 0 || isNaN(valor)) { // se o campo estiver vazio mostra mensagem de erro na cor vermelha
        msg.innerHTML = '[ERRO]: Adicione um valor'
        msg.style.color = 'orange'
    }
    //TODOS OS DÉBITOS - START
    else if (forma.value === 'DE' && receber && bandeira.value === 'VM') {
        // vai mostrar o valor receber no débito Visa ou Master
        const taxa = (1-(1.66 / 100))
        let resultado = valor / taxa
        msg.innerHTML = `Para receber ${moeda(valor)} <br>`
        msg.style.color = 'green'
        msg.innerHTML += `Cobre ${moeda(resultado)}`

    } else if (forma.value === 'DE' && cobrar && bandeira.value === 'VM') {
        //Mostra o valor a cobrar no débito Visa ou Master
        const taxa = (1-(1.66 / 100))
        let resultado = valor * taxa
        msg.style.color = 'red'
        msg.innerHTML = `Cobrando ${moeda(valor)} <br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`
        //RECEBER E COBRAR - ELO E AMERICAN EXPRESS
    } else if (forma.value === 'DE' && receber && bandeira.value === 'EA') {
        const taxa = valor * (2.931 / 100)
        let resultado = taxa + valor //diferença de 0.8 centavos
        msg.style.color = 'green'
        msg.innerHTML = `Para receber ${moeda(valor)} <br>`
        msg.innerHTML += `Cobre ${moeda(resultado)}`

    } else if (forma.value === 'DE' && cobrar && bandeira.value === 'EA') {
        const taxa = valor * (2.85 / 100)
        let resultado = valor - taxa //sem diferença (sd)
        msg.style.color = 'red'
        msg.innerHTML = `Cobrando ${moeda(valor)} <br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`
    }
    //TODOS OS DÉBITOS - END

    // TODOS OS CRÉDITOS - START
    //credito visa ou master
    else if (forma.value === 'CV' && receber && bandeira.value === 'VM') {
        const taxa = valor * (4.112 / 100) //diferença de 0,162 cents para poder ficar igual
        let resultado = taxa + valor
        msg.style.color = 'green'
        msg.innerHTML = `Para receber ${moeda(valor)} <br>`
        msg.innerHTML += `Cobre ${moeda(resultado)}`
    } else if (forma.value === 'CV' && cobrar && bandeira.value === 'VM') {
        const taxa = valor * (3.95 / 100) //valor igual na ton
        let resultado = valor - taxa
        msg.style.color = 'red'
        msg.innerHTML = `Cobrando ${moeda(valor)} <br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`
    } // Crédito Elo e American express
    else if (forma.value === 'CV' && receber && bandeira.value === 'EA') {
        const taxa = valor * (5.417 / 100) //diferença de 0,277 cents
        let resultado = taxa + valor
        msg.style.color = 'green'
        msg.innerHTML = `Para receber ${moeda(valor)} <br>`
        msg.innerHTML += `cobre ${moeda(resultado)}`
    }
    else if (forma.value === 'CV' && cobrar && bandeira.value === 'EA') {
        const taxa = valor * (5.14 / 100)
        let resultado = valor - taxa
        msg.style.color = 'red'
        msg.innerHTML = `Cobrando ${moeda(valor)} <br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`

    }
    // TODOS OS CRÉDITOS - END

    //PARCELAMENTOS -START
    //Visa e Master em 2x - start
    else if (forma.value === '2X' && receber && bandeira.value === 'VM') {
        const taxa = valor * (8.681 / 100) //TON diz cobrar 7,99% - diferença de 0,691
        let resultado = valor + taxa
        msg.style.color = 'green'
        msg.innerHTML = `Para receber ${moeda(valor)} <b>`
        msg.innerHTML += `Cobre ${moeda(resultado)}`
    } else if (forma.value === '2X' && cobrar && bandeira.value === 'VM') {
        const taxa = valor * (7.99 / 100)
        let resultado = valor - taxa
        msg.style.color = 'red'
        msg.innerHTML = `Cobrando ${moeda(valor)} <br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`
    }// Visa e Master em 2x - end

    //Elo e American Express em 2x - start
    else if (forma.value === '2X' && receber && bandeira.value === 'EA') {
        const taxa = valor * (10.350 / 100)
        let resultado = valor + taxa
        msg.style.color = 'green'
        msg.innerHTML = `Para receber ${moeda(valor)} <br>`
        msg.innerHTML += `Cobre ${moeda(resultado)}`
    } else if (forma.value === '2X' && cobrar && bandeira.value === 'EA') {
        const taxa = valor * (9.38 / 100)
        let resultado = valor - taxa
        msg.style.color = 'red'
        msg.innerHTML = `Cobrando ${moeda(valor)}<br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`
    }//Elo e American Express em 2x - end

    //Visa e Master em 3x - start
    else if (forma.value === '3X' && receber && bandeira.value === 'VM') {
        const taxa = (1 - (8.99 / 100))
        let resultado = valor / taxa
        msg.style.color = 'green'
        msg.innerHTML = `Para receber ${moeda(valor)}<br>`
        msg.innerHTML += `Cobre ${moeda(resultado)}`
    }else if ( forma.value === '3X' && cobrar && bandeira.value ==='VM'){
        const taxa = (1 - (8.99 / 100))
        let resultado = valor * taxa
        msg.style.color = `red`
        msg.innerHTML = `Cobrando ${moeda(valor)} <br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`
    }

}

//função auxiliar
function moeda(valor) {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
}