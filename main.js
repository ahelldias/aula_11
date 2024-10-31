const imgDog = document.getElementById('dog');
const ButImg = document.getElementById('b1');
const Img1 = './dog.jpeg';
const Img2 = './Vert.png';

let isImg1 = true;

ButImg.addEventListener('click', () => {
    if(isImg1) {
        imgDog.src = Img2;
    } else {
        imgDog.src = Img1;
    }

    isImg1 = !isImg1;
});

const Tit = document.querySelector('h1');
const ButTit = document.getElementById('b2');

ButTit.addEventListener('click', () => {
    Tit.innerHTML = 'olutiT';
});

const cor = document.querySelector('p');
const ButPar = document.getElementById('b3');

ButPar.addEventListener('click', () => {
    cor.style.color = 'blue';
});

const Aud = new Audio('./mario.wav');
const ButAud = document.getElementById('b4');

ButAud.addEventListener('click', () => {
    Aud.play();
});

const ButBut = document.getElementById('b5');
const ButAlt1 = document.getElementById('b6');
const ButAlt2 = document.getElementById('b7');

ButBut.addEventListener('click', () => {
    ButBut.classList.toggle('butaoNovo');
    ButAlt1.classList.toggle('butaoNovo');
    ButAlt2.classList.toggle('butaoNovo');
});

