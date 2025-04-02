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

console.log(cars.map((car) => car.model));
console.log(numbers.filter((num) => num > 22));
console.log(cars.some((car) => car.make === "Ford"));
console.log(cars.every((car) => car.make === "Ford"));
console.log(numbers.reduce((prev, next) => prev + next));
console.log(Array.from("hello", (i) => i + 2));
console.log(Array.from(numbers, (i) => i * 2));
console.log(Object.keys(cars[1]));
console.log(Object.entries(cars[0]));
//spreed
const addNums = (a, b, c) => a + b + c;
console.log(addNums(...numbers));

/***
 * difference between for of... and for... in
 *
 * for in: gives the keys (index )of the interval
 * for of: gives the values of the interval
 * **/

for (color of colors) {
  console.log(color);
}
for (color in colors) {
  console.log(color);
}

// for (i = 0; i < colors.length; i++) {
//   text += colors[i] + ", ";
// }
// document.querySelector("h2").innerHTML = text;

// let getColors = (document.getElementById("get-colors").onclick = () => {
//   for (i = 0; i < colors.length; i++) {
//     text += colors[i] + "<br> ";
//   }
//   document.querySelector("h2").innerHTML = text;
// });
// let hideColors = (document.getElementById("hide-colors").onclick = () => {
//   document.querySelector("h2").style.display = "none";
// });

// let btnChangeTitle = document.getElementById("change-text");
// btnChangeTitle.addEventListener("click", () => {
//   let myTextBox = document.getElementById("changeTitle").value;
//   document.querySelector("h1").innerHTML = "JavaScript " + myTextBox;
// });
