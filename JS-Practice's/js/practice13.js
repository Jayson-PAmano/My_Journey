let cars = [
  {
    make: "Ford",
    model: "Econoline E150",
    year: 1995,
  },
  {
    make: "Infiniti",
    model: "G",
    year: 2005,
  },
  {
    make: "Ford",
    model: "Fiesta",
    year: 2011,
  },
  {
    make: "BMW",
    model: "3 Series",
    year: 1997,
  },
  {
    make: "Buick",
    model: "Riveira",
    year: 1992,
  },
  {
    make: "Mazda",
    model: "MX-16",
    year: 1988,
  },
  {
    make: "Mazda",
    model: "Navajo",
    year: 1992,
  },
  {
    make: "Audi",
    model: "80",
    year: 2008,
  },
  {
    make: "Dodge",
    model: "Viper",
    year: 2008,
  },
];
let colors = ["red", "green", "blue"];
let numbers = [22, 32, 11, 53, 123];
let text = "";
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
getName = (name) => console.log(`Hello, ${name}`);
getName("Jaden");

getSum = (a, b) => a + b;
console.log(getSum(2, 5));

getRemainder = (num) => {
  if (num % 2 === 0) {
    console.log(`Number ${num} is even`);
  } else {
    console.log(`Number ${num} is odd`);
  }
};

getRemainder(4);

getColors = () => {
  for (i = 0; i < colors.length; i++) {
    if (colors[i] === "red") {
      console.log(colors[i]);
      console.log(`Found ${colors[i]}`);
      break;
    } else {
      console.log(`that color is not found`);
    }
  }
};

getColors();

for (i = 0; i < heroes.length; i++) {
  console.log(heroes.charAt(i));
}

for (i = 0; i < person.length; i++) {
  console.log("Persons age: " + person[i].age);
}

colors.forEach((Element, Index) => {
  console.log(Index + Element);
  //   console.log(Index);
});
person.forEach((Element, Index) => {
  console.log(`${Index} ${Element.firstName}`);
});
console.log(person.filter((p) => p.age == 31));
console.log(cars.map((car) => car.make));

const newCars = cars.map((car) => {
  return car.model;
});
console.log(newCars);

console.log(numbers.reduce((a, b) => a + b));
console.log(Array.from(numbers, (i) => i * 2));
