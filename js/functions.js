const input = document.querySelector('input')
const output = document.querySelector('output')
const span = document.querySelector('span')
const guessesDisplay = document.getElementById('guesses')


const words = [
    "programming",
    "javascript",
    "database",
    "markuo",
    "framework",
    "variable",
    "stylesheet",
    "library",
    "asynchronous",
    "hypertext",
]

let randomizedWord = ''
let maskedWord = ''
let guessesAmount = 0

const newGame = () => {
    const random = Math.floor(Math.random() * 10) + 1
    randomizedWord = words[random];
    maskedWord = "*".repeat(randomizedWord.length)
    console.log(randomizedWord)
    output.innerHTML = maskedWord;
}

const guessCountElement = document.querySelector('span')

const guessCountDisplay = () => {
    guessesAmount++
    guessCountElement.textContent = guessesAmount
}

const win = () => {
    //alert('You have guessed right, the word is ' + randomizedWord + '.', 'Guesses: ' + guessesAmount +'')
    alert(`You have guessed right, the word is ${randomizedWord}. Guesses: ${guessesAmount}`)
}

const replaceFoundChars = (guess) => {
    for (let i = 0;i<randomizedWord.length;i++) {
        const char = randomizedWord.substring(i,i+1)
        if (char === guess) {
            let newString = maskedWord.split('')
            newString.splice(i,1,guess)
            newString = newString.join('')
            maskedWord = newString
        }
    }
    output.innerHTML = maskedWord
}

input.addEventListener('keypress',(e) => {
    if (e.key === 'Enter') {
        e.preventDefault()
        const guess = input.value
        if (guess.toLowerCase() === randomizedWord.toLowerCase()) {
            win()
        }   else if (guess.length === 1) {
            replaceFoundChars(guess)
            if (maskedWord.toLocaleLowerCase() === randomizedWord.toLocaleLowerCase()) {
                guessCountDisplay()
                win()
            } else {
                guessCountDisplay()
            }
        }   
    
        else {
        }
        input.value=''
    }
})

newGame()
