var rules = require('./rules/rules');

var getOverride = function(word) {
  var bare = word.toLowerCase().replace(/[.,!?]/, '');
  var match = rules.words[bare];

  if (match) {
    var override = word.toLowerCase().replace(bare, match).split('');

    if (word[0] === word[0].toUpperCase()) {
      override[0] = override[0].toUpperCase();
    }

    return override.join('');
  }
};

var transcribeWord = function(word) {
  var override = getOverride(word);

  if (override) {
    return override;
  }

  word = word.split('').map(function(letter) {
    return rules.letters[letter] || letter;
  }).join('');

  rules.fragments.forEach(function(rule) {
    word = word.replace(rule.match, rule.replace);
  });

  return word;
};

var transcribe = function(sentence) {
  return sentence.split(' ').filter(function(word) {
    return word.length;
  }).map(transcribeWord).join(' ');
};

module.exports = {
  transcribe: transcribe
};