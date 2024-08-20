function mostrarSeccion(id) {
    // Ocultar todas las secciones
    var secciones = document.querySelectorAll('.square');
    secciones.forEach(function(seccion) {
        seccion.classList.remove('active');
    });

    // Mostrar la sección con el ID correspondiente
    document.getElementById(id).classList.add('active');
}

document.addEventListener('DOMContentLoaded', (e) => {
    let body = document.getElementById("cuerpo");
    let button = document.createElement("button");
    let buttontext = document.createTextNode("Click here if you want background music");
    button.setAttribute("id", "musica");
    button.setAttribute("class", "musica");
    button.appendChild(buttontext);
    body.appendChild(button);

    document.getElementById("musica").addEventListener("click", (e) => {
        let sonido = new Audio ("./imagenes/Y2meta.app-Calm Night __ Decaying winter soug new loop __.ogg");
        sonido.play();
    })
})