document.addEventListener('DOMContentLoaded', () => {
    initializeSlider();
});

function initializeSlider() {
    const next = document.querySelector('.btn--next');
    const prev = document.querySelector('.btn--prev');
    const sliders = document.querySelectorAll('.header-slider img');
    const indicators = document.querySelectorAll('.indicator');

    let currentIndex = 0;
    let timer;

    const updateSlide = (index) => {
        sliders.forEach((slide, idx) => {
            slide.style.opacity = idx === index ? '1' : '0';
        });
        indicators.forEach((indicator, idx) => {
            indicator.classList.toggle('active', idx === index);
        });
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % sliders.length;
        updateSlide(currentIndex);
        resetAutoplay();
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + sliders.length) % sliders.length;
        updateSlide(currentIndex);
        resetAutoplay();
    };

    const jumpToSlide = (index) => {
        currentIndex = index;
        updateSlide(currentIndex);
        resetAutoplay();
    };

    const autoplay = () => {
        timer = setTimeout(nextSlide, 3000);
    };

    const resetAutoplay = () => {
        clearTimeout(timer);
        autoplay();
    };

    // Event Listeners
    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => jumpToSlide(index));
    });

    document.querySelector('.header-sliders').addEventListener('mouseover', () => clearTimeout(timer));
    document.querySelector('.header-sliders').addEventListener('mouseout', autoplay);

    // Initialize slider
    updateSlide(currentIndex);
    autoplay();
}