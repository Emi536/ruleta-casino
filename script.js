// 🔁 script.js
let fill = document.getElementById("progress-fill");
let text = document.getElementById("progress-text");
let bubble = text.parentElement;
let percent = 0;

let interval = setInterval(() => {
  percent++;

  // Ajustar porcentaje de carga
  fill.style.width = percent + "%";
  text.innerText = percent + "%";
  bubble.style.left = percent + "%";

  if (percent >= 100) {
    clearInterval(interval);
    document.getElementById("loading").style.display = "none";
    document.getElementById("game").style.display = "flex";
  }
}, 40);

// 🎡 Configuración de premios y ruleta
const premios = [
  { text: '100% BONO', fill: '#ffffff', textFillStyle: '#005f4e' },
  { text: '150% BONO', fill: '#005f4e', textFillStyle: '#ffffff' },
  { text: '200% BONO', fill: '#ffffff', textFillStyle: '#005f4e' },
  { text: 'OTRO GIRO', fill: '#005f4e', textFillStyle: '#ffffff' },
  { text: '30% BONO', fill: '#ffffff', textFillStyle: '#005f4e' },
  { text: '50% BONO', fill: '#005f4e', textFillStyle: '#ffffff' }
];

const ruleta = new Winwheel({
  canvasId: 'canvas',
  numSegments: premios.length,
  outerRadius: 140,
  segments: premios.map(p => ({
    fillStyle: p.fill,
    text: p.text,
    textFillStyle: p.textFillStyle
  })),
  textFontSize: 18,
  textFontFamily: 'Montserrat',
  textAlignment: 'outer',
  animation: {
    type: 'spinToStop',
    duration: 5,
    spins: 7,
    callbackFinished: mostrarPremio
  }
});

document.getElementById("girar-btn").addEventListener("click", () => {
  ruleta.stopAnimation(false);
  ruleta.rotationAngle = 0;
  ruleta.draw();
  ruleta.startAnimation();
});

function mostrarPremio(segment) {
  Swal.fire({
    title: '🎉 Premio obtenido',
    text: segment.text,
    icon: 'success',
    background: '#003f36',
    color: '#00ffd0',
    confirmButtonText: 'Aceptar',
    confirmButtonColor: '#00ffd0'
  });
}
