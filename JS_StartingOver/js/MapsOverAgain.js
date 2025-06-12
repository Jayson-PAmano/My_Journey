console.log("%cJavaScript Maps", "color:red; font-size:2rem;");
//forEach sample
// let letters = ["a", "b", "c"];
// let letters2 = ["d", "e", "f"];

// for (let i = 0; i < letters.length; i++) {
//   logLetters(letters[i], i);
// }
// function logLetters(element, index) {
//   console.log(`index: ${index}`);
//   console.log(`element: ${element}`);
// }

// letters2.forEach((element, index) => {
//   console.log(`index: ${index}`);
//   console.log(`element: ${element}`);
// });

let numbers = [1, 2, 3, 4];
let numbers2 = [4, 5, 6, 7];
let numbers3 = [8, 9, 10, 11];
let squared = [];

for (let i = 0; i < numbers.length; i++) {
  console.log((squared[i] = numbers[i] * numbers[i]));
}
//using function
function sq(value) {
  return value * value;
}
const squared2 = numbers.map(sq);

console.log(squared2);
//using maps
const squared3 = numbers3.map((value) => {
  return value * value;
});
console.log(squared3);
