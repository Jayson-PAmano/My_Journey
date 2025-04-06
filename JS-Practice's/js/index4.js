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
console.dir(cars);
// console.log(cars.map((car) => car.model));
// console.log(cars.filter((car) => car.year > 2000));

// console.log(cars.some((car) => car.make == "Ford"));
// console.log(cars.every((car) => car.year > 1990));

// console.log(cars.map((car) => car.model));

// console.log(cars.map((car) => car.year).reduce((a, b) => a + b));

// console.log(cars.find((car) => car.year > 2000));

console.log(cars.findIndex((car) => car.year > 2010));

console.log(colors.map((color) => color));

console.log(numbers.filter((num) => num > 32));
