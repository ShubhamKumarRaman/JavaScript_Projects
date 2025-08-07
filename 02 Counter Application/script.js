const decrement = document.querySelector(".decrement");
const reset = document.querySelector(".reset");
const increment = document.querySelector(".increment");
const countlbl = document.querySelector(".count");

let count = 0;

decrement.onclick = function () {
    count--;
    countlbl.textContent = count;
}

reset.onclick = function () {
    count = 0;
    countlbl.textContent = count;
}

increment.onclick = function () {
    count++;
    countlbl.textContent = count;
}