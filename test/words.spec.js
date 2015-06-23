var expect = require('expect.js');
var eopl = require('../eopl');

var words = require('../rules/words');

words.abcd = 'xxxx';

describe('word overrides', function() {
  it('should appear in correct position within output', function() {
    var input = 'aaa abcd zzz abcd aaa';
    var expected = 'aaa xxxx zzz xxxx aaa';

    expect(eopl.transcribe(input)).to.equal(expected);
  });

  it('should not apply when not matched exactly', function() {
    var input = 'aaa abcde zzz bcd aaa';
    var expected = 'aaa abcde zzz bcd aaa';

    expect(eopl.transcribe(input)).to.equal(expected);
  });
});