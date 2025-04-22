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
let index = 0;
let heroes = "Elemental Hero";
let country = [
  { name: "USA", population: 331002651 },
  { name: "Canada", population: 37742154 },
  { name: "Mexico", population: 127575529 },
];
/***************************** CODE STARTS **********************************/
// getName = (name) => {
//   while (true) {
//     name = prompt("What is your name?");
//     if (name === "jaden") {
//       console.log(`Hello, ${name}`);
//       break;
//     } else {
//       console.log("Error, try again!");
//     }
//   }
// };

// getName();

getSum = (n1, n2) => n1 + n2;
console.log(getSum(5, 5));
getInfo = (name) => `Hello, ${name}`;
console.log(getInfo("Jaden"));

getSum2 = (num1, num2) => {
  return num1 + num2;
};

getAnswer = () => {
  return getSum2(5, 2) * 2;
};

console.log(getAnswer());

/****
 * end{code}
 * ***/

for (i = 0; i < alphabets.length; i++) {
  console.log(alphabets[i]);
  if (alphabets[i] === "J") {
    console.log("Found J at index:" + i);
    break;
  }
}
while (index < colors.length) {
  console.log(index + " " + colors[index]);
  index++;
  if (colors[index] == "green") {
    console.log("Found red at index:" + index);
    break;
  }
}
