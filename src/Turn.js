class Turn {
    constructor(card, userGuess) {
        this.card = card
        this.userGuess = userGuess
    }
    returnGuess() {
        return this.userGuess
    }
    returnCard() {
        return this.card
    }
    evaluateGuess() {
        if(this.userGuess === this.card.correctAnswer) {
            return true
        } else {
            return false
        }
    }
    giveFeedback() {
        if(this.evaluateGuess()) {
            return "Correct!"
        } else {
            return "Incorrect :("
        }
    }
}

module.exports = Turn