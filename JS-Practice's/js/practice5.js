getName = (name) => {
  name = "Jaden";
  return `Hello, ${name}`;
};
console.log(getName());

getSum = (n1, n2) => n1 + n2;

console.log(getSum(2, 2));

let x = callthisFunction(5, 5);
function callthisFunction(a, b) {
  console.log(a + b);
}
const person = {
  name: "John",
  age: 30,
  occupation: "Developer",
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
    console.log(`${this.name} is a ${this.occupation}`);
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

while (count < colors.length) {
  console.log(`Number: ${count}`);
  console.log(`Color: ${colors[count]}`);
  count++;
}
for (let i = 0; i < alphabets.length; i++) {
  console.log(alphabets[i] + " " + i);
}

callColors = (i) => {
  i = 0;
  while (i < colors.length) {
    console.log(`${i} ${colors[i]}`);
    i++;
  }
};
callColors();
for (color of colors) {
  console.log(color);
}
