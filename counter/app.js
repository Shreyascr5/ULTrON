var btnincrease = document.getElementById('incre');
var btndecrease = document.getElementById('decre');
var countNum = document.getElementById('t');
var startcount = 0;




function begin() {
    startcount = startcount + 1;
    countNum.innerHTML = startcount;
}

function end() {
    startcount = startcount - 1;
    countNum.innerHTML = startcount;
    if (startcount < 0) {
        startcount = 0;
        countNum.innerHTML = startcount;
    }
}
btnincrease.addEventListener("click", begin);
btndecrease.addEventListener("click", end);