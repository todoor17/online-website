const deck = [];

let path;
let card;
let playerScore = 0;
let computerScore = 0;
let balance = 100;
let count;
let count1;

const computerText = document.getElementById("computer-score");
const playerText = document.getElementById("player-score");
const hitButton = document.getElementById("hitButton");
const standButton = document.getElementById("standButton");
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");
const balanceText = document.getElementsByClassName("balance")[0];
const deckSizeText = document.getElementById("deckSize");

document.addEventListener('DOMContentLoaded', function() {
    disablePlayButtons();
    generateDeck();
})

function generateDeck() {
    const suits = ["♠","♣","♥","♦"];
    const numbers =["2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "J", "K", "Q"];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 13; j++) {
            deck.push(numbers[j] + suits[i]);
        }
    }
}

function getRandomCard() {
    let random = Math.floor(Math.random() * deck.length);
    let randomPath = "deck/" + deck[random] + ".png";
    deck.splice(random, 1); //card is removed after being drawn
    return randomPath;
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

function updateScore(score, card) { //special case when Ace value is 1
    const cardScore = parseInt(getScore(card));

    if (score >= 11 && (cardScore == 11)) {
        return score + 1;
    } else {
        return score + cardScore;
    }
}


function start() {
    if (deck.length < 10) {
        deck.splice(0, deck.length);
        generateDeck();
    }

    enablePlayButtons();
    balance -= 10;

    playerScore = 0;
    computerScore = 0;
    count = count1 = 1;
    balanceText.textContent = "Balance " + balance + "$";
    playerText.style.color = "black";
    computerText.style.color = "black";
    

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
}

function hit() {
    path = getRandomCard();

    const cardImages = document.getElementsByClassName("card");
    cardImages[(count % 2) + 2].src = path;

    card = path[5];
    count++;

    playerScore = updateScore(playerScore, card);
    playerText.textContent = playerScore;
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
        computerScore = updateScore(computerScore, card);
        
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

function reset() {
    disableButtons();
    playerText.style.color = "black";
    computerText.style.color = "black";
    playerScore = 0; 
    computerScore = 0;
    computerText.textContent = "0";
    playerText.textContent = "0";
    playerText.style.color = "black";
    for (let i = 0; i < 4; i++) {
        document.getElementsByClassName("card")[i].src = "../images/white.png";
    }
}

function youLost() {
    playerText.textContent = playerScore;
    computerText.textContent = computerScore;
    playerText.style.color = "red";
    computerText.style.color = "green";
    balanceText.textContent = "Balance " + balance + "$"; 
    balanceText.style.color = "red";

    disableButtons();

}

function youWon() {
    balance += 20;
    playerText.textContent = playerScore;
    computerText.textContent = computerScore;
    playerText.style.color = "green";
    computerText.style.color = "red";
    balanceText.textContent = "Balance " + balance + "$"; 
    balanceText.style.color = "green";

    disableButtons();
}

function draw() {
    balance += 10;
    playerText.textContent = playerScore;
    computerText.textContent = computerScore;
    playerText.style.color = "#FF6600";
    computerText.style.color = "#FF6600";
    balanceText.textContent = "Balance " + balance + "$"; 
    playerText.textContent = playerScore;
    balanceText.style.color = "#FF6600";
    
    disableButtons();
}

function disablePlayButtons() {
    hitButton.style.opacity = "0";
    standButton.style.opacity = "0";
    startButton.style.opacity = "100";
    resetButton.style.opacity = "100";
    hitButton.disabled = true;
    standButton.disabled = true;
    startButton.disabled = false;
    resetButton.disabled = false;
    balanceText.style.display = "block";
}

function enablePlayButtons() {
    hitButton.style.opacity = "100";
    standButton.style.opacity = "100";
    startButton.style.opacity = "0";
    resetButton.style.opacity = "0";
    hitButton.disabled = false;
    standButton.disabled = false;
    startButton.disabled = true;
    resetButton.disabled = true;
    balanceText.style.display = "none";
}
