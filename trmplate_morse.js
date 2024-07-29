const latinToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

// Etape 1
function get_latin_character_list(text) {
  return text.split("");
}

let result = get_latin_character_list("Hello World");
// console.log(result);

// Etape 2

function translate_latin_character(character) {
  return latinToMorse[character.toUpperCase()];
}

// console.log(translate_latin_character("A"));

// Etape 3

function encode(text) {
  let character_list = get_latin_character_list(text);
  tab_result = character_list.map(translate_latin_character);
  return tab_result;
}

let result1 = encode("Hello World");

// console.log(result1);

// Etape 4

const morseToLatin = {
  "-": "T",
  "--": "M",
  "---": "O",
  "--.": "G",
  "--.-": "Q",
  "--..": "Z",
  "-.": "N",
  "-.-": "K",
  "-.--": "Y",
  "-.-.": "C",
  "-..": "D",
  "-..-": "X",
  "-...": "B",
  ".": "E",
  ".-": "A",
  ".--": "W",
  ".---": "J",
  ".--.": "P",
  ".-.": "R",
  ".-..": "L",
  "..": "I",
  "..-": "U",
  "..-.": "F",
  "...": "S",
  "...-": "V",
  "....": "H",
};

function get_morse_character_list(text) {
  return text.split(" ");
}
let result2 = get_morse_character_list(".- .-.. --- / .-- --- .-. .-.. -..");
// console.log(result2);

function translate_morse_character(morse) {
  return morseToLatin[morse];
}

// console.log(translate_morse_character(".-"));

function decode(morse_text) {
  let words = morse_text.split(" / ");
  let decode_words = words.map((word) => {
    let characters = get_morse_character_list(word);
    let tab_result1 = characters.map(translate_morse_character);
    return tab_result1.join("");
  });
  return decode_words.join(" ");
}

let result3 = decode(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
console.log(result3);

// code avec le html mais qui reste en commentaire

// const latinToMorse = {
//   A: ".-",
//   B: "-...",
//   C: "-.-.",
//   D: "-..",
//   E: ".",
//   F: "..-.",
//   G: "--.",
//   H: "....",
//   I: "..",
//   J: ".---",
//   K: "-.-",
//   L: ".-..",
//   M: "--",
//   N: "-.",
//   O: "---",
//   P: ".--.",
//   Q: "--.-",
//   R: ".-.",
//   S: "...",
//   T: "-",
//   U: "..-",
//   V: "...-",
//   W: ".--",
//   X: "-..-",
//   Y: "-.--",
//   Z: "--..",
// };

// function get_latin_character_list(text) {
//   return text.split("");
// }

// function translate_latin_character(character) {
//   return latinToMorse[character.toUpperCase()] || "";
// }

// function encode(text) {
//   let character_list = get_latin_character_list(text);
//   return character_list.map(translate_latin_character).join(" ");
// }

// const morseToLatin = {
//   "-": "T",
//   "--": "M",
//   "---": "O",
//   "--.": "G",
//   "--.-": "Q",
//   "--..": "Z",
//   "-.": "N",
//   "-.-": "K",
//   "-.--": "Y",
//   "-.-.": "C",
//   "-..": "D",
//   "-..-": "X",
//   "-...": "B",
//   ".": "E",
//   ".-": "A",
//   ".--": "W",
//   ".---": "J",
//   ".--.": "P",
//   ".-.": "R",
//   ".-..": "L",
//   "..": "I",
//   "..-": "U",
//   "..-.": "F",
//   "...": "S",
//   "...-": "V",
//   "....": "H",
// };

// function get_morse_character_list(text) {
//   return text.split(" ");
// }

// function translate_morse_character(morse) {
//   return morseToLatin[morse] || "";
// }

// function decode(morse_text) {
//   let words = morse_text.split(" / ");
//   return words
//     .map((word) => {
//       let characters = get_morse_character_list(word);
//       return characters.map(translate_morse_character).join("");
//     })
//     .join(" ");
// }

// function translateToMorse() {
//   let text = document.getElementById("text-input").value;
//   let result = encode(text);
//   document.getElementById("result").value = result;
// }

// function translateToText() {
//   let morse = document.getElementById("morse-input").value;
//   let result = decode(morse);
//   document.getElementById("result").value = result;
// }
