function toggleMenu(x) {
    x.classList.toggle("change");
    document.querySelector(".sidebar").classList.toggle("show");
    document.querySelector(".content-container").classList.toggle("shift")
}

function setDate() {
    let date = new Date();
    let day = date.getDay();
    let month = date.getMonth();
    const year = date.getFullYear();

    if (parseInt(day) < 10) {
        day = "0" + day;
    }

    if (parseInt(month) < 10) {
        month = "0" + month;
    }

    date = day + "." + month + "." + year;
    document.getElementsByClassName("date")[0].textContent = date;
}

document.addEventListener("DOMContentLoaded", function() {
    setDate();
})