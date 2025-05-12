let fruits = ["apple", "orange", "grapes"];
let colors = ["red", "green", "blue", "yellow"];
let counter = 0;
let heroes = "Elemental Heroes".toUpperCase();

let prices = [100, 250, 75, 180];
let discount = 0.2; // 20% discount

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
const myCar = {
  brand: "Toyota",
  model: "Camry",
  year: 2015,
};

const favHeroes = {
  hero1: "Sparkman",
  hero2: "Avian",
  hero3: "Neos",
  callHeroes: () => {
    console.log(
      `My favorite heroes are: \n ${favHeroes.hero1} \n${favHeroes.hero2} \n${favHeroes.hero3}`.toUpperCase()
    );
  },
};
const favFusion = {
  hero1: "Flame Wing man",
  hero2: "Tempest",
  hero3: "Thunder Giant",
};

/*********************START HERE...**********************/
//function

getName = (name) => `Hello, ${name}`;
callName = () => getName("John");
console.log(callName());

addNum = (n1, n2) => n1 + n2;
results = () => addNum(5, 2);
console.log(results());
doubleResults = () => results(5, 2) * 2;
console.log(doubleResults());

const x = myFunc(5, 2);
console.log(x);
function myFunc(a, b) {
  return a * b;
}

//Loops
while (counter <= 10) {
  //   console.log("\n");
  console.log("\n" + "Number: " + counter);
  counter++;
}

for (let i = 0; i < prices.length; i++) {
  //   console.log(prices[i]);

  let discountedPrice = prices[i] - prices[i] * discount;
  console.log(
    "Original price: " + prices[i] + " discounted price: " + discountedPrice
  );
  console.log(prices[i] - discountedPrice);
}
