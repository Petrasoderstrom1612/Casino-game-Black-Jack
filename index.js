// Player 1
let messageEl1 = document.getElementById("message-el1")
let cardsEl1 = document.querySelector("#cards-el1")
let sumEl1 = document.querySelector("#sum-el1")
let headlineForPreviousEl1 = document.getElementById("headline-for-previous-el1")
let previousCountEl1 = document.getElementById("previous-count-el1")
let totalGamesPlayedEl1 = document.getElementById("total-games-played-el1")
let totalVictoriesEl1 = document.getElementById("total-victories-el1")
let successRateEl1 = document.getElementById("success-rate-el1")
let playerBackground1El = document.getElementById("player1-background-el")
let aceChoiceEl = document.getElementById("ace-choice-el")

let cards1
let sum1
let hasBlackJack1 = false
let isAlive1 = false
let totalGamesPlayed1 = 0
let totalVictories1 = 0
let successRate1 

console.log(cards1)

function createRandomNumber1() {
    let randomNumber = Math.ceil(Math.random() * 13)
    if (randomNumber === 1) {
        aceChoiceEl.className = "show"
        randomNumber = 11
    }
    if(randomNumber > 10){
        randomNumber = 10
    }
    return randomNumber
}

function startGame1() { 
    isAlive1 = true
    let firstCard = createRandomNumber1() 
    let secondCard = createRandomNumber1()
    cards1 = [firstCard, secondCard]
    sum1 = firstCard + secondCard
    console.log(isAlive1)
    renderGame1()
}

function renderGame1() {
    cardsEl1.innerHTML = "Cards: "
    for(let i = 0; i < cards1.length; i++){
        cardsEl1.innerHTML += cards1[i] + " "
    }
    
    let message = ""
    sumEl1.innerHTML = `Sum: ${sum1}`
    if (sum1 <= 20) {
        message = "Do you want to draw a new card?"
        messageEl1.className = "green"
    } else if (sum1 === 21) {
        message = "Wohoo! You've got Blackjack! 🎉"
        hasBlackJack1 = true
        messageEl1.className = "yellow"
        totalVictories1++
    } else {
        message = "You're out of the game!"
        isAlive1 = false
        messageEl1.className = "red"
    }
    console.log(message)
    messageEl1.innerText = message
}

function newCard1() {
    if (isAlive1 && !hasBlackJack1) { 
    let thirdcard = createRandomNumber1()
    sum1 += thirdcard
    cards1.push(thirdcard)
    renderGame1()
    }
}

function resetGame1() {
    previousCounts1()
    isAlive1 = false
    hasBlackJack1 = false
    let firstCard = 0
    let secondCard = 0
    cards1 = [firstCard, secondCard]
    sum1 = 0
    messageEl1.innerText = "Press Start to launch the game"
    messageEl1.className = "white"
    cardsEl1.innerHTML = "Cards: "
    sumEl1.innerHTML = `Sum: `
}

function previousCounts1() {
    headlineForPreviousEl1.textContent = "Previous games' points: "
    let previousPoints = sum1
    let color
    if (sum1 === 21) {
        color = "yellow"  
    } else {
        color = "red"
    }
    previousCountEl1.innerHTML += `<span class="${color}">${previousPoints} </span>`
    totalGamesPlayed1++
    totalGamesPlayedEl1.innerHTML = "Total games played: " + totalGamesPlayed1
    totalVictoriesEl1.innerHTML = "Games won: " + totalVictories1 + " / " + totalGamesPlayed1
    successRate1 = Math.round(totalVictories1 / totalGamesPlayed1 * 100)
    successRateEl1.innerHTML = "Success rate: " + successRate1 + "%"
}

// Player 2
// let messageEl2 = document.getElementById("message-el2")
// let cardsEl2 = document.querySelector("#cards-el2")
// let sumEl2 = document.querySelector("#sum-el2")
// let headlineForPreviousEl2 = document.getElementById("headline-for-previous-el2")
// let previousCountEl2 = document.getElementById("previous-count-el2")
// let totalGamesPlayedEl2 = document.getElementById("total-games-played-el2")
// let totalVictoriesEl2 = document.getElementById("total-victories-el2")
// let successRateEl2 = document.getElementById("success-rate-el2")
// let playerBackground2El = document.getElementById("player2-background-el")

// let cards2
// let sum2
// let hasBlackJack2 = false
// let isAlive2 = false
// let totalGamesPlayed2 = 0
// let totalVictories2 = 0
// let successRate2

// function createRandomNumber2() {
//     let randomNumber = Math.ceil(Math.random() * 13)
//     if (randomNumber === 1) {
//         randomNumber = 11
//     }
//     if(randomNumber > 10){
//         randomNumber = 10
//     }
//     return randomNumber
// }

// function startGame2() { 
//     isAlive2 = true
//     let firstCard2 = createRandomNumber2()
//     let secondCard2 = createRandomNumber2()
//     cards2 = [firstCard2, secondCard2]
//     sum2 = firstCard2 + secondCard2
//     renderGame2()
// }

// function renderGame2() {
//     cardsEl2.innerHTML = "Cards: "
//     for(let i = 0; i < cards2.length; i++){
//         cardsEl2.innerHTML += cards2[i] + " "
//     }
    
//     let message2 = ""
//     sumEl2.innerHTML = `Sum: ${sum2}`
//     if (sum2 <= 20) {
//         message2 = "Do you want to draw a new card?"
//         messageEl2.className = "green"
//     } else if (sum2 === 21) {
//         message2 = "Wohoo! You've got Blackjack! 🎉"
//         hasBlackJack2 = true
//         messageEl2.className = "yellow"
//         totalVictories2++
//     } else {
//         message2 = "You're out of the game!"
//         isAlive2 = false
//         messageEl2.className = "red"
//     }
//     messageEl2.innerText = message2
// }

// function newCard2() {
//     if (isAlive2 && !hasBlackJack2) { 
//         let thirdCard2 = createRandomNumber2()
//         sum2 += thirdCard2
//         cards2.push(thirdCard2)
//         renderGame2()
//     }
// }

// function resetGame2() {
//     previousCounts2()
//     isAlive2 = false
//     hasBlackJack2 = false
//     let firstCard2 = 0
//     let secondCard2 = 0
//     cards2 = [firstCard2, secondCard2]
//     sum2 = 0
//     messageEl2.innerText = "Press Start to launch the game"
//     messageEl2.className = "white"
//     cardsEl2.innerHTML = "Cards: "
//     sumEl2.innerHTML = `Sum: `
//     winnerBackground()
// }

// function previousCounts2() {
//     headlineForPreviousEl2.textContent = "Previous games' points: "
//     let previousPoints2 = sum2
//     let color
//     if (sum2 === 21) {
//         color = "yellow"  
//     } else {
//         color = "red"
//     }
//     previousCountEl2.innerHTML += `<span class="${color}">${previousPoints2} </span>`
//     totalGamesPlayed2++
//     totalGamesPlayedEl2.innerHTML = "Total games played: " + totalGamesPlayed2
//     totalVictoriesEl2.innerHTML = "Games won: " + totalVictories2 + " / " + totalGamesPlayed2
//     successRate2 = Math.round(totalVictories2 / totalGamesPlayed2 * 100)
//     successRateEl2.innerHTML = "Success rate: " + successRate2 + "%"
// }

// function winnerBackground(){
//     if(successRate1 > successRate2){
//         playerBackground1El.classList.add("light-green")
//         playerBackground2El.classList.add("light-red")
//         console.log(playerBackground1El)
//         console.log(playerBackground2El)
//     } else if(successRate1 < successRate2) {
//         playerBackground2El.classList.add("light-green")
//         playerBackground1El.classList.add("light-red")
//         console.log(playerBackground1El)
//         console.log(playerBackground2El)
//     }
// }

