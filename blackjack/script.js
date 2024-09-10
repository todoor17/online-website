const deck = [];

let path;
let card;
let playerScore = 0;
let computerScore = 0;
let count;
let count1;
let balance = 100;

const computerText = document.getElementById("computer-score");
const playerText = document.getElementById("player-score");
const hitButton = document.getElementById("hitButton");
const standButton = document.getElementById("standButton");
const balanceText = document.getElementsByClassName("balance")[0];

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
    console.log(count);
    console.log((count % 2) + 2);
    cardImages[(count % 2) + 2].src = path;

    card = path[5];
    count++;


    if (playerScore > 11 && (parseInt(getScore(card))) == 1) {
        playerScore += 1;
    } else {
        playerScore += parseInt(getScore(card));
    }
    playerText.textContent = playerScore;
    console.log(playerScore);

    if (playerScore > 21) {
        youLost();
        return;
    }
}

function stand() {
    if (computerScore < 17) {
        path = getRandomCard();
        const cardImages = document.getElementsByClassName("card");
        cardImages[count1 % 2].src = path;

        card = path[5];
        if (computerScore > 11 && (parseInt(getScore(card))) == 1) {
            computerScore += 1;
        } else {
            computerScore += parseInt(getScore(card));
        }
        computerText.textContent = computerScore;
        count1++;
        setTimeout(stand, 1000);
        return;
    }

    if ((computerScore > 21 && playerScore <= 21) || computerScore < playerScore) {
        youWon();
    } else if (computerScore == playerScore) {
        draw();
    } else {
        youLost();
    }
}

function getScore(card) {
    switch (card) {
        case 'A':
            return 11;
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
    playerText.textContent = playerScore + "-" + computerScore + ", YOU LOST";
    playerText.style.color = "red";
    disableButtons();
}

function youWon() {
    balance += 20;
    balanceText.textContent = balance;
    playerText.textContent = playerScore + "-" + computerScore + ", YOU WON";
    playerText.style.color = "green";
    disableButtons();
}

function draw() {
    balance += 10;
    balanceText.textContent = balance;
    playerText.textContent = playerScore + "-" + computerScore + ", YOU DRAW";
    playerText.style.color = "black";
    playerText.style.stroke = "1px";
    disableButtons();
}

function reset() {
    disableButtons();
    playerScore = 0; 
    computerScore = 0;
    count = 0;
    count1 = 1;
    computerText.textContent = "0";
    playerText.textContent = "0";
    playerText.style.color = "black";
    for (let i = 0; i < 4; i++) {
        document.getElementsByClassName("card")[i].src = "../images/white.png";
    }
}

function start() {
    enableButtons();
    playerScore = 0;
    computerScore = 0;
    count = 1;
    count1 = 1;
    balance -= 10;
    balanceText.textContent = balance;
    

    path = getRandomCard();
    const path1 = getRandomCard();
    const card = path[5];
    const card1 = path1[5];
    computerScore = parseInt(getScore(card));
    playerScore = parseInt(getScore(card1))
     
    computerText.textContent = computerScore;
    playerText.textContent = playerScore;

    playerText.style.color = "black";
    document.getElementsByClassName("card")[0].src = path;
    document.getElementsByClassName("card")[1].src = "../images/black.png";
    document.getElementsByClassName("card")[2].src = path1;
    document.getElementsByClassName("card")[3].src = "../images/white.png";
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

function disableButtons() {
    hitButton.disabled = true;
    standButton.disabled = true;
}

function enableButtons() {
    hitButton.disabled = false;
    standButton.disabled = false;
}

