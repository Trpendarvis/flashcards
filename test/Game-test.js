const chai = require('chai')
const expect = chai.expect

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const util = require('../src/util');
const Game = require('../src/Game');

describe('Game', function() {

    it('should be a function', function() {
      const game = new Game();
      expect(Game).to.be.a('function');
    });
});