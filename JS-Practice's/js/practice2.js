getName = (name) => {
  return `Hello, ${name} welcome`;
};
console.log(getName("jaden"));
console.log(getName("aster"));

getNum = (n1, n2) => {
  console.log(n1 + n2);
};
getNum(5, 2);
getNum(2, 2);

let x = callMyFunc(5, 3);
function callMyFunc(a, b) {
  return a + b;
}
console.log(x);

const person = {
  name: "jaden",
  age: 20,
  address: "Bued,Calasiao",
};

console.log(person.name);

const person2 = {
  name: "aster",
  age: 21,
  address: "Dagupan",
  callPerson: function () {
    console.log(`${this.name} is from ${this.address}`);
  },
};
person2.callPerson();

const favPerson = {
  callFavPerson: function () {
    return `My favorite person is ${this.name}`;
  },
};

console.log(favPerson.callFavPerson.call(person));

let colors = ["red", "green", "blue", "yellow"];
let colors2 = ["orange", "black", "pink", "purple"];
let fruits = ["banana", "apple", "orange", "grapes"];

for (let i = 0; i < colors.length; i++) {
  console.log(`${i}. ${colors[i]}`);
  //   console.log(colors[i]);
}
let i = 0;
while (i < fruits.length) {
  console.log(`index: ${i} `);
  console.log(`value: ${fruits[i]}`);
  i++;
}
const person3 = [
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

for (let i = 0; i < person3.length; i++) {
  console.log(`index: ${i}`);
  console.log(`value: ${person3[i].firstName}, ${person3[i].age}`);
}

for (color of colors2) {
  console.log(color);
}

colors.forEach((i, el) => {
  console.log(`${i}: ${el}`);
});
person3.forEach((element) => {
  //   console.log(`${index}: ${element.firstName}`);
  //   console.log(`${index}: ${element.firstName}, ${element.age}`);
  //   console.log(element.firstName);
  //   console.log(element[index]);
  console.log(`${element.firstName} : ${element.age}`);
});

let letters = "Elemental Hero";

for (let i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}
