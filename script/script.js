const slides = document.querySelectorAll(".slide");

let indice = 0;

function cambiarSlide() {

    slides[indice].classList.remove("activo");

    indice++;

    if (indice >= slides.length) {
        indice = 0;
    }

    slides[indice].classList.add("activo");
}

setInterval(cambiarSlide, 5000);


//animacion
const secciones = document.querySelectorAll(".seccion");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible");
        }

    });

}, {
    threshold: 0.2
});

secciones.forEach(seccion => {
    observer.observe(seccion);
});