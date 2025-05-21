let fill = document.getElementById("progress-fill");
let text = document.getElementById("progress-text");
let percent = 0;

let interval = setInterval(() => {
  percent++;
  fill.style.width = percent + "%";
  text.innerText = percent + "%";
  fill.querySelector(".glow-bubble").style.left = `calc(${percent}% - 30px)`;
  
  if (percent >= 100) {
    clearInterval(interval);
  }
}, 40);
