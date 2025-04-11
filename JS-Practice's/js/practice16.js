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
// getName = (name1) => {
//   name1 = "Jaden";
//   return `Hello, ${name1}`;
// };
// console.log(getName());
// getName2 = () => "hello";
// console.log(getName2());

// getSum = (n1, n2) => (n1 + n2) * 2;
// console.log(getSum(5, 5));

// getCorrectResults = (a, b, c) => {
//   a = 5;
//   b = 23;
//   c = a + b;
//   //   console.log(c);
//   if (c === 21) {
//     console.log("Correct");
//   } else {
//     console.log("Incorrect");
//   }
// };
// getCorrectResults();

// const cars = {
//   car1: "Toyota",
//   car2: "Honda",
//   car3: "Ford",
// };
// const bussines = {
//   bussines1: "Apple",
//   bussines2: "Google",
//   bussines3: "Amazon",
//   companies: () => {
//     console.log(
//       `My Companies, \n ${bussines.bussines1} \n${bussines.bussines2} \n ${bussines.bussines3}`.toUpperCase()
//     );
//   },
// };
// const callAllCars = {
//   CallAllCars: () => {
//     console.log(
//       `My cars:\n - ${cars.car1} \n - ${cars.car2} \n  - ${cars.car3}`
//     );
//   },
// };
// const carsAndBussines = { ...cars, ...bussines };
// console.log(carsAndBussines);

// callAllCars.CallAllCars.call(cars);
// bussines.companies();
// for (i = 0; i < colors.length; i++) {
//   console.log("Colors: " + colors[i] + " Index: " + i);
//   if (colors[i] === "blue") {
//     console.log("Blue is the best color");
//     break;
//   } else if (colors[i] === "red") {
//     console.log("Red is  the best color");
//     break;
//   } else {
//     console.log("You select the color, " + colors[i]);
//     console.log("This color is not the best");
//     break;
//   }
// }

// for (i = 0; i < country.length; i++) {
//   console.log(
//     "Country: " +
//       country[i].name +
//       " " +
//       "\n Population: " +
//       country[i].population
//   );
// }
for (i = 0; i < alphabets.length; i++) {
  console.log(i + " " + "Alphabet: " + alphabets[i]);
  if (alphabets[i] === "J") {
    console.log("J is the best alphabet");
    console.log("J is in the index of, " + i);
    break;
  }
}
console.log("\n");
for (i = 0; i < heroes.length; i++) {
  console.log(heroes.charAt(i));
  if (heroes[i] === "E") {
    console.log("\tFound the Letter E!");

    // break;
  }
}
