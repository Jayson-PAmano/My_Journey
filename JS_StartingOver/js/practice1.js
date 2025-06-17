let fruits = ["apple", "orange", "grapes"];
let colors = ["red", "green", "blue", "yellow"];
let counter = 0;
let heroes = "Elemental Heroes";
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

addNums = (a, b) => (a + b) * 2;
console.log(addNums(5, 3));

addNums2 = (a, b) => a + b;
console.log(addNums2(5, 3));
doubleResults = () => {
  console.log(addNums2(5, 3) * 2);
};
doubleResults();

squaredNums = (x) => x * x;
console.log(squaredNums(5));

sayHi = (hi) => (hi = "Hi");
console.log(sayHi());

getName = (name) => name;
callName = () => getName("Jaden");
console.log(callName());

//end Code

while (counter < 5) {
  console.log(counter);
  counter++;
}
console.log("\n");

while (counter > 0) {
  console.log(counter);
  counter--;
}

for (let i = 0; i < colors.length; i++) {
  console.log(i + colors[i]);
}

for (i = 0; i < heroes.length; i++) {
  console.log(heroes.charAt(i));
  if (heroes.charAt(i) === "H") {
    console.log("STOP!");
    console.log("Found H at index: " + i);
    break;
  }
}

Remainder = (R1) => {
  if (R1 % 2 == 0) {
    console.log(`Number ${R1} is Even: `);
  } else {
    console.log(`Number ${R1} is Odd: `);
  }
};

Remainder(6);

const cars = {
  car1: "Toyota",
  car2: "Honda",
  car3: "Ford",
};

console.log(cars.car1);

const cars2 = {
  car1: "Mitsubishi",
  car2: "Nissan",
  car3: "Kia",
  getCars: () => {
    console.log(`Car1: ${cars2.car1}`);
  },
};
cars2.getCars();

const Person = {
  name: "John",
  age: 30,
  occupation: "Construction Worker",
};
const callPerson = {
  myPerson: () => {
    console.log(
      `Name: ${Person.name}, Age: ${Person.age}, Occupation: ${Person.occupation}`
    );
  },
};

callPerson.myPerson.call(Person);

for (i = 0; i < person.length; i++) {
  console.log(person[i].age, person[i].firstName);
}
