# eopl
`eopl` transcribes Esperanto sentences to phonetic Polish.

## Purpose
Commercial TTS engines tend not to support minority languages, particularly constructed languages such as Esperanto. It turns out Esperanto shares lots of sounds with Polish. By transcribing Esperanto to Polish, we can make commercial TTS engines give us a good approximation for spoken Esperanto.

## Usage

```
npm install https://github.com/martinrue/eopl/tarball/master
```

## Usage

```javascript
var eopl = require('eopl');
console.log(eopl.transcribe('Ĉu vi ŝatas Esperanton? Esperanto estas facila lingvo.'));
// Czu wi szatas Esperanton? Esperanto estas facjla lijngwo.
```

Playing the output using a commercial TTS engine (such as [Acapela](http://www.acapela-group.com)) in a Polish voice produces a reasonable pronunciation of the original Esperanto sentence.

## Engine Differences
The particular word and fragment overrides in this project are aimed at the [Acapela](http://www.acapela-group.com) engine. As each TTS engine is subtly different, you may need to play with the arrangements if you want to use a different engine.