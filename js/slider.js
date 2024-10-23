let currentSlide = 0;
const bgSlides = document.querySelectorAll(".bg-slide");

function showBackgroundSlide(index) {
  bgSlides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function changeSlide(step) {
  currentSlide += step;
  if (currentSlide >= bgSlides.length) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = bgSlides.length - 1;
  }
  showBackgroundSlide(currentSlide);
}

// Iniciar el slider con el primer slide activo
showBackgroundSlide(currentSlide);

// Cambiar automáticamente las imágenes de fondo cada 5 segundos
setInterval(() => {
  changeSlide(1);
}, 5000);
