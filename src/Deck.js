class Deck {
    constructor(cards) {
        this.cards = cards
    }
    trackCards() {
        let count = this.cards.length
        return count
    }
}

module.exports = Deck