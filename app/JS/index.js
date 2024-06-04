// menu hamburger
const hamburger = document.querySelector('#hamburger');
const navLinks = document.querySelector('#nav-links')
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('menu');
})

// Caroussel 
function next() {
    const widthSlider = document.querySelector('.slider').offsetWidth;
    const sliderContent = document.querySelector('.slider_content');
    sliderContent.scrollLeft += widthSlider;
    const scrollLeft = sliderContent.scrollLeft;
    const itemsSlider = sliderContent.querySelectorAll('.slider_content_item');

    if (scrollLeft === widthSlider * (itemsSlider.length -2)){
        document.querySelector('.slider_nav_button_next').style.display="none";
    }else {
        document.querySelector('.slider_nav_button_prev').style.display="block";
    }
}

function previous() {
    const widthSlider = document.querySelector('.slider').offsetWidth;
    const sliderContent = document.querySelector('.slider_content');
    sliderContent.scrollLeft -= widthSlider;
    const scrollLeft = sliderContent.scrollLeft;
    const itemsSlider = sliderContent.querySelectorAll('.slider_content_item');

    if (scrollLeft === widthSlider) {
        document.querySelector('.slider_nav_button_prev').style.display="none";
    }else {
        document.querySelector('.slider_nav_button_next').style.display="block";
    }
}

const nextButton = document.querySelector('#next');
nextButton.addEventListener('click', () => {
    next();
})

const previousButton = document.querySelector('#previous');
previousButton.addEventListener('click', () => {
    previous();
})
