const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("results")
let userChoice
let computerChoice
let result


const possibleChoices = document.querySelectorAll('img')
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',
    (e) => {
        userChoice = e.target.id
        userChoiceDisplay.innerHTML = userChoice
        generateComputerChoice()
        getResult()
    }
        
)
)

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }

    if (randomNumber === 2) {
        computerChoice = 'paper'
    }

    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice 
}


function getResult () {
    if (computerChoice === userChoice) {
        result = undefined
    }
    if ( computerChoice === 'rock' && userChoice === 'paper') {
        result = true
    }
    if ( computerChoice === 'rock' && userChoice === 'scissors') {
        result = false
    }
    if ( computerChoice === 'paper' && userChoice === 'scissors') {
        result = true
    }
    if ( computerChoice === 'paper' && userChoice === 'rock') {
        result = false
    }
    if ( computerChoice === 'scissors' && userChoice === 'rock') {
        result = true
    }
    if ( computerChoice === 'scissors' && userChoice === 'paper') {
        result = false
    }

    if (result === undefined){
        resultDisplay.innerHTML = `<span style="color:blue;">No Winner</span`
    }
    if (result === true){
        resultDisplay.innerHTML = `<span style="color:green;">You Won</span`
    }
    if (result === false){
        resultDisplay.innerHTML = `<span style="color:red;">You Lost</span`
    }

}