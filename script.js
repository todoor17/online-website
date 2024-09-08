let sum = 0;

function press() {
    sum++;
    document.getElementsByClassName("text")[0].textContent = sum;
    document.body.style.backgroundColor = "black";
    document.getElementsByClassName("text")[0].style.color = "white";

    console.log(sum);
}

function reset() {
    sum--
    document.getElementsByClassName("text")[0].textContent = sum;
    document.body.style.backgroundColor = "white";
    document.getElementsByClassName("text")[0].style.color = "black";
    console.log("AAA");
}