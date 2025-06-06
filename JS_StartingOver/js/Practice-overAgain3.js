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

getName = (name1, name2) => {
  console.log(`Hello, ${name1} and ${name2}`);
};
getName("John", "Joe");

getName2 = (name) => console.log(`Hello, ${name}`);
getName2("John");

addNum = (n1, n2) => n1 + n2;
console.log(addNum(10, 2));

addTwoNums = (a, b) => a + b;
getSumResults = () => addTwoNums(5, 2);
console.log(getSumResults());
doubleResults = () => addTwoNums(5, 2) * 2;
console.log(doubleResults());

getRemainder = (number1) => {
  if (number1 % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
};
getRemainder(4);

//end{ code }

for (i = 0; i < 10; i++) {
  //   console.log(i);
  if (i === 5) {
    console.log(`\t>>> Found the number ${i}`);
    break;
  } else {
    console.log(`>>> ${i} Try again`);
  }
}

for (i = 5; i >= 0; i--) {
  console.log(i);
  if (i === 0) {
    console.log("\t" + " >>> " + "Blast off....... 🚀🚀🚀");
  }
}

for (i = 0; i <= 5; i++) {
  console.log(i);
}
for (i = colors.length - 1; i >= 0; i--) {
  console.log(colors[i]);
}
console.log("\n");
for (i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

for (i = 0; i < heroes.length; i++) {
  console.log(`${i} ${heroes.charAt(i)}`);
}
for (i = 0; i < person.length; i++) {
  console.log(`Name: ${person[i].firstName} \n Age: ${person[i].age}`);
}
cars.allCars();
callPersons.Persons.call(persons);
