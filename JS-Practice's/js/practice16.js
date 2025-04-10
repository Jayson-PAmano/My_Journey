getName = (name1) => {
  name1 = "Jaden";
  return `Hello, ${name1}`;
};
console.log(getName());
getName2 = () => "hello";
console.log(getName2());

getSum = (n1, n2) => (n1 + n2) * 2;
console.log(getSum(5, 5));

getCorrectResults = (a, b, c) => {
  a = 5;
  b = 23;
  c = a + b;
  //   console.log(c);
  if (c === 21) {
    console.log("Correct");
  } else {
    console.log("Incorrect");
  }
};
getCorrectResults();

const cars = {
  car1: "Toyota",
  car2: "Honda",
  car3: "Ford",
};
const bussines = {
  bussines1: "Apple",
  bussines2: "Google",
  bussines3: "Amazon",
};
const carsAndBussines = { ...cars, ...bussines };
console.log(carsAndBussines);

let colors = ["red", "green", "blue", "yellow"];
let colors2 = ["pink", "black", "gray", "orange"];
let fruits = ["apple", "banana", "orange", "grapes"];

let country = [
  { name: "USA", population: 331002651 },
  { name: "Canada", population: 37742154 },
  { name: "Mexico", population: 127575529 },
];
