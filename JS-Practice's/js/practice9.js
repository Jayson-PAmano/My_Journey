getName = (name1, name2) => {
  console.log(`Hello, ${name1}, ${name2}`);
};
getName("Jaden", "Aster");

callName = (name) => `Hello, ${name}`;
console.log(callName("Chaz"));

getSum = (a, b) => a + b;
console.log(getSum(10, 23));

multiplier = (a, b) => a * b;
console.log(multiplier(5, 2));

const person = {
  name: "John",
  age: 30,
  occupation: "Developer",
  address: "California",
};

const person2 = {
  name: "Jane",
  age: 25,
  occupation: "Teacher",
  address: "New York",
  fullDetails: function () {
    console.log(`NAME: ${this.name} \n AGE: ${this.age}`);
  },
};

const callPerson = {
  newPerson: () => {
    // console.log(`Name: ${this.name} \n age: ${this.age}`);
    return `Name: ${person.name} \n age: ${person.age}`;
  },
};
// callPerson.newPerson.call(person);
console.log(callPerson.newPerson.call(person));
person2.fullDetails();
let x = myFunction(5, 2);
function myFunction(a, b) {
  console.log(a + b);
}

let colors = ["red", "green", "blue", "yellow"];
let favColors = ["blue", "orange", "pink", "salmon"];
let fruits = ["appple", "grapes", "mango", "banana"];
let numbers = [1, 2, 3, 4, 5, 6, 7];
let numbers2 = "1, 2, 3, 4, 5, 6, 7;";
let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const persons = [
  {
    firstName: "John",
    age: 35,
    favColor: "blue,",
  },
  {
    firstName: "Joe",
    age: 23,
    favColor: "red,",
  },
  {
    firstName: "Jimmy",
    age: 21,
    favColor: "green,",
  },
];
let cars = [
  {
    make: "Ford",
    model: "Econoline E150",
    year: 1995,
  },
  {
    make: "Infiniti",
    model: "G",
    year: 2005,
  },
  {
    make: "Ford",
    model: "Fiesta",
    year: 2011,
  },
  {
    make: "BMW",
    model: "3 Series",
    year: 1997,
  },
  {
    make: "Buick",
    model: "Riveira",
    year: 1992,
  },
  {
    make: "Mazda",
    model: "MX-16",
    year: 1988,
  },
  {
    make: "Mazda",
    model: "Navajo",
    year: 1992,
  },
  {
    make: "Audi",
    model: "80",
    year: 2008,
  },
  {
    make: "Dodge",
    model: "Viper",
    year: 2008,
  },
];

for (let i = 0; i < 10; i++) {
  console.log("Number: " + i);
  //   console.log(i);
}
for (let i = 0; i < alphabets.length; i++) {
  console.log(alphabets.charAt(i));
}
for (let i = 0; i < numbers2.length; i++) {
  console.log(numbers2);
}
for (let i = 0; i < colors.length; i++) {
  console.log(`index: ${i} color: ${colors[i]}`);
}
for (color of colors) {
  console.log(color);
}

for (let i = 0; i < persons.length; i++) {
  console.log(`Name: ${persons[i].firstName} \n Age: ${persons[i].age}`);
}

fruits.forEach((element, index) => {
  console.log(`Index: ${index}\n Fruit: ${element}`);
});
persons.forEach((element, index) => {
  console.log(
    `Index: ${index}\n Name: ${element.firstName} \n Age:${element.age}`
  );
});

const newPersons = persons.map((element) => {
  return element.firstName;
});
console.log(newPersons);
const myCar = cars.map((el) => {
  return el.model;
});
console.log(myCar);

const carYear = cars.filter((el) => {
  return el.year > 2000;
});
console.log(carYear);
