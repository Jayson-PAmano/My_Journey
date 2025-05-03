let fruits = ["apple", "orange", "grapes"];
let colors = ["red", "green", "blue", "yellow"];
let counter = 0;
let heroes = "Elemental Heroes".toUpperCase();

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
const callFusion = {
  myFusions: () => {
    console.log(
      `My fusion heroes are: \n ${favFusion.hero1} \n${favFusion.hero2} \n${favFusion.hero3}`.toUpperCase()
    );
  },
};

/*********************START HERE...**********************/

// functions

getFunction = () => console.log("hello,world");
getFunction();

(getFunction2 = () => getFunction()), console.log("hello");
getFunction2();

getName = (myName) => console.log(`My name is ${myName}`);
getName("Jaden");

getSum = (n1, n2) => n1 + n2;
console.log(getSum(5, 3));

doubleResults = () => getSum(5, 3) * 2;
console.log(doubleResults());

for (i = 0; i <= 5; i++) {
  console.log(`No. ${i}`);
}

for (i = 0; i < colors.length; i++) {
  console.log(i + colors[i]);
}
for (i = 0; i < person.length; i++) {
  console.log(person[i].firstName);
}

favHeroes.callHeroes();
callFusion.myFusions.call(favFusion);
