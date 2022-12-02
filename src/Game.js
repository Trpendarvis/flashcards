const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require("./Round.js")
const Deck = require("./Deck.js")
const Card = require("./Card.js")


class Game {
  constructor() {
    this.round
    this.roundCounter = 0
    this.deck = []
  }
  
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.trackCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  currentRound() {
    return this.roundCounter++;
  }

  createCards() {
    let deckWithCards = prototypeQuestions.map((cardDataObj) => {
      return new Card(cardDataObj.id, cardDataObj.question, cardDataObj.answers, cardDataObj.correctAnswers)
    });
    return deckWithCards;
  }

  createDeck(cards) {
    const deck = new Deck(cards);
    return deck;
  }

  createRound(deck) {
    this.round = new Round(deck);
    return this.round;
  }

  start() {
    const cards = this.createCards();
    const deck = this.createDeck(cards);
    const round = this.createRound(deck);
    this.printMessage(deck, round);
    this.printQuestion(round);
  }
}
module.exports = Game;