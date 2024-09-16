// reverve string
let name = "DAVE";
// it will be EVAD in reverse
console.log(name);

let reverse = name.split("").reverse().join("");
console.log(reverse);

// count characters in string
let character = "COUNT";
console.log(character.length);

// Capitalize first letters of a sentence
let sentence = "how are you doing today";
let words = sentence.split(" ");
let capitalizedWords = words.map(
  (word) => word.charAt(0).toUpperCase() + word.slice(1)
);
let capitalizedSentence = capitalizedWords.join(" ");
console.log(capitalizedSentence);
