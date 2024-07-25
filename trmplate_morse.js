// EXO MORSE
// ANNEXES
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

// ETAPE 1
// Fonction getLatinCharacterList va prendre en paramètre du texte et retourner un tableau contenant chaque caractère.
function getLatinCharacterList(text) {
  return text.split("");
}

let result = getLatinCharacterList("Hello World");
console.log(result);

// ETAPE 2
// Fonction translateLatinCharacter qui prend un paramètre un caractère et renvoie sa correspondance en morse.
function translateLatinCharacter0(character) {
  return latinToMorse[character];
}

// Version qui fonctionne aussi avec les minuscules - En convertissant le caractère en majuscule
function translateLatinCharacter(character) {
  let charMaj = character.toUpperCase();
  return latinToMorse[charMaj];
}

let result2 = translateLatinCharacter("a");
console.log(result2);

// ETAPE 3
// Fonction encode qui prend en paramètre du texte et qui va utiliser la fonction de l’étape 1, pour chaque caractère, appliquer la fonction de l’étape 2 et ainsi récupérer son équivalent morse.
function encode(text) {
  let characterList = getLatinCharacterList(text);
  // console.log(characterList)
  let tabResult = [];
  for (i = 0; i < characterList.length; i++) {
    // recuperer le caractere courant - a la position i dans characterList
    let c = characterList[i];
    // Le traduire et le stocker dans une variable
    let cTranslated = translateLatinCharacter(c);
    // L'ajouter au tableau résultat
    tabResult.push(cTranslated);
  }
  return tabResult;
}

// Version avec map, qui crée un nouveau tableau avec les résultats de l'appel
// d'une fonction fournie sur chaque élément du tableau appelant.
function encodeMap(text) {
  let characterList = getLatinCharacterList(text);
  let tabResult = characterList.map(translateLatinCharacter);
  return tabResult;
}

let result3 = encode("Hello World");
console.log(result3);

// ETAPE 4
// 4.1. Modifier la fonction encode pour qu'elle prenne en compte les espaces
function encodeNextGen(text) {
  let characterList = getLatinCharacterList(text);
  let tabResult = [];
  for (i = 0; i < characterList.length; i++) {
    let c = characterList[i];
    let cTranslated = "";
    // pas besoin d'accolade si une seule instruction dans un if/else
    if (c == " ") cTranslated = "/";
    else cTranslated = translateLatinCharacter(c);
    tabResult.push(cTranslated);
  }
  return tabResult;
}

let result4 = encodeNextGen("Hello World");
console.log(result4);
