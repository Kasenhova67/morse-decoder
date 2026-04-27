const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

module.exports = function decode(expr) {
  let res = '';
  const space = '**********';
  const len = 10;

  for (let i = 0; i < expr.length; i += len) {
    const encoded = expr.substr(i, len);
    if (encoded === space) {
      res += ' ';
    }
    const symbol = encoded.replace(/^0+/, '');

    let morse = '';
    for (let j = 0; j < symbol.length; j += 2) {
      const pair = symbol[j] + symbol[j + 1];
      if (pair === '10') {
        morse += '.';
      } else if (pair === '11') {
        morse += '-';
      }
    }
    res += MORSE_TABLE[morse] || '';
  }
  return res;
};
