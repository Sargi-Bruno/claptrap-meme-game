const title = document.getElementById('title')
const userChoiceImg = document.getElementById('user-choise-img')
const userChoiceDisplay = document.getElementById('user-choice-h2')
const possibleChoices = document.querySelectorAll('.choice')
const chooseDiv = document.getElementById('choose')
const resultDiv = document.getElementById('result-div')
const claptrapQuote = document.getElementById('claptrap-quote')
let userChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    userChoiceImg.src = `./assets/${userChoice.toLowerCase()}.png`
    getResult()
    chooseDiv.remove()
    resultDiv.classList.remove('hidden')
}))


function getResult() {
    if(userChoice === 'ROCK') {
        title.innerHTML = 'You win!'
        claptrapQuote.innerHTML = 'Minion, let me win!'
    }
    if(userChoice === 'PAPER') {
        title.innerHTML = 'You lose!'
        claptrapQuote.innerHTML = 'Of course I would win!'
    }
    if(userChoice === 'SCISSORS') {
        title.innerHTML = 'Its a draw!'
        claptrapQuote.innerHTML = 'Minion, your fool!'
    }
}