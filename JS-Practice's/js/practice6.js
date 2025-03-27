getName = (name) => {
  return name;
};
console.log(getName("jaden"));

getSum = (n1, n2) => n1 + n2;
console.log(getSum(5, 5));

doubleNumber = (mynum) => mynum ** 2;
console.log(doubleNumber(10));

count_to_ten = (i) => {
  i = 0;
  while (i < 10) {
    console.log(`i ${i} is less than number ${i} ?`);
    i++;
    if (i == 5) {
      console.log("congrats");
      console.log(`${i} is now equal to ${i}`);
      break;
    } else {
      console.log("try again");
    }
  }
};

count_to_ten();

const person = {
  name: "jaden",
  age: 20,
  isStudent: "Enrolled",
};
const person2 = {
  name: "Jane",
  age: 25,
  occupation: "Sales Lady",
  callPerson: function () {
    console.log(`Hello. ${this.name}`);
  },
};
person2.callPerson();

const person3 = {
  personJob: function () {
    console.log(`${this.name} is a ${this.isStudent}`);
  },
};
person3.personJob.call(person);

let count = 0;
// while (count < 10) {
//   console.log(`Number: ${count}`);
//   count++;
// }

let colors = ["red", "green", "blue", "yellow"];
let favColors = ["blue", "orange", "pink", "salmon"];
let fruits = ["appple", "grapes", "mango", "banana"];
let numbers = [1, 2, 3, 4, 5, 6, 7];
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

for (let i = 0; i < alphabets.length; i++) {
  console.log(`index: ${i}`);
  console.log(`letter: ${alphabets[i]}`);
  if (alphabets[i] === "J") {
    console.log("stop");
    console.log(`Letter ${alphabets[i]} is the missing letter`);
    break;
  } else {
    console.log("continue?");
  }
}
for (let i = 0; i < colors.length; i++) {
  console.log(`index: ${i} color: ${colors[i]}`);
}
for (let i = 0; i < persons.length; i++) {
  console.log(i + persons[i].firstName);
}
for (color of favColors) {
  console.log(color);
}
fruits.forEach((element) => {
  console.log(element);
});
let myFruits = fruits.map((element) => {
  return element;
});

let Numbers = numbers.filter((num) => {
  return num > 5;
});
console.log(Numbers);
console.log(myFruits);
