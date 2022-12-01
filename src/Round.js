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
        // console.log("userGuess at take turn", userGuess) - returning undefined
        if (!currentTurn.evaluateGuess()) {
            this.incorrectGuesses.push(this.deck.cards[this.turns].id)
        }
        this.turns++
        this.returnCurrentCard()
        return currentTurn.giveFeedback()
    }
}

module.exports = Round