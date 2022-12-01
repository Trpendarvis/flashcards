const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card.js')
const Deck = require('../src/Deck.js')
const Turn = require('../src/Turn.js')
const Round = require('../src/Round.js')

describe("Round", function() {
    let card1
    let card2
    let card3
    let card4
    let deck
    let turn
    let round
  

    beforeEach(() => {
    card1 = new Card (1, "random question1", ["r1Guess1", "r1Guess2", "r1Guess3"], "r1Guess3")
    card2 = new Card (2, "random question2", ["r2Guess1", "r2Guess2", "r2Guess3"], "r2Guess3")
    card3 = new Card (3, "random question3", ["r3Guess1", "r3Guess2", "r3Guess3"], "r3Guess3")
    card4 = new Card (4, "random question4", ["r4Guess1", "r4Guess2", "r4Guess3"], "r4Guess3")
    deck = new Deck([card1, card2, card3, card4])
    turn = new Turn(card1, "r1Guess3")
    round = new Round(deck)
    // console.log("card1 is?", card1)
    })

    it("Should be a function", function() {
        expect(Round).to.be.a("function")
    })

    it("Should be a class", function() {
        expect(round).to.be.an.instanceOf(Round)
    })

    it("should have a deck of cards", function() {
        expect(round.deck).to.equal(deck)
        // console.log("this should be the deck", deck)
    })

    it("Should return the current card in the deck", function() {
        expect(round.returnCurrentCard()).to.equal(card1)
    })

    it("Should keep track of turns", function() {
        expect(round.turns).to.equal(0)
        round.takeTurn()
        expect(round.turns).to.equal(1)
    })

    it('Should instantiate a new Turn', function() {
        expect(turn).to.be.an.instanceOf(Turn)
    })
    
    it("Should store incorrect guesses in an array", function(){
        expect(round.incorrectGuesses).to.deep.equal([])
        round.takeTurn("r1Guess1")
        expect(round.incorrectGuesses).to.deep.equal([1])
        round.takeTurn("r1Guess2")
        expect(round.incorrectGuesses).to.deep.equal([1])
    })

})