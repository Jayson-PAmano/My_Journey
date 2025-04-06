const changeBG = document.getElementById("changeBg");
let isDarkMode = true;

changeBG.addEventListener("click", () => {
  if (isDarkMode) {
    document.body.style.backgroundColor = "whitesmoke";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "whitesmoke";
  }
  isDarkMode = !isDarkMode;
});
const person1 = {
  name: "John",
  age: 30,
  occupation: "Developer",
  address: "San Francisco",
};
const person2 = {
  name: "Jane",
  age: 25,
  occupation: "Designer",
  address: "New York",
};
let colors = ["red", "green", "blue"];
let string = "";
let heroes = "ElementalHeroes";
let numbers = [22, 32, 11, 53, 123];
const Person = [
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

let Output1 = document.getElementById("output");
let Output2 = document.getElementById("output2");
let Output3 = document.getElementById("output3");

// let btnOutput = (document.querySelector("button").onclick = () => {
//   for (i = 0; i < colors.length; i++) {
//     Output.innerHTML += colors[i] + "<br> ";
//   }
// }))
// let randomNum = Math.round(Math.random() * 10);
// let count = 0;
// let btnOutput = (document.querySelector("button").onclick = () => {
//   count++;
//   Output.innerHTML = `<h3>Random Number: ${count}</h3>`;
// });

// let btnOutput2 = (document.getElementById("logResults").onclick = () => {
//   Output2.innerHTML = `Your number is ${count}`;
// });
// const callPerson1 = {
//   CallPerson1: () => {
//     return `Name: ${person1.name}, Age: ${person1.age},`;
//   },
// };
// let btnOutput3 = document.querySelector("button");
// btnOutput3.onclick = () => {
//   Output3.innerHTML = "<h3>" + callPerson1.CallPerson1() + "</h3>";
// };

// let btnOutput4 = document.querySelector("button");
// btnOutput4.onclick = () => {
//   for (i = 0; i < heroes.length; i++) {
//     Output1.innerHTML += `${i}  ${heroes.charAt(i)} <br>`.toUpperCase();
//     if (heroes.charAt(i) === "H") {
//       Output2.innerHTML += ` LEtTER ${heroes.charAt(
//         i
//       )} *<br> is at index ${i}`.toUpperCase();
//     }
//   }
// };

// let btnOutput5 = document.querySelector("button");
// btnOutput5.onclick = () => {
//   for (i = 0; i < colors.length; i++) {
//     console.log(`index: ${i} color: ${colors[i]}`);
//     Output1.innerHTML += ` <br>index: ${i}<br> color: ${colors[i]}`;
//   }
// };
// let btnOutput6 = document.querySelector("button");
// btnOutput6.onclick = () => {
//   let num1 = prompt("Please enter a number");
//   let num2 = prompt("Please enter another number");
//   if (num1 % 2 == 0) {
//     Output1.innerHTML = `Number ${num1} is even`;
//     if (num2 % 1 == 0) {
//       Output2.innerHTML = `Number ${num2} is odd`;
//     }
//   }
// };
// let btnOutput7 = document.querySelector("button");
// btnOutput7.onclick = () => {
//   colors.forEach((el) => {
//     if (el === "red") {
//       Output1.innerHTML += `${el} is at index ${colors.indexOf(el)}`;
//     } else if (el === "green") {
//       Output2.innerHTML += ` ${el} is at index ${colors.indexOf(el)}`;
//     } else if (el === "blue") {
//       Output2.innerHTML += `<br>${el} is at index ${colors.indexOf(el)}`;
//     } else {
//       Output3.innerHTML += `No colors found!`;
//     }
//   });
// };

// const newPerson = Person.map((el, i) => {
//   return `<br>index ${i}  is ${el.firstName}`;
// });
// Output1.innerHTML = newPerson;
// // console.log(newPerson);
// colors.forEach((element) => {
//   Output2.innerHTML += `<br>index ${colors.indexOf(element)} is ${element}`;
// });

// const getAge = Person.filter((el) => {
//   return el.age == 35;
// });
// Output3.innerHTML = getAge;
// console.log(getAge);
// console.log(Person);
console.log(Person.map((person) => person.firstName));
Output1.innerHTML = Person.map((person) => person.firstName);
Output2.innerHTML = Person.filter((person) => person.age == 31);
Output3.innerHTML = Person.some((person) => person.age == 31);
