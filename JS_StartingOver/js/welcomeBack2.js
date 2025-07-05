let fruits = ["apple", "orange", "grapes"];
let colors = ["red", "green", "blue", "yellow"];
let counter = 0;
let counter2 = 5;
let heroes = "Elemental Heroes";
let letters = ["a", "b", "c"];
let letters2 = ["d", "e", "f"];

/************************************************************/
// functions

getName = (name) => console.log(`hello, ${name}`);
getName("jaden");

getSum = (n1, n2) => n1 + n2;
console.log(getSum(5, 5));
doubleSum = () => {
  let sum = getSum(5, 5);
  return sum * 2;
};
console.log(doubleSum());

getRemainder = (R1) => {
  if (R1 % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
};
getRemainder(52);
//Loops

while (counter < 5) {
  console.log(counter);
  counter++;
}
console.log("\n");

while (counter > 0) {
  console.log(counter);
  counter--;
}

console.log("\n");
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log("\n");
for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log("\n");

for (let i = colors.length - 1; i >= 0; i--) {
  console.log(colors[i]);
}

for (i = 0; i < heroes.length; i++) {
  console.log(heroes.charAt(i));
}
console.log("\n");
for (i = heroes.length - 0; i >= 0; i--) {
  console.log(heroes.charAt(i));
}
//Objects
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
console.log("\n");
const Person = {
  firstName: "John",
  age: 35,
  occupation: "Sales man",
};
console.log(Person);

const Cars = {
  Car1: "Toyota",
  Car2: "Honda",
  Car3: "Ford",
  callCars: () => {
    console.log(
      `Car1: ${Cars.Car1} \nCar2: ${Cars.Car2} \nCar3: ${Cars.Car3} \n`
    );
  },
};
Cars.callCars();

console.log("\n");
const food = {
  pizza: "Italian",
  sushi: "Japanese",
  tacos: "Mexican",
};

const callFood = {
  MyFood: () => {
    console.log(`\nPizza: ${food.pizza} \nSushi: ${food.sushi}`);
  },
};
callFood.MyFood.call(food);
