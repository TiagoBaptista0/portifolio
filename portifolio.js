const portfolioCarousel = document.querySelector('.portfolio-carousel');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const portfolioPrev = document.querySelector('.portfolio-prev');
const portfolioNext = document.querySelector('.portfolio-next');

let currentIndex = 0;
const itemWidth = portfolioItems[0].offsetWidth;

function showPortfolioItem(index) {
    portfolioCarousel.style.transform = `translateX(-${index * itemWidth}px)`;
}

portfolioPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;
    showPortfolioItem(currentIndex);
});

portfolioNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % portfolioItems.length;
    showPortfolioItem(currentIndex);
});

// Inicializa o primeiro item do portfólio
showPortfolioItem(currentIndex);