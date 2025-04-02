getName = (name) => {
  if (name === "jaden") {
    console.log(`Hello, ${name}`);
  } else {
    console.log(`${name} is not recognize`);
  }
};
getName("jaden");

getRemainder = (num1) => {
  if (num1 % 2 === 0) {
    console.log(num1 + " is even");
  } else {
    console.log(num1 + " is odd");
  }
};

getRemainder(2);

getSum = (n1, n2) => n1 + n2;

doubleNumber = () => getSum(6, 5);
console.log(doubleNumber());
console.log(doubleNumber("x2") * 2);

for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i == 5) {
    console.log("you select number " + i);
    break;
  }
}
let colors = ["red", "green", "blue", "yellow"];
let letters = "Elemental Hero";
let fruits = ["apple", "grapes", "orange", "banana"];
const Persons = [
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

let i = 0;
// console.log(colors[1]);
for (let i = 0; i < colors.length; i++) {
  console.log(i + " " + colors[i]);

  if (colors[i] === "blue") {
    console.log(`you selected color is ${colors[i]}`);
    break;
  }
}
while (i < letters.length) {
  console.log(letters.charAt(i).toUpperCase());
  i++;
}
const person = {
  name: "jaden",
  age: 20,
  student: "Yes",
  deck: "Elemental Hero",
};
const person2 = {
  name: "aster",
  age: 21,
  student: "No",
  deck: "Destiny Hero",
  callPerson: () => {
    console.log(`Name: ${person2.name.toUpperCase()}\nDeck: ${person2.deck}`);
  },
};
person2.callPerson();

const callProtagonist = {
  Protagonist: () => {
    console.log(`Our Protagonist is ${person.name} is here!`);
  },
};
callProtagonist.Protagonist.call(person);
console.log("*******************************************");

fruits.forEach((element, index) => {
  console.log(index + " " + element);
});
Persons.forEach((element, index) => {
  console.log(index + " " + element.firstName);
});

const newPerson = Persons.map((el) => {
  return el.firstName;
});
console.log(newPerson);
const newFruits = fruits.map((el) => {
  return el;
});
console.log(newFruits);

const newPerson2 = Persons.filter((El) => {
  //   return El.firstName === "John";
  return El.age < 23;
});
console.log(newPerson2);

console.log(Persons.map((person) => person.firstName));
console.log(Persons.filter((person) => person.age < 23));
console.log(cars.filter((car) => car.year < 1995));
