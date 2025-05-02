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
/*********************START HERE...**********************/

getName = (name1, name2) => {
  console.log(`Hello, ${name1} and ${name2}`);
};
// getName("jaden", "aster");

callNames = () => getName("jaden", "aster");
callNames();

getSum = (n1, n2) => n1 + n2;
getResults = () => console.log(getSum(3, 2));
getResults();

doubleResults = () => console.log(getSum(3, 2) * 2);
doubleResults();

let x = Myfunc(5, 2);

function Myfunc(a, b) {
  return a + b;
}
console.log(x);

for (i = 0; i < 10; i++) {
  console.log(i);
  if (i == 5) {
    console.log("your number is no. " + i);
    break;
  }
}
while (counter < colors.length) {
  console.log(`Index: ${counter} \n Color: ${colors[counter]}`);
  counter++;
}

for (i = 0; i < person.length; i++) {
  console.log(`Name: ${person[i].firstName}\n Age:${person[i].age}`);
  if (person[i].age < 35) {
    console.log(`Results are ${person[i].firstName} is younger than ${i}`);
  }
}
for (counter = 0; counter < heroes.length; counter++) {
  console.log(heroes.charAt(counter));
  //   console.log(heroes[counter]);
  if (heroes.charAt(counter) == "m") {
    console.log(heroes.charAt(counter) + " is at index " + counter);
  } else if (heroes.charAt(counter) == "M") {
    console.log("Please use lower case letters");
  }
}
favHeroes.callHeroes();
