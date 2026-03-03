function comprar() {

    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    let pistaDisponivel = parseInt(document.getElementById('qtd-pista').innerText);
    let superiorDisponivel = parseInt(document.getElementById('qtd-superior').innerText);
    let inferiorDisponivel = parseInt(document.getElementById('qtd-inferior').innerText);

    if (tipoIngresso === 'pista') {
        if (quantidade > pistaDisponivel) {
            alert('Quantidade indisponivel.');
            return;
        }
        pistaDisponivel -= quantidade;
        document.getElementById('qtd-pista').innerText = pistaDisponivel;
    } else if (tipoIngresso === 'superior') {
        if (quantidade > superiorDisponivel) {
            alert('Quantidade indisponivel.');
            return;
        }
        superiorDisponivel -= quantidade;
        document.getElementById('qtd-superior').innerText = superiorDisponivel;
    } else {
        if (quantidade > inferiorDisponivel) {
            alert('Quantidade indisponivel.');
            return;
        }
        inferiorDisponivel -= quantidade;
        document.getElementById('qtd-inferior').innerText = inferiorDisponivel;
    }
}
