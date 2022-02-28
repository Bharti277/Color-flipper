var button = document.getElementById("btn");
var textColor = document.getElementById("color");
var bgColorBody = document.getElementById("main");
button.addEventListener("click", changeColor);

function changeColor(e) {
    const num1 = Math.floor(Math.random() * 255);
    const num2 = Math.floor(Math.random() * 255);
    const num3 = Math.floor(Math.random() * 255);
    bgColorBody.style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`
    textColor.textContent = bgColorBody.style.backgroundColor;
  
}
