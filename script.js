const slides = document.getElementsByClassName('slide');
const slides_div = document.querySelector('.slides');
const number_slides = slides.length;
let width = number_slides * 100;
let curSlide = 1;
console.log(width);
slides_div.style.width = `${width}%`;
console.log(slides);
setInterval(() => {
    if (curSlide < number_slides) {
        slides[curSlide].style.transform = `translateX(-${curSlide * 100}%)`
        curSlide += 1;
    }
    else {
        slides[curSlide - 1].style.transform =
            `translateX(${100}%)`;
        curSlide -= 1;
    }
}, 5000);