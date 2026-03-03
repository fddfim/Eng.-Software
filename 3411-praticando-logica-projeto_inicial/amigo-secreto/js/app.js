let listaAmigos = [];

function adicionar() {
    //Recuperar o nome das pessoas
    let nomeDoAmigo = document.getElementById('nome-amigo').value;
    //Adicionar o nome das pessoas em uma lista
    listaAmigos.push(nomeDoAmigo);
    //Fazer a lista ser exibida em "amigos incluidos"
    let amigosIncluidos = document.getElementById('lista-amigos');
    amigosIncluidos.innerHTML = listaAmigos.join(', ');

    document.getElementById('nome-amigo').value= '';
}

function sortear() {
    embaralhar(listaAmigos);
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';

    if (listaAmigos.length < 2) {
        alert('Adicione no minimo mais um jogador.');
    } else {
        for (let i = 0; i < listaAmigos.length; i++) {

            if(i == listaAmigos.length - 1) {
                sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] + ' --> ' + listaAmigos[0] + '<br>';
            } else {
                sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] + ' --> ' + listaAmigos[i + 1] + '<br>';
            }
        }
    }
}

function embaralhar(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }
}

function reiniciar() {
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
    listaAmigos = [];
}