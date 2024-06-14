let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector ("#cards-el")

let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

function startGame() { //you want the html button to have onclick startgame() but after the start the function is reused so you change the name for calling on it(just to make it semantically correct)
    renderGame()
}

function renderGame() {
    cardsEl.innerHTML = `Cards: ${cards[0]} ${cards[1]}`
    sumEl.innerHTML = `Sum: ${sum}`

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    console.log(message)
    messageEl.innerText = message
}

function newCard() {
    console.log("new card")

    let thirdcard = 3
    sum += thirdcard
    console.log(sum)
    cards.push(thirdcard)
    console.log(cards)
    renderGame()
}