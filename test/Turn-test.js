const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card.js')
const Turn = require('../src/Turn.js')


describe('Turn', function() {

    it('returns the userGuess', () => {
        const card = { question: 'What is 2 + 2?', correctAnswer: '4' }
        const userGuess = '4'
        const turn = new Turn(card, userGuess)
        expect(turn.returnGuess()).to.equal(userGuess)
    })

    it('returns the card', () => {
        const card = { question: 'What is 2 + 2?', correctAnswer: '4' }
        const userGuess = '4'
        const turn = new Turn(card, userGuess)
        expect(turn.returnCard()).to.equal(card)
    })

    it('returns true if userGuess is equal to the correctAnswer', () => {
        const card = { question: 'What is 2 + 2?', correctAnswer: '4' }
        const userGuess = '4'
        const turn = new Turn(card, userGuess)
        expect(turn.evaluateGuess()).to.equal(true)
    })

    it('returns false if userGuess is not equal to the correctAnswer', () => {
        const card = { question: 'What is 2 + 2?', correctAnswer: '4' }
        const userGuess = '5'
        const turn = new Turn(card, userGuess)
        expect(turn.evaluateGuess()).to.equal(false)
    })

    it('returns "Correct!" if evaluateGuess returns true', () => {
        const card = { question: 'What is 2 + 2?', correctAnswer: '4' }
        const userGuess = '4'
        const turn = new Turn(card, userGuess)
        expect(turn.giveFeedback()).to.equal('Correct!')
    })

    it('returns "Incorrect :(" if evaluateGuess returns false', () => {
        const card = { question: 'What is 2 + 2?', correctAnswer: '4' }
        const userGuess = '5'
        const turn = new Turn(card, userGuess)
        expect(turn.giveFeedback()).to.equal('Incorrect :(')
    })
})