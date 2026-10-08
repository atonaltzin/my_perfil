/* =====================================================
   NAVEGACIÓN DESDE PORTADA
===================================================== */

const botonHistoria = document.getElementById("btnHistoria");
const seccionHistoria = document.getElementById("historia");

botonHistoria.addEventListener("click", () => {

    seccionHistoria.scrollIntoView({
        behavior: "smooth"
    });

});


/* =====================================================
   ANIMACIÓN DE LA LÍNEA DEL TIEMPO
===================================================== */

const momentos = document.querySelectorAll(".momento");

const observador = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.15
    }
);

momentos.forEach((momento) => {
    observador.observe(momento);
});