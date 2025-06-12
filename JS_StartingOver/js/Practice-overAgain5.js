let fruits = ["apple", "orange", "grapes"];
let colors = ["red", "green", "blue", "yellow"];
let counter = 0;
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

getName = (name) => console.log(`Hello, ${name}`);
getName("John");
getName("Joe");
getOtherName = () => {
  getName("jaden");
};
getOtherName();

addNumbers = (n1, n2) => n1 + n2;
plusTen = () => {
  console.log(addNumbers(5, 5) + 10);
};
console.log(addNumbers(5, 5));
plusTen();

while (counter < 5) {
  console.log(counter);
  counter++;
}
console.log("\n");

for (let i = 5; i > 0; i--) {
  console.log(i);
}

getRemainder = (RemainderNum) => {
  if (RemainderNum % 2 == 0) {
    console.log(`${RemainderNum} is even`);
  } else console.log(`${RemainderNum} is odd`);
};
getRemainder(2);

for (i = 0; i < colors.length; i++) {
  console.log(i + " " + colors[i]);
}

for (i = colors.length - 1; i >= 0; i--) {
  console.log(i + " " + colors[i]);
}

for (i = 0; i < heroes.length; i++) {
  console.log(heroes.charAt(i));
}
cars.allCars();
callPersons.Persons.call(persons);

fruits.forEach((element, index) => {
  console.log(index, element);
});

for (let i = 0; i < letters.length; i++) {
  logLetters(letters[i], i);
}

function logLetters(element, index) {
  console.log(index, element);
}
for (let i = 0; i < letters2.length; i++) {
  logLetters(letters2[i], i);
}
function logMyLetters(element, index) {
  console.log(index, element);
}
