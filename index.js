let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let cards
let sum
let hasBlackJack = false
let isAlive = false

console.log(cards)

function createRandomNumber() {
    let randomNumber = Math.ceil(Math.random() * 13)
    if (randomNumber === 1) {
        randomNumber = 11
    }
    if(randomNumber > 10){
        randomNumber = 10
    }
    return randomNumber
}

function startGame() { 
    isAlive = true
    let firstCard = createRandomNumber() 
    let secondCard = createRandomNumber()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    console.log(isAlive)
    renderGame()
}

function renderGame() {
    cardsEl.innerHTML = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.innerHTML += cards[i] + " "
    }
    
    let message = ""
    sumEl.innerHTML = `Sum: ${sum}`
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        messageEl.className = "green"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🎉"
        hasBlackJack = true
        messageEl.className = "yellow"
    } else {
        message = "You're out of the game!"
        isAlive = false
        messageEl.className = "red"
    }
    console.log(message)
    messageEl.innerText = message
}

function newCard() {
    if (isAlive && !hasBlackJack) { 
    let thirdcard = createRandomNumber()
    sum += thirdcard
    cards.push(thirdcard)
    renderGame()
    }

}

function resetGame() {
    isAlive = false
    let firstCard = 0
    let secondCard = 0
    cards = [firstCard, secondCard]
    sum = 0
    messageEl.innerText = "Press Start to launch the game"
    messageEl.className = "white"
    cardsEl.innerHTML = "Cards: "
    sumEl.innerHTML = `Sum: `
}