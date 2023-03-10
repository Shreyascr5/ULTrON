var getText = document.querySelector("#textbox");
var getFind = document.getElementById("find");
var getReplace = document.getElementById("replace");
var getButton = document.getElementById("btn");
var check;
console.log("hello");

function findAndReplace() {
    var text = getText.value;
    console.log(text);
    var findText = getFind.value;
    var replaceText = getReplace.value;
    let n = 0;
    let arr = text.split(" ");
    while (n !== text.length) {
        if (findText === arr[n]) {
            arr[n] = replaceText;
        }
        let str = arr.join(" ");
        getText.value = str;
        // console.log(getText.value);
        n++;
    }
}

getButton.addEventListener("click", findAndReplace);