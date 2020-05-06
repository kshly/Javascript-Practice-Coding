//product --> Object.prototype --> null (chain stops)
// const products = {
//     name: 'Influence'
// }


// Object.prototype.hasOwnProperty = () => `This is a new method`
// //hasOwnProperty
// Object.prototype.someNewMethod = () => `Again a new ${products.name}`
// console.log(products.hasOwnProperty())
// console.log(products.someNewMethod())

//Primitive value: string, number, boolean, null, undefined
//Prototype chain for an array
// //Array: myArray --> Array.prototype --> Object.prototype --> null
// const team = ['Luke', 'Maddison']
// console.log(team.hasOwnProperty('length'))

// //prototype chain for a function
// //Function: myfunc --> Function.prototype --> Object.prototype --> null
// const getScore = () => 1
// console.log(getScore)
// //String: myString --> String.prototype --> Object.prototype --> null
// //Number: myNumber --> Number.prototype --> Object.prototype --> null 
// const product = 'Computer' // BTS : const product = new String('Computer')

//Steps to check failure or game status and continuous update 
//1. Setup new "status" property with initial value of "playing"
//2. Create method for recalculating status to "playing", "finished" or "failed"
//3. Call the method after a guess is processed
//4. use console.log to print the status

//Testing the functionality
//Start the game and see "playing"
//Make two incorrect guesses to see "failed"
//Refresh the browser and guess "c" , "a" and "t" to see "Finished"

const game1 = new Hangman('Cat', 3)

const guessesEl = document.querySelector('#guesses')
const puzzleEl = document.querySelector('#puzzles')

puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.getStatusMessage()
console.log(game1.remainingGuesses)
console.log(game1.status)
window.addEventListener('keypress',(event) => {
    const guess = String.fromCharCode(event.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.getPuzzle()
    guessesEl.textContent = game1.getStatusMessage()
    //console.log(game1.remainingGuesses)
    //console.log(game1.status)
})