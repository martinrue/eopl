var expect = require('expect.js');
var eopl = require('../eopl');

var common = [
  {
    input: 'Kiel vi fartas?',
    expected: 'Kiyel wi fartas?'
  },
  {
    input: 'Ĉu vi parolas Esperanton?',
    expected: 'Czu wi parolas Esperanton?'
  },
  {
    input: 'Esperanto estas tre facila kaj mojosa lingvo!',
    expected: 'Esperanto estas tre facyla kay moyosa liyngwo!'
  },
  {
    input: 'De kie vi estas?',
    expected: 'De kiye wi estas?'
  },
  {
    input: 'Agrablas renkonti vin.',
    expected: 'Agrablas renkonti win.'
  },
  {
    input: 'Parolu pli malrapide, mi petas.',
    expected: 'Parolu pli marapiyde, mi petas.'
  },
  {
    input: 'Kiel oni diras tion en Esperanto?',
    expected: 'Kiyel oni diras tion en Esperanto?'
  },
  {
    input: 'Unu lingvo neniam sufiĉas.',
    expected: 'Unu liyngwo nenijam suficzas.'
  },
  {
    input: 'Jes! Mi tre ŝatas ĝin!',
    expected: 'Yes! Mi tre szatas dżiin!'
  },
  {
    input: 'Ĝi estas grandega.',
    expected: 'Dżi estas grandega.'
  },
  {
    input: 'Mi ne havas blankan ĉemizon.',
    expected: 'Mi ne hawas blankan czemizon.'
  },
  {
    input: 'Mi ne havas blankajn ĉemizojn.',
    expected: 'Mi ne hawas blankayn czemizoyn.'
  },
  {
    input: 'La knabo kaj la knabino venas el Eŭropo. Ili ŝatas manĝi manĝaĵon.',
    expected: 'La knabo kay la knabino wenas el Ełropo. Ili szatas mandżi mandżarzon.'
  },
  {
    input: 'Kiel. Kial. Kiom. Kien. Kiam. Kies. Kiu. Kie. Kio. Kia.',
    expected: 'Kiyel. Kiyal. Kijom. Kijen. Kijam. Kiyes. Kiju. Kiye. Kijo. Kija.'
  },
  {
    input: 'Ĉiel. Ĉial. Ĉiom. Ĉien. Ĉiam. Ĉies. Ĉiu. Ĉie. Ĉio. Ĉia.',
    expected: 'Ciyel. Ciyal. Cijom. Cijen. Cijam. Cijes. Ciju. Cije. Cijo. Cija.'
  },
  {
    input: 'Iel. Ial. Iom. Ien. Iam. Ies. Iu. Ie. Io. Ia.',
    expected: 'Ijel. Ijal. Ijom. Ijen. Ijam. Ijes. Iju. Ije. Ijo. Ija.'
  },
  {
    input: 'Tiel. Tial. Tiom. Tien. Tiam. Ties. Tiu. Tie. Tio. Tia.',
    expected: 'Tijel. Tijal. Tijom. Tijen. Tijam. Tijes. Tiju. Tije. Tijo. Tija.'
  },
  {
    input: 'Neniel. Nenial. Neniom. Nenien. Neniam. Nenies. Neniu. Nenie. Nenio. Nenia.',
    expected: 'Nenijel. Nenijal. Nenijom. Nenijen. Nenijam. Nenijes. Neniju. Nenije. Nenijo. Nenija.'
  },
  {
    input: 'Unu. Du. Tri. Kvar. Kvin. Ses. Sep. Ok. Naŭ. Dek.',
    expected: 'Unu. Du. Tri. Kjvar. Kjvin. Ses. Sep. Ohk. Nał. Dek.'
  }
];

describe('eopl', function() {
  it('should correctly transcribe common phrases', function() {
    common.forEach(function(phrase) {
      expect(eopl.transcribe(phrase.input)).to.equal(phrase.expected);
    });
  });
});