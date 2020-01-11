const slider = [
    {
        img: "img/dolomity.jpg",
        text: "Pierwszy tekst",
    },
    {
        img: "img/landscape.jpg",
        text: "Drugi tekst",
    },
    {
        img: "img/mountains.jpg",
        text: "Trzeci tekst",
    }
];

const slide = document.querySelector('.slider img');
const txt = document.querySelector('.slider h1');
const line = [...document.querySelectorAll('.line span')];
let number = 0;

const changeLine = function() {
    const index = line.findIndex(a => a.classList.contains('active'));
    line[index].classList.remove('active');
    line[number].classList.add('active');
}

const changeSlide = function() {
    if(number == slider.length) {
        number = 0;
    }
    slide.src = slider[number].img;
    txt.textContent = slider[number].text;
    changeLine();
    number++;
    
}

setInterval(changeSlide, 2000);