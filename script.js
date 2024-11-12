const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[currentSlide].classList.add('active');   

}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide();
}

setInterval(nextSlide, 3000); // Cambia cada 3 segundos
showSlide(); // Mostrar la primera imagen al cargar