getName = (firstName, lastName) => {
  firstName = "Jaden";
  lastName = "Yuki";

  console.log(`My name is, ${firstName} ${lastName}`);
};
getName();

addNum = (n1, n2) => {
  return n1 + n2;
};
console.log(addNum(5, 3));

let x = getSum(5, 5);

function getSum(a, b) {
  return a + b;
}
console.log(x);

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(`My name is ${person.name}`);

const myCar = {
  brand: "Toyota",
  model: "Camry",
  year: 2015,
  details: function () {
    console.log(`My car is a ${this.year} ${this.brand} ${this.model}`);
  },
};
myCar.details();

const person2 = {
  getPerson: function () {
    console.log(`My name is ${this.name}`);
  },
};
person2.getPerson.call(person);
console.log("__________________________________");
let colors = ["red", "green", "blue", "yellow"];
let colors2 = ["pink", "black", "gray", "orange"];
let fruits = ["apple", "banana", "orange", "grapes"];

let country = [
  { name: "USA", population: 331002651 },
  { name: "Canada", population: 37742154 },
  { name: "Mexico", population: 127575529 },
];

let i = 0;

while (i < 5) {
  console.log(i + colors[i]);
  i++;
}

let e = 0;

while (e < colors.length) {
  // console.log(e);
  console.log(e + " " + colors[e]);
  e++;
}
console.log("\n");
for (let i = 0; i < fruits.length; i++) {
  console.log(`index: ${i}`);
  console.log(`fruit: ${fruits[i]}`);
}

console.log("\n");
for (const iterator of colors2) {
  console.log(iterator);
}

console.log("\n");
for (let i = 0; i < country.length; i++) {
  console.log(
    i + " " + country[i].name,
    "population: " + country[i].population
  );
}
