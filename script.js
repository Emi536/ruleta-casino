let fill = document.getElementById("progress-fill");
let bubble = document.getElementById("progress-bubble");
let percent = 0;

let interval = setInterval(() => {
    percent++;

    // Actualiza el ancho de la barra
    fill.style.width = percent + "%";

    // Actualiza el texto de la burbuja
    bubble.innerText = percent + "%";

    // Mueve la burbuja al final de la barra
    bubble.style.left = percent + "%";

    if (percent >= 100) {
        clearInterval(interval);
    }
}, 40);
