const Turn = require("./Turn.js")

class Round {
    constructor(deck) {
        this.deck = deck
        this.turns = 0
        this.incorrectGuesses = []
        // console.log("look here",this.incorrectGuesses)
    }
    
    returnCurrentCard() {
        return this.deck.cards[this.turns]
    }

    takeTurn(userGuess) {
        let currentTurn = new Turn(this.deck.cards[this.turns], userGuess)
        // console.log("userGuess at take turn", userGuess) 
        //- returning undefined
        // console.log("Im looking for this!!!", this.deck.cards[this.turns])
        if (!currentTurn.evaluateGuess()) {
            this.incorrectGuesses.push(this.deck.cards[this.turns].id)
        }
        this.turns++
        this.returnCurrentCard()
        return currentTurn.giveFeedback()
    }
    
    calculatePercentCorrect() {
        let percentCorrect = this.incorrectGuesses.length / this.turns * 100
        return percentCorrect
    }

    endRound() {
        return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }
}

module.exports = Round