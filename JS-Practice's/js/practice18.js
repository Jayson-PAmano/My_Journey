let colors = ["blue", "green", "red", "yellow"];
let colors2 = ["pink", "black", "gray", "orange"];
let fruits = ["apple", "banana", "orange", "grapes"];
let alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let heroes = "Elemental Hero";
let country = [
  { name: "USA", population: 331002651 },
  { name: "Canada", population: 37742154 },
  { name: "Mexico", population: 127575529 },
];
/***************************** CODE STARTS **********************************/

// getName = () => {
//   let name = prompt("Enter your name");
//   if (name === "jaden") {
//     console.log(`Hello, ${name}`);
//   } else {
//     console.log(`${name} is invalid, Try again!`);
//   }
// };
// getName();

getSum = (n1, n2) => n1 + n2;
console.log(getSum(10, 3));

getResults = (n1, n2) => {
  return n1 + n2;
};
doubleResults = (n1, n2) => {
  return getResults(n1, n2) * 2;
};
console.log(getResults(5, 10));
console.log(doubleResults(5, 10));
