var letters = {
  a: 'a',
  b: 'b',
  c: 'c',
  ĉ: 'cz',
  d: 'd',
  e: 'e',
  f: 'f',
  g: 'g',
  ĝ: 'dż',
  h: 'h',
  ĥ: 'ch',
  i: 'i',
  j: 'y',
  ĵ: 'rz',
  k: 'k',
  l: 'l',
  m: 'm',
  n: 'n',
  o: 'o',
  p: 'p',
  r: 'r',
  s: 's',
  ŝ: 'sz',
  t: 't',
  u: 'u',
  ŭ: 'ł',
  v: 'w',
  z: 'z'
};

for (var letter in letters) {
  var key = letter.toUpperCase();
  var value = letters[letter];
  letters[key] = value[0].toUpperCase() + (value[1] || '');
}

module.exports = letters;