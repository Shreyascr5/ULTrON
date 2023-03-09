var screenDisp = document.getElementById("display");
var butt = document.querySelectorAll("button");
let buttonClick = [];
var stringFormat;

function calculate(button) {
    var value = button.textContent;

    if (value === "Clear") {
        buttonClick = [];
        screenDisp.textContent = "0";
    } else if (value === "=") {
        screenDisp.textContent = eval(stringFormat);
    } else {

        buttonClick.push(value);
        stringFormat = buttonClick.join("");
        screenDisp.textContent = stringFormat;
    }

}

butt.forEach(button => button.addEventListener("click", () => calculate(button)));