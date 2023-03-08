
let ocultarTexto_btn = document.getElementById ('ocultarTexto_btn');

let ocultarTexto = document.getElementById ('ocultarTexto');

ocultarTexto_btn.addEventListener ('click', toggleText);

function toggleText() {
    ocultarTexto.classList.toggle ('mostrar');

    if (ocultarTexto.classList.contains ('mostrar')) {
        ocultarTexto_btn.innerHTML= 'Ver Menos';
    }
    else {
        ocultarTexto_btn.innerHTML = 'Ver Más - Formación Académica';
    }

}