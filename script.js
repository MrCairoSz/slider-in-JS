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
const arrowLeft = document.querySelector('.fa-chevron-left');
const arrowRight = document.querySelector('.fa-chevron-right');
let number = 0;
const time =2000;
let indexInterval;

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

indexInterval = setInterval(changeSlide, time);

line.forEach((a,index) => a.addEventListener('click', function(){
  clearInterval(indexInterval);
  slide.src = slider[index].img; 
  txt.textContent = slider[index].text; 
  
  const numActive = line.findIndex(a => a.classList.contains('active'));
  line[numActive].classList.remove('active');
  this.classList.add('active');
  indexInterval = setInterval(changeSlide,time);
}));

const previousSlide = function() {
    if(number === 0) {
        number = 3;
    }
    number--;
    clearInterval(indexInterval);
    slide.src = slider[number].img;
    txt.textContent = slider[number].text;
    indexInterval = setInterval(changeSlide, time);
    changeLine();
}

const nextSlide = function() {
    if(number === 2) {
        number = -1;
    }
    number++;
    clearInterval(indexInterval);
    slide.src = slider[number].img;
    txt.textContent = slider[number].text;
    indexInterval = setInterval(changeSlide, time);
    changeLine();
}

arrowLeft.addEventListener('click', previousSlide);
arrowRight.addEventListener('click', nextSlide);