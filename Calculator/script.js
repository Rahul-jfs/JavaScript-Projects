let currentText = "";
let display = document.getElementById("display");

let values = document.querySelectorAll("button");

let btns = document.querySelectorAll("button");

btns.forEach(function (btn) {
  btn.addEventListener("click", () => {
    if (isFinite(btn.value)) {
      currentText += btn.value;
      display.value = currentText;
    } else if (
      btn.value == "+" ||
      btn.value == "-" ||
      btn.value == "*" ||
      btn.value == "/" ||
      btn.value == "-" ||
      btn.value == "**"
    ) {
      currentText += btn.value;
      display.value = currentText;
    } else if (btn.value == "ac") {
      currentText = "";
      display.value = currentText;
    } else if (btn.value == "c") {
      currentText = currentText.substring(0, currentText.length - 1);
      display.value = currentText;
    } else if (btn.value == "=") {
      let result = eval(currentText);
      currentText = result;
      display.value = result;
    }
  });
});
