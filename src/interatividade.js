// coleta de informações para as alterações //
const card1 = document.querySelector('#card1');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');
const card4 = document.querySelector('#card4');
const card5 = document.querySelector('#card5');
const card6 = document.querySelector('#card6');
const fundo = document.querySelector('.page');
const txtHeader = document.querySelector('.cabecalho');
const tituloName = document.querySelector('.nome');

// coleta de informações dos botões // 
const back = document.querySelector('#btn-voltar');
const next = document.querySelector('#btn-avancar');

// item inicial e depois a quantidade de itens //
var item = 1;
var totalItens = 6;

// função responsavel por fazer as alteraçoes //
function visivel(inicio) {

    card1.style.display = 'none';
    card2.style.display = 'none';
    card3.style.display = 'none';
    card4.style.display = 'none';
    card5.style.display = 'none';
    card6.style.display = 'none';

    if (inicio == 1 ) {
        card1.style.display = 'block';
        fundo.style.backgroundImage = 'url(../src/img/fundo001-003.jfif)';
        txtHeader.innerHTML = 'Pokémon de Planta';
        txtHeader.style.color = 'rgb(9, 255, 0)';
    } else if (inicio == 2 ) {
        card2.style.display = 'block';
    } else if (inicio == 3 ) {
        card3.style.display = 'block';
        fundo.style.backgroundImage = 'url(../src/img/fundo001-003.jfif)';
        txtHeader.innerHTML = 'Pokémon de Planta';
        txtHeader.style.color = 'rgb(9, 255, 0)';
    } else if (inicio == 4 ) {
        card4.style.display = 'block';
        fundo.style.backgroundImage = 'url(../src/img/fundo004-006.jpg)';
        txtHeader.innerHTML = 'Pokémon de Fogo';
        txtHeader.style.color = 'rgb(248, 98, 11)';
    } else if (inicio == 5 ) {
        card5.style.display = 'block';
    } else if (inicio == 6 ) {
        card6.style.display = 'block';
        fundo.style.backgroundImage = 'url(../src/img/fundo004-006.jpg)';
        txtHeader.innerHTML = 'Pokémon de Fogo';
        txtHeader.style.color = 'rgb(248, 98, 11)';
    }
}

// percorrer os itens voltando//
function voltar() {
    item--;
    if (item < 1) {
        item = totalItens;
    }
    visivel(item);
}

// percorrer os itens indo//
function proxima() {
    item++;
    if (item > totalItens) {
        item = 1;
    }
    visivel(item);
}

// evento de click chamando as funções de ida ou volta //
back.addEventListener('click', voltar);
next.addEventListener('click', proxima);

