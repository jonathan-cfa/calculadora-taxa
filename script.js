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
    //========================================TODOS OS DÉBITOS - START
    // Débito Visa e Master - Start
    else if (forma.value === 'DE' && receber && bandeira.value === 'VM') {
        const taxa = (1 - (1.66 / 100)) //calculo da taxa
        let resultado = valor / taxa //valor com taxa
        msg.innerHTML = `Para receber ${moeda(valor)} <br>`
        msg.style.color = 'green'
        msg.innerHTML += `Cobre ${moeda(resultado)}`
    } else if (forma.value === 'DE' && cobrar && bandeira.value === 'VM') {
        const taxa = (1 - (1.66 / 100))
        let resultado = valor * taxa
        msg.style.color = 'red'
        msg.innerHTML = `Cobrando ${moeda(valor)} <br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`
        // Débito Visa e Master - end

        //Débito Elo e American - Start
    } else if (forma.value === 'DE' && receber && bandeira.value === 'EA') {
        const taxa = (1 - (2.85 / 100))
        let resultado = valor / taxa
        msg.style.color = 'green'
        msg.innerHTML = `Para receber ${moeda(valor)} <br>`
        msg.innerHTML += `Cobre ${moeda(resultado)}`
    } else if (forma.value === 'DE' && cobrar && bandeira.value === 'EA') {
        const taxa = (1 - (2.85 / 100))
        let resultado = valor * taxa
        msg.style.color = 'red'
        msg.innerHTML = `Cobrando ${moeda(valor)} <br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`
    }//Débito Elo e American - end
    //========================================TODOS OS DÉBITOS - END

    //========================================TODOS OS CRÉDITOS - START
    //Crédito Vencimento Visa e Master - Start
    else if (forma.value === 'CV' && receber && bandeira.value === 'VM') {
        const taxa = (1 - (3.95 / 100))
        let resultado = valor / taxa
        msg.style.color = 'green'
        msg.innerHTML = `Para receber ${moeda(valor)} <br>`
        msg.innerHTML += `Cobre ${moeda(resultado)}`
    } else if (forma.value === 'CV' && cobrar && bandeira.value === 'VM') {
        const taxa = (1 - (3.95 / 100))
        let resultado = valor * taxa
        msg.style.color = 'red'
        msg.innerHTML = `Cobrando ${moeda(valor)} <br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`
    }//Crédito Vencimento Visa e Master - Start

    // Crédito Vencimento Elo e American express - start
    else if (forma.value === 'CV' && receber && bandeira.value === 'EA') {
        const taxa = (1 - (5.14 / 100))
        let resultado = valor / taxa
        msg.style.color = 'green'
        msg.innerHTML = `Para receber ${moeda(valor)} <br>`
        msg.innerHTML += `cobre ${moeda(resultado)}`
    } else if (forma.value === 'CV' && cobrar && bandeira.value === 'EA') {
        const taxa = (1 - 5.14 / 100)
        let resultado = valor * taxa
        msg.style.color = 'red'
        msg.innerHTML = `Cobrando ${moeda(valor)} <br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`
    } // Crédito Vencimento Elo e American express - end
    //========================================TODOS OS CRÉDITOS - END

    //========================================PARCELAMENTOS -START
    //Visa e Master em 2x - start
    else if (forma.value === '2X' && receber && bandeira.value === 'VM') {
        const taxa = (1 - 7.99 / 100)
        let resultado = valor / taxa
        msg.style.color = 'green'
        msg.innerHTML = `Para receber ${moeda(valor)} <br>`
        msg.innerHTML += `Cobre ${moeda(resultado)}`
    } else if (forma.value === '2X' && cobrar && bandeira.value === 'VM') {
        const taxa = (1 - (7.99 / 100))
        let resultado = valor * taxa
        msg.style.color = 'red'
        msg.innerHTML = `Cobrando ${moeda(valor)} <br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`
    }// Visa e Master em 2x - end

    //Elo e American Express em 2x - start
    else if (forma.value === '2X' && receber && bandeira.value === 'EA') {
        const taxa = (1 - (9.38 / 100))
        let resultado = valor / taxa
        msg.style.color = 'green'
        msg.innerHTML = `Para receber ${moeda(valor)} <br>`
        msg.innerHTML += `Cobre ${moeda(resultado)}`
    } else if (forma.value === '2X' && cobrar && bandeira.value === 'EA') {
        const taxa = (1 - (9.38 / 100))
        let resultado = valor * taxa
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
    } else if (forma.value === '3X' && cobrar && bandeira.value === 'VM') {
        const taxa = (1 - (8.99 / 100))
        let resultado = valor * taxa
        msg.style.color = `red`
        msg.innerHTML = `Cobrando ${moeda(valor)} <br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`
    }// visa e master em 3x end

    //Elo e American Express em 3x - start
    else if (forma.value === '3X' && receber && bandeira.value === 'EA') {
        const taxa = (1 - (10.38 / 100))
        let resultado = valor / taxa
        msg.style.color = 'green'
        msg.innerHTML = `Para receber ${moeda(valor)} <br>`
        msg.innerHTML += `Cobre ${moeda(resultado)}`
    } else if (forma.value === '3X' && cobrar && bandeira.value === 'EA') {
        const taxa = (1 - (10.38 / 100))
        let resultado = valor * taxa
        msg.style.color = 'red'
        msg.innerHTML = `Cobrando ${moeda(valor)}<br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`
    }//Elo e American Express em 3x - end

    //Visa e Masterem 4x - Start
    else if (forma.value === '4X' && receber && bandeira.value === 'VM') {
        const taxa = (1 - (9.99 / 100))
        let resultado = valor / taxa
        msg.style.color = 'green'
        msg.innerHTML = `Para receber ${moeda(valor)} <br>`
        msg.innerHTML += `Cobre ${moeda(resultado)}`
    } else if (forma.value === '4X' && cobrar && bandeira.value === 'VM') {
        const taxa = (1 - (9.99 / 100))
        let resultado = valor * taxa
        msg.style.color = 'red'
        msg.innerHTML = `Cobrando ${moeda(valor)} <br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`
    }//Visa e Masterem 4x - end


    //Elo e American em 4x - Start
    else if (forma.value === '4X' && receber && bandeira.value === 'EA') {
        const taxa = (1 - (11.38 / 100))
        let resultado = valor / taxa
        msg.style.color = 'green'
        msg.innerHTML = `Para receber ${moeda(valor)} <br>`
        msg.innerHTML += `Cobre ${moeda(resultado)}`
    } else if (forma.value === '4X' && cobrar && bandeira.value === 'EA') {
        const taxa = (1 - (11.38 / 100))
        let resultado = valor * taxa
        msg.style.color = 'red'
        msg.innerHTML = `Cobrando ${moeda(valor)} <br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`
    }//Elo e American em 4x - End

    //Visa e Master em 5x - start
    else if (forma.value === '5X' && receber && bandeira.value === 'VM') {
        const taxa = (1 - (10.99 / 100))
        let resultado = valor / taxa
        msg.style.color = 'green'
        msg.innerHTML = `Para receber ${moeda(valor)} <br>`
        msg.innerHTML += `Cobre ${moeda(resultado)}`
    } else if (forma.value === '5X' && cobrar && bandeira.value === 'VM') {
        const taxa = (1 - (10.99 / 100))
        let resultado = valor * taxa
        msg.style.color = 'red'
        msg.innerHTML = `Cobrando ${moeda(valor)} <br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`
    }//Visa e Master em 5x - end

    //Elo e American em 5x - start
    else if (forma.value === '5X' && receber && bandeira.value === 'EA') {
        const taxa = (1 - (12.38 / 100))
        let resultado = valor / taxa
        msg.style.color = 'green'
        msg.innerHTML = `Para receber ${moeda(valor)} <br>`
        msg.innerHTML += `Cobre ${moeda(resultado)}`
    } else if (forma.value === '5X' && cobrar && bandeira.value === 'EA') {
        const taxa = (1 - (12.38 / 100))
        let resultado = valor * taxa
        msg.style.color = 'red'
        msg.innerHTML = `Cobrando ${moeda(valor)} <br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`
    } //Elo e American em 5x - end

    //Visa e Master em 6x - Start
    else if (forma.value === '6X' && receber && bandeira.value === 'VM') {
        const taxa = (1 - (11.99 / 100))
        let resultado = valor / taxa
        msg.style.color = 'green'
        msg.innerHTML = `Para receber ${moeda(valor)} <br>`
        msg.innerHTML += `Cobre ${moeda(resultado)}`
    } else if (forma.value === '6X' && cobrar && bandeira.value === 'VM') {
        const taxa = (1 - (11.99 / 100))
        let resultado = valor * taxa
        msg.style.color = 'red'
        msg.innerHTML = `Cobrando ${moeda(valor)} <br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`
    }//Visa e Master em 6x - End

    //Elo e American em 6x - Start
    else if (forma.value === '6X' && receber && bandeira.value === 'EA') {
        const taxa = (1 - (13.38 / 100))
        let resultado = valor / taxa
        msg.style.color = 'green'
        msg.innerHTML = `Para receber ${moeda(valor)} <br>`
        msg.innerHTML += `Cobre ${moeda(resultado)}`
    } else if (forma.value === '6X' && cobrar && bandeira.value === 'EA') {
        const taxa = (1 - (13.38 / 100))
        let resultado = valor * taxa
        msg.style.color = 'red'
        msg.innerHTML = `Cobrando ${moeda(valor)} <br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`
    }//Elo e American em 6x - End

    //Visa e Master em 7x - Start
    else if (forma.value === '7X' && receber && bandeira.value === 'VM') {
        const taxa = (1 - (12.99 / 100))
        let resultado = valor / taxa
        msg.style.color = 'green'
        msg.innerHTML = `Para receber ${moeda(valor)} <br>`
        msg.innerHTML += `Cobre ${moeda(resultado)}`
    } else if (forma.value === '7X' && cobrar && bandeira.value === 'VM') {
        const taxa = (1 - (12.99 / 100))
        let resultado = valor * taxa
        msg.style.color = 'red'
        msg.innerHTML = `Cobrando ${moeda(valor)} <br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`
    }// Visa e Master em 7x - End

    //Elo e American em 7x - Start 
    else if (forma.value === '7X' && receber && bandeira.value === 'EA') {
        const taxa = (1 - (14.38 / 100))
        let resultado = valor / taxa
        msg.style.color = 'green'
        msg.innerHTML = `Para receber ${moeda(valor)} <br>`
        msg.innerHTML += `Cobre ${moeda(resultado)}`
    } else if (forma.value === '7X' && cobrar && bandeira.value === 'EA') {
        const taxa = (1 - (14.38 / 100))
        let resultado = valor * taxa
        msg.style.color = 'red'
        msg.innerHTML = `Cobrando ${moeda(valor)} <br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`
    }//Elo e American em 7x - End

    // Visa e Master em 8x - Start
    else if (forma.value === '8X' && receber && bandeira.value === 'VM') {
        const taxa = (1 - (13.99 / 100))
        let resultado = valor / taxa
        msg.style.color = 'green'
        msg.innerHTML = `Para receber ${moeda(valor)} <br>`
        msg.innerHTML += `Cobre ${moeda(resultado)}`
    } else if (forma.value === '8X' && cobrar && bandeira.value === 'VM') {
        const taxa = (1 - (13.99 / 100))
        let resultado = valor * taxa
        msg.style.color = 'red'
        msg.innerHTML = `Cobrando ${moeda(valor)} <br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`
    }//Visa e Master em 8x - End

    // Elo e American em 8x - Start
    else if (forma.value === '8X' && receber && bandeira.value === 'EA') {
        const taxa = (1 - (15.38 / 100))
        let resultado = valor / taxa
        msg.style.color = 'green'
        msg.innerHTML = `Para receber ${moeda(valor)} <br>`
        msg.innerHTML += `Cobre ${moeda(resultado)}`
    } else if (forma.value === '8X' && cobrar && bandeira.value === 'EA') {
        const taxa = (1 - (15.38 / 100))
        let resultado = valor * taxa
        msg.style.color = 'red'
        msg.innerHTML = `Cobrando ${moeda(valor)} <br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`
    }//Elo e American em 8x - End

    //Visa e Master em 9X - Start
    else if (forma.value === '9X' && receber && bandeira.value === 'VM') {
        const taxa = (1 - (14.99 / 100))
        let resultado = valor / taxa
        msg.style.color = 'green'
        msg.innerHTML = `Para receber ${moeda(valor)} <br>`
        msg.innerHTML += `Cobre ${moeda(resultado)}`
    } else if (forma.value === '9X' && cobrar && bandeira.value === 'VM') {
        const taxa = (1 - (14.99 / 100))
        let resultado = valor * taxa
        msg.style.color = 'red'
        msg.innerHTML = `Cobrando ${moeda(valor)} <br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`
    }// Visa e Master em 9x - End

    //Elo e American em 9x - Start
    else if (forma.value === '9X' && receber && bandeira.value === 'EA') {
        const taxa = (1 - (16.38 / 100))
        let resultado = valor / taxa
        msg.style.color = 'green'
        msg.innerHTML = `Para receber ${moeda(valor)} <br>`
        msg.innerHTML += `Cobre ${moeda(resultado)}`
    } else if (forma.value === '9X' && cobrar && bandeira.value === 'EA') {
        const taxa = (1 - (16.38 / 100))
        let resultado = valor * taxa
        msg.style.color = 'red'
        msg.innerHTML = `Cobrando ${moeda(valor)} <br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`
    }//Elo e American em 9x - End

    //Visa e Master em 10x - Start
    else if (forma.value === '10X' && receber && bandeira.value === 'VM') {
        const taxa = (1 - (14.99 / 100))
        let resultado = valor / taxa
        msg.style.color = 'green'
        msg.innerHTML = `Para receber ${moeda(valor)} <br>`
        msg.innerHTML += `Cobre ${moeda(resultado)}`
    } else if (forma.value === '10X' && cobrar && bandeira.value === 'VM') {
        const taxa = (1 - (14.99 / 100))
        let resultado = valor * taxa
        msg.style.color = 'red'
        msg.innerHTML = `Cobrando ${moeda(valor)} <br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`
    }//Visa em Master em 10x - End

    //Elo e American em 10x - Start
    else if (forma.value === '10X' && receber && bandeira.value === 'EA') {
        const taxa = (1 - (16.38 / 100))
        let resultado = valor / taxa
        msg.style.color = 'green'
        msg.innerHTML = `Para receber ${moeda(valor)} <br>`
        msg.innerHTML += `Cobre ${moeda(resultado)}`
    } else if (forma.value === '10X' && cobrar && bandeira.value === 'EA') {
        const taxa = (1 - (16.38 / 100))
        let resultado = valor * taxa
        msg.style.color = 'red'
        msg.innerHTML = `Cobrando ${moeda(valor)} <br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`
    }//Elo e American em 10x - End

    //Visa e Master em 11x - Start
    else if (forma.value === '11X' && receber && bandeira.value === 'VM') {
        const taxa = (1 - (15.49 / 100))
        let resultado = valor / taxa
        msg.style.color = 'green'
        msg.innerHTML = `Para receber ${moeda(valor)} <br>`
        msg.innerHTML += `Cobre ${moeda(resultado)}`
    } else if (forma.value === '11X' && cobrar && bandeira.value === 'VM') {
        const taxa = (1 - (15.49 / 100))
        let resultado = valor * taxa
        msg.style.color = 'red'
        msg.innerHTML = `Cobrando ${moeda(valor)} <br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`
    }// Visa e Master em 11x - End

    //Elo e American em 11x - Start
    else if (forma.value === '11X' && receber && bandeira.value === 'EA') {
        const taxa = (1 - (16.88 / 100))
        let resultado = valor / taxa
        msg.style.color = 'green'
        msg.innerHTML = `Para receber ${moeda(valor)} <br>`
        msg.innerHTML += `Cobre ${moeda(resultado)}`
    } else if (forma.value === '11X' && cobrar && bandeira.value === 'EA') {
        const taxa = (1 - (16.88 / 100))
        let resultado = valor * taxa
        msg.style.color = 'red'
        msg.innerHTML = `Cobrando ${moeda(valor)} <br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`
    }//Elo e American em 11x - End

    //Visa e Master em 12x - Start (finalmente)
    else if (forma.value === '12X' && receber && bandeira.value === 'VM') {
        const taxa = (1 - (15.49 / 100))
        let resultado = valor / taxa
        msg.style.color = 'green'
        msg.innerHTML = `Para receber ${moeda(valor)} <br>`
        msg.innerHTML += `Cobre ${moeda(resultado)}`
    } else if (forma.value === '12X' && cobrar && bandeira.value === 'VM') {
        const taxa = (1 - (15.49 / 100))
        let resultado = valor * taxa
        msg.style.color = 'red'
        msg.innerHTML = `Cobrando ${moeda(valor)} <br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`
    }//Visa e Master em 12x - End

    //Elo e American em 12x - Start
    else if (forma.value === '12X' && receber && bandeira.value === 'EA') {
        const taxa = (1 - (16.88 / 100))
        let resultado = valor / taxa
        msg.style.color = 'green'
        msg.innerHTML = `Para receber ${moeda(valor)} <br>`
        msg.innerHTML += `Cobre ${moeda(resultado)}`
    } else if (forma.value === '12X' && cobrar && bandeira.value === 'EA') {
        const taxa = (1 - (16.88 / 100))
        let resultado = valor * taxa
        msg.style.color = 'red'
        msg.innerHTML =`Cobrando ${moeda(valor)} <br>`
        msg.innerHTML += `Você receberá ${moeda(resultado)}`
    }// Elo e American em 12x - End
}

//função auxiliar
function moeda(valor) {// função para formatar os números da formula principal
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
}