function mostrarSeccion(id) {
    // Ocultar todas las secciones
    var secciones = document.querySelectorAll('.square');
    secciones.forEach(function(seccion) {
        seccion.classList.remove('active');
    });

    // Mostrar la sección con el ID correspondiente
    document.getElementById(id).classList.add('active');
}