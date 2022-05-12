let resultado = document.getElementById('resultado')
let aleatorios = document.getElementById('aleatorios')

function play() {
    let audio = document.getElementById('roll');
    audio.play();
}

function d4() {
    
    let d4 = Math.ceil(Math.random() * 4);

    let aleatorios = document.getElementById('aleatorios').innerHTML = 'RESULTADO';
    resultado.innerHTML = d4;
    play();
}

function d6() {
    
    let d6 = Math.ceil(Math.random() * 6);

    let aleatorios = document.getElementById('aleatorios').innerHTML = 'RESULTADO';
    resultado.innerHTML = d6;
    play();
}

function d8() {
    
    let d8 = Math.ceil(Math.random() * 8);

    let aleatorios = document.getElementById('aleatorios').innerHTML = 'RESULTADO';
    resultado.innerHTML = d8;
    play();
}

function d10() {
    
    let d10 = Math.ceil(Math.random() * 10);

    let aleatorios = document.getElementById('aleatorios').innerHTML = 'RESULTADO';
    resultado.innerHTML = d10;
    play();
}

function d12() {
    
    let d12 = Math.ceil(Math.random() * 12);

    let aleatorios = document.getElementById('aleatorios').innerHTML = 'RESULTADO';
    resultado.innerHTML = d12;
    play();
}

function d20() {
    
    let d20 = Math.ceil(Math.random() * 20);

    let aleatorios = document.getElementById('aleatorios').innerHTML = 'RESULTADO';
    resultado.innerHTML = d20;
    play();
}

function d100() {
    
    let d100 = Math.ceil(Math.random() * 100);

    let aleatorios = document.getElementById('aleatorios').innerHTML = 'RESULTADO';
    resultado.innerHTML = d100;
    play();
}