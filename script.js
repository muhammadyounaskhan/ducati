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
/*
#<=====================================================>
#                 FLOATED NAVIGATION
#<=====================================================>
*/
const checkbox = document.getElementById('checkbox');
const bottomNav = document.querySelector('.bottom-nav');
const floatedNav = document.getElementById('floatedNav');
const overlay = document.getElementById('overlay-body');

const windowWidth = window.innerWidth;
checkbox.addEventListener('change', () => {
    if (bottomNav) {

        bottomNav.classList.toggle('height');
        /*#<============[Overlay Activation Code]============>#*/
        overlay.classList.toggle('show');
    }
});
overlay.addEventListener('click', () => {
    overlay.classList.toggle('show');
    checkbox.checked = false;
    bottomNav.classList.toggle('height');
})

/*
#<=====================================================>
#                 Registeration Overlay
#<=====================================================>
*/
const myducati = document.querySelector('.my-ducati');
const RegisterationPanel = document.querySelector('.registeration_panel');
myducati.addEventListener('click', () => {
    overlay.classList.toggle('show');
    overlay.classList.toggle('z-index');
    RegisterationPanel.classList.toggle('show');
})
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

/*
#<=====================================================>
#                 Shopping Card JavaScript
#<=====================================================>
*/

const circularButtons = document.getElementsByClassName('circular-button');
const closeBtn = document.querySelector('.icon-1');
const shopCard = document.querySelector('.shop-card');
closeBtn.addEventListener('click', () => {
    shopCard.classList.add('hidden');
});
Array.from(circularButtons).forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent == '+') {
            button.textContent = '-';
            shopCard.classList.remove('hidden');
        } else {
            button.textContent = "+";
            shopCard.classList.add('hidden');
        }
    });
});

/*
#<=====================================================>
#                 LINKS HOVER JAVASCRIPT
#<=====================================================>
*/

