var expect = require('expect.js');
var eopl = require('../eopl');

describe('letters', function() {
  it('should transcribe lower case to correct Polish lower case', function() {
    var input = 'abcĉdefgĝhĥijĵklmnoprsŝtuŭvz';
    var expected = 'abcczdefgdżhchiyrzklmnoprssztułwz';

    expect(eopl.transcribe(input)).to.equal(expected);
  });

  it('should transcribe upper case to correct Polish upper case', function() {
    var input = 'ABCĈDEFGĜHĤIJĴKLMNOPRSŜTUŬVZ';
    var expected = 'ABCCzDEFGDżHChIYRzKLMNOPRSSzTUŁWZ';

    expect(eopl.transcribe(input)).to.equal(expected);
  });

  it('should transcribe mixed case to correct Polish mixed case', function() {
    var input = 'aBcĈdEfGĝHĥIjĴkLmNoPrSŝTuŬvZ';
    var expected = 'aBcCzdEfGdżHchIyRzkLmNoPrSszTuŁwZ';

    expect(eopl.transcribe(input)).to.equal(expected);
  });

  it('should transcribe successive matching characters', function() {
    var input = 'iiiŝŝŝjjj';
    var expected = 'iiiszszszyyy';

    expect(eopl.transcribe(input)).to.equal(expected);
  });

  it('should preserve casing and punctuation', function() {
    var input = 'Saluton, kiel vi fartas? Mi fartas bone!';
    var expected = 'Saluton, kijel wi fartas? Mi fartas bone!';

    expect(eopl.transcribe(input)).to.equal(expected);
  });
});