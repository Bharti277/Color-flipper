var button = document.getElementById("btn");
var textColor = document.getElementById("color");
var bgColorBody = document.getElementById("main");
button.addEventListener("click", changeColor);

function changeColor(e) {
  for (let i = 0; i < 255; i++) {
    bgColorBody.style.backgroundColor = `rgba(${Math.random() * 255}, ${
      Math.random() * 255
    }, ${Math.random() * 255})`;
    textColor.textContent = bgColorBody.style.backgroundColor;
  }
}
