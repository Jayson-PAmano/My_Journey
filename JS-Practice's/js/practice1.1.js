let colors = ["red", "green", "blue"];
let string = "";
let heroes = "ElementalHeroes";
let numbers = [22, 32, 11, 53, 123];
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
let Output = document.getElementById("output");
let Output2 = document.getElementById("output2");
// let randomColor = colors[randomIndex];

// const randomIndex = Math.round(Math.random() * colors.length);
// Output.innerHTML = randomColor.toUpperCase();
// for (count = 0; count < colors.length; count++) {
//   string += count + colors[count] + "<br> ";
//   Output.innerHTML = string;
// }
// getName = () => {
//   let name = prompt("Enter your name");
//   Output.innerHTML = "Hello, " + name.toUpperCase();
// };
// getName();

// getSum = () => {
//   let num1 = prompt("Enter first number");
//   let num2 = prompt("Enter second number");
//   let sum = parseInt(num1) + parseInt(num2);
//   Output.innerHTML = "Sum is " + sum;
// };
// getSum();

// Output.innerHTML = "Count to ten";

// for (i = 0; i < 10; i++) {
//   Output.innerHTML += "<br>" + i;
//   if (i === 5) {
//     Output.innerHTML += "Half way there!";
//     break;
//   } else {
//     Output.innerHTML += "Keep going!";
//   }
// }
// if (randomColor === "red") {
//   Output.innerHTML = "You are a red person!";
//   Output.style.color = "red";
// } else if (randomColor === "green") {
//   Output.innerHTML = "You are a green person!";
//   Output.style.color = "green";
// } else if (randomColor === "blue") {
//   Output.innerHTML = "You are a blue person!";
//   Output.style.color = "blue";
// } else {
//   Output.innerHTML = "You are a person with no color!";
// }

// getRamainder = () => {
//   let num = prompt("Enter a number");
//   if (num % 2 === 0) {
//     Output.innerHTML = "Number is even";
//   } else {
//     Output.innerHTML = "Number is odd";
//   }
// };
// getRamainder();

// for (i = 0; i < heroes.length; i++) {
//   Output.innerHTML += "<br>" + "<br>" + heroes[i].toUpperCase();
//   if (heroes[i] === "H") {
//     Output.innerHTML += "<br>" + heroes[i].toUpperCase() + " is at INDEX " + i;
//   }
// }
// const person1 = {
//   name: "John",
//   age: 30,
//   occupation: "Developer",
//   address: "San Francisco",
// };
// const person2 = {
//   name: "Jane",
//   age: 25,
//   occupation: "Designer",
//   address: "New York",
//   callPerson2: () => {
//     return `Name: ${person2.name} <br> Age:${person2.age}`;
//   },
// };
// Output2.innerHTML += person2.callPerson2();
// const callPerson1 = {
//   callPerson: () => {
//     return `Name: ${person1.name}<br> Age: ${person1.age}`;
//   },
// };
// Output.innerHTML = callPerson1.callPerson.call(person1);

// colors.forEach((color, index) => {
//   console.log(color, index);
//   Output.innerHTML += "<br>" + "<h3>" + color + index + "</h3>";
// });
