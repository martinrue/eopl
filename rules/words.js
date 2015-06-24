var helper = require('../lib/helper');

var overrides = {};

var pronouns = {
  'ĝin': 'dżiin',
  'ŝin': 'szjin'
};

var numbers = {
  'unu': 'unu',
  'du': 'du',
  'tri': 'tri',
  'kvar': 'kjvar',
  'kvin': 'kjvin',
  'ses': 'ses',
  'sep': 'sep',
  'ok': 'ohk',
  'naŭ': 'nał',
  'dek': 'dek'
};

var interrogatives = {
  'kiel': 'kiyel',
  'kial': 'kiyal',
  'kiom': 'kijom',
  'kien': 'kijen',
  'kiam': 'kijam',
  'kies': 'kiyes',
  'kiu': 'kiju',
  'kie': 'kiye',
  'kio': 'kijo',
  'kia': 'kija',

  'tiel': 'tijel',
  'tial': 'tijal',
  'tiom': 'tijom',
  'tien': 'tijen',
  'tiam': 'tijam',
  'ties': 'tijes',
  'tiu': 'tiju',
  'tie': 'tije',
  'tio': 'tijo',
  'tia': 'tija',

  'iel': 'ijel',
  'ial': 'ijal',
  'iom': 'ijom',
  'ien': 'ijen',
  'iam': 'ijam',
  'ies': 'ijes',
  'iu': 'iju',
  'ie': 'ije',
  'io': 'ijo',
  'ia': 'ija',

  'ĉiel': 'ciyel',
  'ĉial': 'ciyal',
  'ĉiom': 'cijom',
  'ĉien': 'cijen',
  'ĉiam': 'cijam',
  'ĉies': 'cijes',
  'ĉiu': 'ciju',
  'ĉie': 'cije',
  'ĉio': 'cijo',
  'ĉia': 'cija',

  'neniel': 'nenijel',
  'nenial': 'nenijal',
  'neniom': 'nenijom',
  'nenien': 'nenijen',
  'neniam': 'nenijam',
  'nenies': 'nenijes',
  'neniu': 'neniju',
  'nenie': 'nenije',
  'nenio': 'nenijo',
  'nenia': 'nenija'
};

helper.extend(overrides, pronouns);
helper.extend(overrides, interrogatives);
helper.extend(overrides, numbers);

module.exports = overrides;