let fruits = ["apple", "orange", "grapes"];
let colors = ["red", "green", "blue", "yellow"];
let counter = 0;
let heroes = "Elemental Heroes";
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
    console.log(`Person1: ${persons.person1}`);
  },
};
/***********************STARTS HERE***************************************/
getName = (name1) => console.log(`Hello, ${name1}`);
callOtherName = (name2) => getName("John") + console.log(`Hi, ${name2}`);
callOtherName("Joe");

addNums = (n1, n2) => n1 + n2;
console.log(addNums(5, 10));
doubleNums = () => {
  console.log(addNums(5, 10) * 2);
};
doubleNums();

for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log("\n");

for (let i = 5; i > 0; i--) {
  console.log(i);
}
console.log(`Blast off...... 🚀🚀🚀`);

getRemainder = (n1) => {
  if (n1 % 2 == 0) {
    console.log(`${n1} is even`);
  } else {
    console.log(`${n1} is odd`);
  }
};
getRemainder(1);
