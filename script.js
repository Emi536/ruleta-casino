let fill = document.getElementById("progress-fill");
let text = document.getElementById("progress-text");
let bubble = text.parentElement;
let percent = 0;

let interval = setInterval(() => {
    percent++;

    // Ajusta el porcentaje de carga
    fill.style.width = percent + "%";
    text.innerText = percent + "%";

    // Mueve la burbuja dinámica
    bubble.style.left = percent + "%";

    if (percent >= 100) {
        clearInterval(interval);
    }
}, 40);
