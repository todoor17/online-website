const deck = [];

let path;
let card;
let playerScore = 0;
let computerScore = 0;
let count = 0;
let count1 = 1;

const computerText = document.getElementById("computer-score");
const playerText = document.getElementById("player-score");

function generateDeck() {
    const suits = ["♠","♣","♥","♦"];
    const numbers =["2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "J", "K", "Q"];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 13; j++) {
            deck.push(numbers[j] + suits[i]);
        }
    }
}
function hit() {
    path = getRandomCard();

    const cardImages = document.getElementsByClassName("card");
    cardImages[(count % 2) + 2].src = path;

    console.log(deck.length)
    card = path[5];

    count++;
    console.log(count);

    playerScore += parseInt(getScore(card));
    playerText.textContent = playerScore;
}

function stand() {
    if (computerScore < 17) {
        path = getRandomCard();
        const cardImages = document.getElementsByClassName("card");
        cardImages[count1 % 2].src = path;

        card = path[5];
        computerScore += parseInt(getScore(card));
        computerText.textContent = computerScore;
        count1++;
        setTimeout(stand, 1000);
    }

    if (computerScore > playerScore) {
        youLost();
    } else {
        youWon();
    }
}

function getScore(card) {
    switch (card) {
        case 'A':
            return 11
        case 'J':
        case 'K':
        case 'Q':
        case '1':
            return 10;
        default: 
            if (card >= '2' && card <= '9') {
                return parseInt(card);
            }
    }
}

function youLost() {
    playerText.textContent = "YOU LOST";
    playerText.style.color = "red";
}

function youWon() {
    playerText.textContent = "YOU WON";
    playerText.style.color = "green";
}

function reset() {
    playerScore = 0; 
    computerScore = 0;
    count = 0;
    count1 = 1;
    computerText.textContent = "0";
    playerText.textContent = "0";
    playerText.style.color = "black";
    for (let i = 0; i < 4; i++) {
        document.getElementsByClassName("card")[i].src = "images/white.png";
    }
}

function start() {
    playerScore = 0;
    computerScore = 0;
    count = 0;
    count1 = 1;

    path = getRandomCard();
    const card = path[5];
    computerScore = parseInt(getScore(card));
     
    computerText.textContent = computerScore;
    playerText.textContent = playerScore;
    document.getElementsByClassName("card")[0].src = path;
    document.getElementsByClassName("card")[1].src = "images/black.png";
    document.getElementsByClassName("card")[2].src = "images/white.png";
    document.getElementsByClassName("card")[3].src = "images/white.png";
    console.log(computerScore);

}

function getRandomCard() {
    if (deck.length == 0) {
        generateDeck();
    }
    let random = Math.floor(Math.random() * deck.length);
    let randomPath = path = "deck/" + deck[random] + ".png";
    return randomPath;
}