var helper = require('../lib/helper');

var overrides = {};

var adverbs = {
  'malrapide': 'marapiyde'
};

var nouns = {

};

var pronouns = {
  'ĝin': 'dżijn',
  'ŝin': 'szjin'
};

var interrogatives = {
  'kiel': 'kijel',
  'kial': 'kijal',
  'kiom': 'kijom',
  'kien': 'kijen',
  'kiam': 'kijam',
  'kies': 'kijes',
  'kiu': 'kiju',
  'kie': 'kije',
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
  'ial': 'ial',
  'iom': 'iom',
  'ien': 'ijen',
  'iam': 'iam',
  'ies': 'ijes',
  'iu': 'iju',
  'ie': 'ije',
  'io': 'io',
  'ia': 'ia',

  'ĉiel': 'cijel',
  'ĉial': 'czjal',
  'ĉiom': 'czjom',
  'ĉien': 'czjen',
  'ĉiam': 'czjam',
  'ĉies': 'czjjes',
  'ĉiu': 'czjiu',
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

var others = {
  'jes': 'jjes'
};

helper.extend(overrides, adverbs);
helper.extend(overrides, nouns);
helper.extend(overrides, pronouns);
helper.extend(overrides, interrogatives);
helper.extend(overrides, others);

module.exports = overrides;