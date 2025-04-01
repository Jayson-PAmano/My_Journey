getName = (name) => {
  if (name === "jaden") {
    console.log(`Welcome ${name}`);
  } else {
    console.log("falsae");
  }
};
getName("jaden");

getOddNum = (num1) => {
  if (num1 % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
};
getOddNum(2);
let num = 0;

addOne = () => {
  num += 1;
  console.log(num);
};
addOne();
addOne();
addOne();
addOne();

dobuleNumber = (number) => {
  return number ** 2;
};
console.log(dobuleNumber(5));

getSum = () => {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += i;
    // console.log(i);
    if (i === 9) {
      console.log(`${i} is your last number`);
    } else {
      console.log(`${i} is not your last number`);
    }
  }
};
getSum();

getName2 = (name) => console.log(`Hello, ${name}`);
getName2("Jaden");
getSum2 = (num1, num2) => num1 + num2;
console.log(getSum2(2, 3));
console.log("**********************************************************");

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
for (let i = 0; i < colors.length; i++) {
  console.log(`index: ${i} color: ${colors[i]}`);
  if (colors[i] === "red") {
    console.log(`You chose color ${colors[i]}`);
    break;
  }
}

for (let i = 0; i < alphabets.length; i++) {
  console.log(+i + " " + alphabets.charAt(i));
}

for (let i = 0; i < persons.length; i++) {
  console.log(persons[i].firstName + " " + persons[i].age);
  if (persons[i].firstName === "Joe") {
    console.log("Joe is here");
    break;
  } else {
    console.log("Joe is not here");
  }
}
console.log("**********************************************************");
const person = {
  firstName: "John",
  age: 30,
  occupation: "Janitor",
};
const person2 = {
  firstName: "Jane",
  age: 25,
  occupation: "Waitress",
  fullDetails: () => {
    console.log(
      person2.firstName + " " + person2.age + " " + person2.occupation
    );
  },
};
const person3 = {
  getPersonDetails: () => {
    console.log("Name: " + person.firstName + " Age: " + person.age);
  },
};
person2.fullDetails();
person3.getPersonDetails.call(person);
console.log(person.firstName);
