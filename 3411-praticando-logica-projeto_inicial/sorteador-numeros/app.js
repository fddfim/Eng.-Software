function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let aparecerNumerosSorteados = document.getElementById('resultado');
    let sorteados = [];
    let numeroOuNumeros = quantidade > 1 ? "Números sorteados" : "Número sorteado";

    if (quantidade > ate) {
        aparecerNumerosSorteados.innerHTML = `<label class="texto__paragrafo">Quantidade de números para sortear maior que os possiveis números.</label>`
    } else {

        for (let i =0; i < quantidade; i++){
            let numero = obterNumeroAleatorio(de, ate);
            
            while (sorteados.includes(numero)) {
                numero = obterNumeroAleatorio(de, ate);
            }
            
            sorteados.push(numero);
        }
        sorteados.sort((a, b) => a - b);
        aparecerNumerosSorteados.innerHTML = `<label class="texto__paragrafo">${numeroOuNumeros}:  ${sorteados.join(", ")}</label>`
    } 
    alterarStatusBotao();
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');  
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }   
}
