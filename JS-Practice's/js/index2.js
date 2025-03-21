getName = (firstName, lastName) => {
  firstName = "Jaden";
  lastName = "Yuki";

  console.log(`My name is, ${firstName} ${lastName}`);
};
getName();

addNum = (n1, n2) => {
  return n1 + n2;
};
console.log(addNum(5, 3));

let x = getSum(5, 5);

function getSum(a, b) {
  return a + b;
}
console.log(x);

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(`My name is ${person.name}`);

const myCar = {
  brand: "Toyota",
  model: "Camry",
  year: 2015,
  details: function () {
    console.log(`My car is a ${this.year} ${this.brand} ${this.model}`);
  },
};
myCar.details();

const person2 = {
  getPerson: function () {
    console.log(`My name is ${this.name}`);
  },
};
person2.getPerson.call(person);
