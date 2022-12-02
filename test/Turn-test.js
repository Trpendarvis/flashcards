const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card.js')
const Turn = require('../src/Turn.js')


describe('Turn', function() {

  it("should be a function and have two arguments", function() {
    const turn = new Turn("test1", {"correctAnswer": "test1"})
    expect(turn.userGuess).to.equal("test1")
  }) 

  it("should have a card object for current card", function() {
    const card = new Card(1,"test question",["answer1","answer2","answer3"],"correctAnswer1")
    const turn = new Turn("correctAnswer1", {"correctAnswer": "correctAnswer1"})
    expect(turn.userGuess).to.equal("correctAnswer1")
  })

  it("should have a method that returns the guess", function(){
    const turn = new Turn("test2", {"id": 1, "correctAnswer": "test2"})
    expect(turn.returnGuess()).to.deep.equal("test2")
  })

  it("should have a method that returns the card", function() {
    const card = new Card(1,"test question",["answer1","answer2","answer3"],"correctAnswer1")
    const turn = new Turn("correctAnswer1", card)
    expect(turn.returnCard()).to.deep.equal(card)
  })

  it("should have a method that returns a boolean for correct guess or not", function(){
    const turn = new Turn("wrongGuess", {"id": 1, "correctAnswer": "correctGuess"})
    expect(turn.evaluateGuess()).to.equal(false)
  })

  it("method that returns 'correct'/'incorrect' based on correctness of user guess", function(){
    const turn = new Turn("correctGuess", {"id": 1, "question": "this is a test question", "answers": ["answer1","answer2","answer3"],"correctAnswer": "correctGuess"})
    expect(turn.giveFeedback()).to.deep.equal("Correct!")
  })
})
