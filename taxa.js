const botao = document.querySelector('#btncalc');
botao.addEventListener('click', calcular);

const campo = {
    tipo: document.getElementsByName('tipo'),
    forma: document.querySelector('#iforma'),
    bandeira: document.querySelector('#ibandeira'),
    msg: document.querySelector('#res'),
    caixa: document.querySelector('#ivalor'),
};

// Tabela de taxas: fonte única de verdade.
// Trocar um valor aqui é a única manutenção que esse sistema vai precisar.
const taxas = {
    DE:  { VM: 1.66, EA: 2.85 },
    CV:  { VM: 3.95, EA: 5.14 },
    '2X':  { VM: 7.99,  EA: 9.38 },
    '3X':  { VM: 8.99,  EA: 10.38 },
    '4X':  { VM: 9.99,  EA: 11.38 },
    '5X':  { VM: 10.99, EA: 12.38 },
    '6X':  { VM: 11.99, EA: 13.38 },
    '7X':  { VM: 12.99, EA: 14.38 },
    '8X':  { VM: 13.99, EA: 15.38 },
    '9X':  { VM: 14.99, EA: 16.38 },
    '10X': { VM: 14.99, EA: 16.38 },
    '11X': { VM: 15.49, EA: 16.88 },
    '12X': { VM: 15.49, EA: 16.88 },
};

function calcular() {
    const valor = Number(campo.caixa.value); // lido AGORA, no clique
    const forma = campo.forma.value;
    const bandeira = campo.bandeira.value;
    const receber = campo.tipo[1].checked; // se não for "receber", é "cobrar" (são mutuamente exclusivos)

    campo.msg.innerHTML = '';

    if (valor <= 0 || isNaN(valor)) {
        campo.msg.style.color = 'orange';
        campo.msg.innerHTML = '[ERRO]: Adicione um valor';
        return; // corta a execução aqui, sem precisar de encadear else
    }

    const porcentagem = taxas[forma]?.[bandeira];

    if (porcentagem === undefined) {
        campo.msg.style.color = 'orange';
        campo.msg.innerHTML = '[ERRO]: Combinação de forma/bandeira inválida';
        return;
    }

    const taxa = 1 - porcentagem / 100;

    if (receber) {
        const resultado = valor / taxa;
        campo.msg.style.color = 'green';
        campo.msg.innerHTML = `Para receber ${moeda(valor)} <br>Cobre ${moeda(resultado)}`;
    } else {
        const resultado = valor * taxa;
        campo.msg.style.color = 'red';
        campo.msg.innerHTML = `Cobrando ${moeda(valor)} <br>Você receberá ${moeda(resultado)}`;
    }
}

function moeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}