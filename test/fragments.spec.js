var expect = require('expect.js');
var eopl = require('../eopl');

describe('fragment overrides', function() {
  it('should replace cil with cjl', function() {
    var input = 'Esperanto estas facila lingvo.';
    var expected = 'Esperanto estas facyla liyngwo.';

    expect(eopl.transcribe(input)).to.equal(expected);
  });

  it('should replace ciy with cyj', function() {
    var input = 'mi povas prononci ĝin';
    var expected = 'mi powas prononcyj dżiin';

    expect(eopl.transcribe(input)).to.equal(expected);
  });

  it('should replace ling with liyng', function() {
    var input = 'la bona lingvo';
    var expected = 'la bona liyngwo';

    expect(eopl.transcribe(input)).to.equal(expected);
  });
});