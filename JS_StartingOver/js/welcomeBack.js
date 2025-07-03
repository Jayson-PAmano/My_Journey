let fruits = ["apple", "orange", "grapes"];
let colors = ["red", "green", "blue", "yellow"];
let counter = 0;
let counter2 = 5;
let heroes = "Elemental Heroes";
let letters = ["a", "b", "c"];
let letters2 = ["d", "e", "f"];
const person = [
  {
    firstName: "John",
    age: 35,
    favColor: "blue,",
  },
  {
    firstName: "Joe",
    age: 33,
    favColor: "red,",
  },
  {
    firstName: "Jimmy",
    age: 31,
    favColor: "green,",
  },
];

const cars = {
  car1: "Toyota",
  car2: "Honda",
  car3: "Ford",
  allCars: () => {
    console.log(`Car1: ${cars.car1}\n Car2: ${cars.car2}`);
  },
};
const persons = {
  person1: "John",
  person2: "Joe",
  person3: "Jimmy",
};
const callPersons = {
  Persons: () => {
    console.log(`Person1: ${persons.person1}\n Person2: ${persons.person2}`);
  },
};
/***********************STARTS HERE***************************************/
console.log("%c*****STARTS HERE******", "color:seagreen;font-size:2rem;");
// functions

getName = (name) => {
  console.log(`Hello, ${name}`);
};
getName("Jaden");

getName2 = (name2) => console.log(`Hello, ${name2}`);
getName2("Aster");

getSum = (n1, n2) => n1 + n2;

getSumOutput = (a, b) => {
  const result = getSum(a, b);
  console.log(`The sum is: ${result}`);
  return result;
};

doubleOutput = (a, b) => {
  const sum = getSumOutput(a, b);
  const doubleResults = sum * 2;
  console.log(`The double is: ${doubleResults}`);
};
doubleOutput(5, 2);

//Loops

while (counter <= 5) {
  console.log(counter);
  counter++;
}
console.log("\n");
while (counter2 >= 0) {
  console.log(counter2);
  counter2--;
}

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
console.log("Colors Reversed");

for (let i = colors.length - 0; i >= 0; i--) {
  console.log(colors[i]);
}
