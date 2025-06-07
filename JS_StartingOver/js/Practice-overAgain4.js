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

let x = myFunc(5, 2);
console.log(x);
function myFunc(a, b) {
  return a + b;
}

addNums = (n1, n2) => n1 + n2;
console.log(addNums(5, 5));
doubleNums = () => console.log(addNums(5, 5) * 2);
doubleNums();

getName = () => {
  let myName = "Jaden Yuki";
  console.log(`Hello, ${myName}`);
};
callName = () => getName();
callName();

getRemainder = (n1) => {
  if (n1 % 2 == 0) {
    console.log(`${n1} is even`);
  } else {
    console.log(`${n1} is odd`);
  }
};

getRemainder(3);

for (i = 0; i < 5; i++) {
  console.log(i);
}
console.log("\n");
for (i = 5; i > 0; i--) {
  console.log(i);
}

for (i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
console.log("\n");
for (i = colors.length - 1; i >= 0; i--) {
  console.log(colors[i]);
}

while (counter < heroes.length) {
  console.log(heroes.charAt(counter));
  counter++;
}
console.log("\n");
for (i = heroes.length - 1; i >= 0; i--) {
  console.log(heroes.charAt(i));
}

for (counter = 0; counter < person.length; counter++) {
  console.log(`Name: ${person[1].firstName} \n Age: ${person[1].age}`);
}
