getName = (name) => {
  return `Hello, ${name}`;
};
console.log(getName("Aster"));
console.log(getName("Jaden"));

getSum = (n1, n2, sum) => {
  //   n1 = 5;
  //   n2 = 3;
  sum = n1 + n2;
  return sum;
};
console.log(getSum(10, 2));

let x = callMyFunc(5, 1);
function callMyFunc(a, b) {
  return a + b;
}
console.log(x);

multipliers = (a, b) => a * b;
console.log(multipliers(2, 2));

const person = {
  name: "John",
  age: 30,
};

console.log(`My name is ${person.name}`);

const person2 = {
  name: "Joe",
  age: 32,
  getName: function () {
    return `My name is ${this.name}`;
  },
};

console.log(person2.getName());

const person3 = {
  person4: function () {
    return `My name is ${this.name} and im ${this.age} years old `;
  },
};
console.log(person3.person4.call(person));
console.log("\n");

let colors = ["red", "blue", "orange", "blue"];

console.log(colors[2], colors[1]);

for (let i = 0; i < colors.length; i++) {
  console.log(i + colors[i]);
}
console.log("\n");
for (color of colors) {
  console.log(color);
}
