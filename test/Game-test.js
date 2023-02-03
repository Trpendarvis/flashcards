const chai = require('chai')
const expect = chai.expect

const data = require('../src/data');
const prototypeQuestions = data.prototypeData
const util = require('../src/util')
const Game = require('../src/Game')
const Deck = require('../src/Deck')
const Card = require("../src/Card")
const Round = require("../src/Round")


describe("Game", () => {
  let game, deck
  beforeEach(() => {
    deck = new Deck()
    deck.cards = [{id: 1, question: 'What is 1 + 1?', answers: ['2'], correctAnswers: '2'},
                  {id: 2, question: 'What is 2 + 2?', answers: ['4'], correctAnswers: '4'}]
    game = new Game()
  })

  it('should be a function', function() {
    const game = new Game()
    expect(Game).to.be.a('function')
  })
  it("should print the correct message", () => {
    let log = ''
    console.log = (message) => { log += message }
    game.printMessage(deck, {})
    expect(log).equal("Welcome to FlashCards! You are playing with 2 cards.\n-----------------------------------------------------------------------");
  })

  it("creates an array of cards", () => {
    const cards = game.createCards()
    expect(cards).equal(Array)
    cards.forEach((card) => {
    expect(card).equal(Card)
    })
  })
})
