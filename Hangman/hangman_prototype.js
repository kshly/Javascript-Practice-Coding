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