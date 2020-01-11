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
let number = 0;

const changeSlide = function() {
    if(number == slider.length) {
        number = 0;
    }
    slide.src = slider[number].img;
    txt.textContent = slider[number].text;
    number++;
}

setInterval(changeSlide, 2000);