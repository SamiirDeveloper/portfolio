document.addEventListener('DOMContentLoaded', function () {
    const carouselElement = document.querySelector('#projectCarousel');
    if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
            interval: 3000,
            wrap: true
        });

    }
});