const slides = document.getElementsByClassName('slide');
const slides_div = document.querySelector('.slides');
const number_slides = slides.length;
let width = number_slides * 100;
let curSlide = 1;
console.log(width);
slides_div.style.width = `${width}%`;
console.log(slides);
setInterval(() => {
    if (curSlide == 1) {
        slides[0].style.transform = `translateX(-${100}%)`
        slides[1].style.transform = `translateX(-100%)`;
        curSlide = 0;
    }
    else {
        slides[0].style.transform =
            `translateX(${0}%)`;
        slides[1].style.transform =
            `translateX(${0}%)`;
        curSlide = 1;
    }
}, 5000);

const checkbox = document.getElementById('checkbox');
const bottomNav = document.querySelector('.bottom-nav');
const windowWidth = window.innerWidth;
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        if (windowWidth <= 850) {
            bottomNav.style.height = "auto";
        }
        bottomNav.classList.add('height');
        bottomNav.classList.remove('display');
    } else {
        bottomNav.classList.remove('height');
        bottomNav.classList.add('display');
    }
});
