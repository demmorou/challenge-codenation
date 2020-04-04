const cesar = (text, move) => {
  let out = "";

  for (let i = 0; i < text.length; i++) {
    const ascii = text.charCodeAt(i);
    if (ascii > 96 && ascii < 123) {
      if (ascii - move < 97) {
        out += String.fromCharCode(ascii - move + 122 - 97 + 1);
      } else {
        out += String.fromCharCode(ascii - move);
      }
    } else {
      out += String.fromCharCode(ascii);
    }
  }
  return out;
};

module.exports = cesar;
