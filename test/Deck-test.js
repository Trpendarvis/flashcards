const chai = require('chai')
const expect = chai.expect

const Deck = require('../src/Deck.js')
const Card = require('../src/Card.js')




describe("Deck", function() {
    let card1 = new Card (1, "random question1", ["r1Guess1", "r1Guess2", "r1Guess3"], "r1Guess3")
    let card2 = new Card (1, "random question2", ["r2Guess1", "r2Guess2", "r2Guess3"], "r2Guess3")
    let card3 = new Card (1, "random question3", ["r3Guess1", "r3Guess2", "r3Guess3"], "r3Guess3")
    let card4 = new Card (1, "random question4", ["r4Guess1", "r4Guess2", "r4Guess3"], "r4Guess3")
    let cards = [card1, card2, card3, card4]
    let deck = new Deck(cards)

})

it("Should be a function", function() {
    expect(Deck).to.be.a("function")
})

it("Should be a class", function() {
    expect(deck).to.be.an.instanceOf(Deck)
})