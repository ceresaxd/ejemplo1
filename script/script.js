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

setInterval(cambiarSlide, 4000);