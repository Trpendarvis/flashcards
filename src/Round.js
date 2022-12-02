const Turn = require("./Turn.js")

class Round {
    constructor(deck) {
        this.deck = deck
        this.turns = 0
        this.incorrectGuesses = []
    }
    
    returnCurrentCard() {
        return this.deck.cards[this.turns]
    }

    takeTurn(userGuess) {
        let currentTurn = new Turn(this.deck.cards[this.turns], userGuess)
        if (!currentTurn.evaluateGuess()) {
            this.incorrectGuesses.push(this.deck.cards[this.turns].id)
        }
        this.turns++
        return currentTurn.giveFeedback()
    }
    
    calculatePercentCorrect() {
        let percentCorrect = (this.incorrectGuesses.length / this.turns -1) * -100
        return percentCorrect
    }

    endRound() {
        console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
        return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }
}

module.exports = Round