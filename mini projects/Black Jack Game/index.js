let firstCard = random()
let secondCard = random();
let alive = false;
let hasBlackjack = false;
let card = [];
let sum = 0;
let msgEL = document.getElementById("msg-el")
let msg = " ";
let sumEL = document.getElementById("sum-el")
let cardsEL = document.getElementById("cards-el");

// creating a function which always returns random num from 1-13
function random() {
    let RandomNumber = Math.floor(Math.random() * 13) + 1
    // we need to modify the numbers for king/queen/jack and Ace cards 
    if (RandomNumber > 10) {
        return 10;
    } else if (RandomNumber === 1) {
        // Ace can be either 1 or 11, depending on the total sum
        return 11
    } else {
        return RandomNumber
    }
    return RandomNumber;
    console.log(RandomNumber);
}

function startGame() {
    alive = true;
    hasBlackjack = false;
    // generating 2 random numbers 
    let firstCard = random()
    let secondCard = random();
    card = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame();
}
function renderGame() {
    if (sum <= 20) {
        msg = " Do you want to draw a new card? 🙂";
    }
    else if (sum === 21) {
        // the condition  will be shown as 'false' and true until this situation comes 
        hasBlackjack = true;
        msg = "Wohoo! You've got a Blackjack!🥳"
    }
    else {
        msg = "oops! You are out of the Game 😟 "
        alive = false;
    }

    msgEL.textContent = msg
    sumEL.textContent = "Sum: " + sum;
    cardsEL.textContent = "Cards: ";
    for (i = 0; i < card.length; i++) {
        cardsEL.textContent += card[i] + " ";
    }
}

function newCard() {
    if (alive === true && hasBlackjack === false) {

        let newCARD = random();
        sum += newCARD;
        card.push(newCARD);
        renderGame();
    }
}
