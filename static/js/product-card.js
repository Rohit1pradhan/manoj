// Initialize slide index
let currentSlide = 0;
const slides = document.querySelectorAll('.image-slide');

// Show next slide function
function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
    updateSlidePosition();
}

// Show previous slide function
function showPrevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop back to the last slide
    updateSlidePosition();
}

// Update position of slides based on currentSlide index
function updateSlidePosition() {
    const offset = -currentSlide * 100; // Each slide takes up 100% of container
    slides.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`;
    });
}

// Auto slide every 5 seconds
setInterval(showNextSlide, 5000);

// Add navigation arrows for manual control
document.querySelector('.image-slider').innerHTML += `
    <button class="arrow-button left" onclick="showPrevSlide()">&#9664;</button>
    <button class="arrow-button right" onclick="showNextSlide()">&#9654;</button>
`;

updateSlidePosition();
