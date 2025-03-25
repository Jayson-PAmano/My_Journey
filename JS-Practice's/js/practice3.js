sayHello = (name) => {
  console.log("Hello", name);
};
sayHello("jaden");

countNum = (i, num) => {
  i = 0;
  num = [1, 2, 3, 4, 5];
  while (i < num.length) {
    console.log(num[i]);
    i++;
  }
};
countNum();

getSum = (num1, num2, sum) => {
  sum = num1 + num2;
  return sum;
};
console.log(getSum(5, 1));

const person = {
  name: "jaden",
  age: 20,
  address: "Calasia,Pangasinan",
};
console.log(person.name);

const person2 = {
  name: "aster",
  age: 22,
  address: "Dagupan,Pangasinan",
  callName: function () {
    console.log("Hello", this.name);
  },
};
person2.callName();

person3 = {
  callName2: function () {
    console.log("Hello", this.name);
  },
};
person3.callName2.call(person);

let colors = ["red", "green", "blue", "yellow"];
let fruits = ["apple", "mango", "orange", "grapes"];

for (let i = 0; i < colors.length; i++) {
  console.log(` keys:${i}`);
  console.log(`value:${colors[i]}`);
}

for (color of colors) {
  console.log(color);
}
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
for (let i = 0; i < persons.length; i++) {
  console.log(`keys: ${i}, value: ${persons[i].firstName}`);
}
fruits.forEach((index, element) => {
  console.log(`index: ${element}, value: ${index}`);
});

let letters = "Elemental Hero";
for (let i = 0; i < letters.length; i++) {
  console.log(letters[i].toUpperCase());
}

const newPerson = persons.map((el) => {
  console.log(el.firstName);
  return el.firstName;
});
console.log(newPerson);
