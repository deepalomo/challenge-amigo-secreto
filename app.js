//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let copiaAmigos = [];

// Carregar lista de amigos do localStorage ao carregar a página
window.onload = function() {
    if (localStorage.getItem('amigos')) {
        amigos = JSON.parse(localStorage.getItem('amigos'));
        atualizarLista();
    }
}

function adicionarAmigo(){
    let inputAmigo = document.getElementById('amigo');
    let nomeAmigo = inputAmigo.value;

    if (nomeAmigo === ''){
        alert('Digite o nome do amigo!');
        return;
    }
    amigos.push(nomeAmigo);
    inputAmigo.value = '';
    inputAmigo.focus();
    atualizarLista();

    // Salvar lista de amigos no localStorage
    localStorage.setItem('amigos', JSON.stringify(amigos));
}

function atualizarLista(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
            
    for (let i = 0; i < amigos.length; i++){
        let nome = document.createElement("li");
        nome.textContent = amigos[i];
        listaAmigos.appendChild(nome);
    }
}

function limparLista(){
    localStorage.removeItem('amigos');
    amigos = [];
    atualizarLista();
}

function sortearAmigo(nomeSorteador){
    if (amigos.length === 0){
        alert('Nenhum amigo adicionado!');
        return;
    }

    // Se a cópia da lista estiver vazia, cria uma nova cópia
    if (copiaAmigos.length === 0) {
        copiaAmigos = [...amigos];
    }

    let amigoSorteado;
    let indiceSorteado;

    // Garante que o amigo sorteado não seja o próprio sorteador
    do {
        indiceSorteado = Math.floor(Math.random() * copiaAmigos.length);
        amigoSorteado = copiaAmigos[indiceSorteado];
    } while (amigoSorteado == nomeSorteador);

    alert(O amigo sorteado é: ${amigoSorteado});

    // Remover o amigo sorteado da lista de cópia
    copiaAmigos.splice(indiceSorteado, 1);

    // Verificar se todos os amigos já foram sorteados e limpa a lista
    if (copiaAmigos.length === 0) {
        alert('Todos os amigos já foram sorteados!');
        limparLista();
        resetarSorteio();
    }
}

function resetarSorteio() {
    copiaAmigos = [];
    alert('A lista do sorteio foi resetada');
}
