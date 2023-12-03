let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.news-item');
    
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.news-item');
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    const slides = document.querySelectorAll('.news-item');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Mostrar la primera diapositiva al cargar la página
showSlide(currentSlide);
