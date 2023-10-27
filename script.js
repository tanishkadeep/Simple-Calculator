let btn = document.getElementsByClassName("btn");
let display = document.querySelector(".display");
display.innerText = "";

Array.from(btn).forEach(e => {
    e.addEventListener("click", () => {
        display.innerText += e.innerText;
    })
})

let equal = document.getElementById("equal");

equal.addEventListener("click", () => {
    display.innerText = eval(display.innerText);
})

let clear = document.getElementById("C");
clear.addEventListener("click", () => {
    display.innerText = "";
})