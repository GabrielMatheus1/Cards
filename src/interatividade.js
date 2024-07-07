const card1 = document.querySelector('#card1');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');

const back = document.querySelector('#btn-voltar');
const next = document.querySelector('#btn-avancar');

var item = 1;
var totalIntens = 3;

function visivel(inicio) {

    card1.style.display = 'none';
    card2.style.display = 'none';
    card3.style.display = 'none';
    
    if (inicio === 1 ) {
        card1.style.display = 'block';
    } else if (inicio === 2 ) {
        card2.style.display = 'block';
    } else if (inicio === 3 ) {
        card3.style.display = 'block';
    }
   
}

function voltar() {
    item--;
    if (item < 1) {
        item = totalIntens;
    }
    visivel(item);
}

function proxima() {
    item++;
    if (item > totalIntens) {
        item = 1;
    }
    visivel(item);
}

back.addEventListener('click', voltar);
next.addEventListener('click', proxima);