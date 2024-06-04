// Animation apparition container 1
const slidingContainerAbout1 = document.querySelector('.container');

window.addEventListener('scroll', () => {
    const {scrollTop, clientHeight} = document.documentElement;
    const topElementToTopViewport = slidingContainerAbout1.getBoundingClientRect().top;

    if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.60) {
        slidingContainerAbout1.classList.add('active');
    }else if (scrollTop < (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.40){
        slidingContainerAbout1.classList.remove('active');
    }
})

// Animation apparition container 2
const slidingContainerAbout2 = document.querySelector('.container2');

window.addEventListener('scroll', () => {
    const {scrollTop, clientHeight} = document.documentElement;
    const topElementToTopViewport = slidingContainerAbout2.getBoundingClientRect().top;

    if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.50) {
        slidingContainerAbout2.classList.add('active');
    }else if (scrollTop < (scrollTop + topElementToTopViewport).toFixed() + clientHeight * 0.50){
        slidingContainerAbout2.classList.remove('active');
    }
})