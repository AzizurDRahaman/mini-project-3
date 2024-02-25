var button = document.querySelectorAll("button");
var input = document.querySelector("input");

input.setAttribute('readonly', true);

button.forEach((item) => {
    item.addEventListener("click", (e) => {
        if (e.target.innerHTML == "RESET") {
            input.value = "";
        } else if (e.target.innerHTML == "DEL") {
            input.value = input.value.slice(0, -1);
        } else if (e.target.innerHTML == "=") {
            input.value = eval(input.value.replace('x', '*'));
        } else {
            input.value += e.target.innerHTML;
        }
    });
})