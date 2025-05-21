let fill = document.getElementById("progress-fill");
let text = document.getElementById("progress-text");
let percent = 0;

let interval = setInterval(() => {
    percent++;
    fill.style.width = percent + "%";
    text.innerText = "Cargando... " + percent + "%";
    if (percent >= 100) {
        clearInterval(interval);
    }
}, 40);
