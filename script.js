const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const suits = ["♣", "♦", "♥", "♠"];
const deck = [];

for(let i = 0; i < ranks.length; i++) {
    for(let j = 0; j < suits.length; j++) {
        deck.push(ranks[i] + suits[j]);
    } 
}

console.log(deck);
const random = Math.floor(Math.random() * 52);
console.log(deck[random])

function setRandomCard() {
    const randomIndex = Math.floor(Math.random() * 52);
    const randomCard = deck[randomIndex];
    const cardImage = `deck/${randomCard}.png`;

    document.querySelector(".lower-part-child").src = cardImage;
}

