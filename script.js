function openTab(evt, tabName) {
    // Declarar todas las variables
    var i, tabcontent, tablinks;

    // Obtener todos los elementos con class="tab-content" y ocultarlos
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Obtener todos los elementos con class="tab-link" y quitar la clase "active"
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostrar la pestaña actual y agregar una clase "active" al botón que abrió la pestaña
    document.getElementById(tabName).style.display = "block";
    if (evt && evt.currentTarget) { // Asegurarse que evt y currentTarget existen
      evt.currentTarget.className += " active";
    }
}

// Abrir la primera pestaña por defecto al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    // Simular un clic en el primer botón de pestaña si existe
    const firstTabButton = document.querySelector(".tabs .tab-link");
    if (firstTabButton) {
        // Extraer el ID de la pestaña del atributo onclick
        // Ejemplo: onclick="openTab(event, 'seccion-1-introduccion')"
        const onclickAttribute = firstTabButton.getAttribute("onclick");
        const tabIdMatch = onclickAttribute.match(/'([^']+)'/); // Busca el texto entre comillas simples
        if (tabIdMatch && tabIdMatch[1]) {
            const firstTabId = tabIdMatch[1];
            openTab(null, firstTabId); // Abrir la pestaña
            firstTabButton.className += " active"; // Marcar el botón como activo
        }
    }
});