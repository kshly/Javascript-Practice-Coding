//1. create a constructor function for the hangman game 
//2. Setup two attributes, one for the word itself and the other for the number of guesses 
//3. create two instances of it and print both of them to the console
//4. setup the word instance property as an array of lowercase letters 
//5. setup another instance property to store the no. of guessed letters
//6. create another method that gives you the word puzzle back
//7. Should accept a character  for guessing 
//8. Should add unique guess to list of guesses
//9. Should decrement the guesses left if a guess isn't a match
//10. Dipslay the puzzle in browser instead of the console
//11. Display the guesses left to the browser instead of the console
//12. Separate the Hangman definition from the rest of the app code (use app.js)

//13. Setup new "status" property with initial value of "playing"
//14. Create method for recalculating status to "playing", "finished" or "failed"
//15. Call the method after a guess is processed
//16. use console.log to print the status

//17. Disable new guesses unless "playing"
//18. Setup a new method to get back a status message


//Testing the functionality
//No guesses? => ***
//Guessed "c", "b" and "t" -> c*t
//Start the game and see "playing"
//Make two incorrect guesses to see "failed"
//Refresh the browser and guess "c" , "a" and "t" to see "Finished"
//playing -->Guesses left:3 
//Finished --> great work! you have guessed the right word.


const Hangman = function(word, remainingGuesses){
    this.originalword = word 
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
}

Hangman.prototype.calculateStatus = function() {

    //Approach 1.
    const finished = this.word.every((letter) =>{
        return this.guessedLetters.includes(letter)
    })

    //Approach 2.
    // const lettersUnGuessed = this.word.filter((letter) => {
    //     return !this.guessedLetters.includes(letter)
    // })
    //const finished = lettersUnGuessed.length === 0
    //Approach 3.
    // let finished = true
    // this.word.forEach((letter) => {
    //     if(this.guessedLetters.includes(letter)){
    //         finished = true
    //     }else{
    //         finished = false
    //     }
    // })

    if(this.remainingGuesses === 0){
        this.status = 'failed'
        //console.log(`Failed !!`)
        //console.log(`Nice try! the word was ${this.originalword}`)
    } else if(finished) {
        this.status = 'finished'
        //console.log(`Great Work you have successfully guessed the word!!`)
    } else {
        this.status = 'playing'
        //console.log(`Guesses left: ${this.remainingGuesses}`)
    }
}

Hangman.prototype.getStatusMessage = function(){
    if(this.status ==='playing'){
        return `Guesses left: ${this.remainingGuesses}`
    }else if(this.status === 'failed'){
        return `Nice try! the word was ${this.originalword}`
    }else{
        return `Great Work you have successfully guessed the word!!`
    }
}
Hangman.prototype.getPuzzle = function() {
    let puzzle = ''

    this.word.forEach((letter) => {
        if(this.guessedLetters.includes(letter) || letter === ' '){
            puzzle += letter
        }else{
            puzzle += '*'
        }
    })
    return puzzle
}

Hangman.prototype.makeGuess = function(guess) {
    guess = guess.toLowerCase()

    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)
    if(this.status !== 'playing'){
        return 
    }
    if(isUnique){
        this.guessedLetters.push(guess)
    }
    if(isUnique && isBadGuess){
        this.remainingGuesses-- 
    }

    this.calculateStatus()
}   


