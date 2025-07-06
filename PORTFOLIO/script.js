document.addEventListener('DOMContentLoaded', function () {
    const carouselElement = document.querySelector('#projectCarousel');
    if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
            interval: 2000,
            wrap: true
        });

    }
});

document.addEventListener('DOMContentLoaded', () => {
  const scrollBtn = document.getElementById('scrollToTopBtn');

  // Show or hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = 'block';
      scrollBtn.style.opacity = '1';
    } else {
      scrollBtn.style.opacity = '0';
      // Optional: hide after fade out
      setTimeout(() => {
        if (window.scrollY <= 300) scrollBtn.style.display = 'none';
      }, 300);
    }
  });

  // Scroll smoothly to top on click
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});

