const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const slideWidth = carousel.querySelector('.product').offsetWidth;
const numVisibleSlides = 5;
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > carousel.children.length - numVisibleSlides) {
        currentIndex = 0;
    }
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = carousel.children.length - numVisibleSlides;
    }
    updateCarousel();
});

function updateCarousel() {
    const translateX = -currentIndex * slideWidth;
    carousel.style.transform = `translateX(${translateX}px)`;
}

// Initialize the carousel to show the first 5 products
updateCarousel();
