// Selecting Elements
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const indicators = document.querySelectorAll('.bar');

// Setting Current Index
let index = 0;

// Event Listener on Prev Button

prev.addEventListener('click', prevSlide);

// Event Listener on Next Button
next.addEventListener('click', nextSlide);

// Next Slide Function
function nextSlide() {
    if(index === slides.length - 1) {
        index = 0;
    } else {
        index++;
    }
    changeSlide();
    changeIndicator();
}

// Previous Slide Function
function prevSlide() {
    if(index === 0) {
        index = slides.length - 1;
    } else {
        index--;
    }
    changeSlide();
    changeIndicator();
}

// Change Slide Function
function changeSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    })
    slides[index].classList.add('active');
}

// Change Indicator Function
function changeIndicator() {
    indicators.forEach(i => {
        i.classList.remove('active');
    })
    indicators[index].classList.add('active');
}

// Autoplay Function

setInterval(nextSlide, 5000);