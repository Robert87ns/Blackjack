let firstCard = 10;
let secondCard = Math.floor(Math.random() * 11) + 1;
let thirdCard = Math.floor(Math.random() * 11) + 1;
let sum = firstCard + secondCard
let addSum = sum + thirdCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messagePara = document.getElementById("message-el")
let cardsPara = document.getElementById("cardsPara")
let sumPara = document.getElementById("sumPara")


function startGame() {
if (sum <= 20) {
    message = "Do you want to draw a new card?"
    messagePara.textContent = message
    sumPara.textContent = "Sum: " + Math.floor(sum)
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!"
    messagePara.textContent = message
    sumPara.textContent = "Sum: " + Math.floor(sum)
    hasBlackJack = true
} else {
    message = "You're out of the game!"
    messagePara.textContent = message
    sumPara.textContent = "Sum: " + Math.floor(sum)
    isAlive = false
    }
    cardsPara.textContent = "Cards: " + firstCard + " " + secondCard
}

function addCard() {
    if (addSum < 21) {
        sumPara.textContent = "Sum: " + addSum
        } else if (addSum === 21) {
            message = "Wohoo! You've got Blackjack!"
            messagePara.textContent = message
            sumPara.textContent = "Sum: " + addSum
            hasBlackJack = true }
        else {
            message = "You're out of the game!"
            messagePara.textContent = message
            sumPara.textContent = "Sum: " + addSum
            isAlive = false
        }

    cardsPara.textContent = "Cards: " + firstCard + " " + secondCard + " " + thirdCard
}
