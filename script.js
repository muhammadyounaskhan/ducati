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
            console.log(windowWidth);
        } else if (windowWidth > 850) {
            bottomNav.style.height = "6.5rem";
            console.log(windowWidth);
        }
        bottomNav.classList.remove('display');
    } else {
        bottomNav.classList.add('display');
    }
});

/*
#<=====================================================>
#                 TESTIMONIAL SECTION CODE
#<=====================================================>
*/
//#<============[Variables]============>#
const testimonial1 = document.getElementById("testimonial-1");
const wrapper1 = document.getElementById("wrapper-1");
const wrapper2 = document.getElementById("wrapper-2");
const dot1 = document.getElementsByClassName("dot")[0];
const dot2 = document.getElementsByClassName("dot")[1];
//#<============[function]============>#
function change() {
    wrapper1.classList.toggle('hidden');
    wrapper2.classList.toggle('hidden');
    dot1.classList.toggle('dot-filled');
    dot2.classList.toggle('dot-filled');
}
setInterval(() => {
    const width = innerWidth;
    if (width > 956) {
        wrapper1.classList.toggle('hidden');
        wrapper2.classList.toggle('hidden');
        dot1.classList.toggle('dot-filled');
        dot2.classList.toggle('dot-filled');
    }

}, 5000);


dot1.addEventListener('click', () => {
    change();
});
dot2.addEventListener('click', () => {
    change();
});

