var expect = require('expect.js');
var eopl = require('../eopl');

describe('fragment overrides', function() {
  it('should replace words containing cil with cyl', function() {
    var input = 'Esperanto estas facila lingvo.';
    var expected = 'Esperanto estas facyla liyngwo.';

    expect(eopl.transcribe(input)).to.equal(expected);
  });

  it('should replace words ending ci with cyj', function() {
    var input = 'mi povas prononci ĝin';
    var expected = 'mi powas prononcyj dżiin';

    expect(eopl.transcribe(input)).to.equal(expected);
    expect(eopl.transcribe('xxxcixxx')).to.equal('xxxcixxx');
  });

  it('should replace words containing ling with liyng', function() {
    var input = 'la bona lingvo';
    var expected = 'la bona liyngwo';

    expect(eopl.transcribe(input)).to.equal(expected);
  });

  it('should replace words ending ide with ijde', function() {
    var input = 'mi parolas malrapide, mi petas';
    var expected = 'mi parolas malrapijde, mi petas';

    expect(eopl.transcribe(input)).to.equal(expected);
    expect(eopl.transcribe('xxxidexxx')).to.equal('xxxidexxx');
  });

  it('should replace words ending io/ioy/ioyn with ijo/ijoj/ijojn', function() {
    expect(eopl.transcribe('la germanio')).to.equal('la germanijo');
    expect(eopl.transcribe('la germanioj')).to.equal('la germanijoj');
    expect(eopl.transcribe('la germaniojn')).to.equal('la germanijojn');
    expect(eopl.transcribe('xgermaniox xgermaniojx xgermaniojnx')).to.equal('xgermaniox xgermanioyx xgermanioynx');
  });

  it('should replace words ending feyo/feyoy/feyoyn with fejo/feyoj/feyojn', function() {
    expect(eopl.transcribe('la kafejo')).to.equal('la kafejo');
    expect(eopl.transcribe('la kafejoj')).to.equal('la kafeyoj');
    expect(eopl.transcribe('la kafejojn')).to.equal('la kafeyojn');
    expect(eopl.transcribe('xkafejox xkafejojx xkafejojnx')).to.equal('xkafeyox xkafeyoyx xkafeyoynx');
  });
});