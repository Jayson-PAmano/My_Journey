let letters = ["a", "b", "c", "d"];
let letters2 = ["e", "f", "g", "h"];
for (i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}

for (i = letters.length - 0; i >= 0; i--) {
  console.log(letters[i]);
}
console.log("\n");
for (i = 0; i < letters2.length; i++) {
  logLetters([i], i);
}

function logLetters(e, i) {
  console.log(i);
  console.log(e);
}
