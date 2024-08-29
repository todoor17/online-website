function changeColorRandom() {
    const randomInt = Math.floor(Math.random() * 16777216);
    const randomColor = '#' + randomInt.toString(16).padStart(6, '0');
    console.log(randomColor);
    document.body.style.backgroundColor = randomColor;
}

function changeColorControlled() {
    const colors = ["#ff80ed", "#065535", "#000000", "#ff0000", "#ffffff", "#0000ff", "#8a2be2", "#ccff00"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * 9)];
}