// getName = (name) => {
//   return `Hello, ${name}`;
// };
// console.log(getName("jaden"));
// console.log(getName("aster"));

// getSum = (n1, n2, sum) => {
//   sum = n1 + n2;
//   console.log(sum);
// };
// getSum(5, 7);

// LoopNums = (i, mynum) => {
//   i = 0;
//   mynum = 10;
//   while (i < mynum) {
//     console.log(i);
//     i++;
//   }
// };

// // LoopNums();
// callMyFunc = () => {
//   LoopNums();
// };
// callMyFunc();

// let x = myFunc(5, 5);

// function myFunc(a, b) {
//   return a + b;
// }
// console.log(x);

// const person = {
//   name: "jaden",
//   age: 20,
//   deck: "Elemental Hero",
// };
// console.log(`My deck ${person.deck}`);

// const person2 = {
//   name: "aster",
//   age: 22,
//   deck: "Destiny Hero",
//   callPerson: function () {
//     console.log(`My name is ${this.name} and I am ${this.age} years old`);
//   },
// };
// person2.callPerson();

// const person3 = {
//   callMainPerson: function () {
//     console.log(`My name is ${this.name} and I am ${this.age} years old`);
//   },
// };
// person3.callMainPerson.call(person);

// const persons = [
//   {
//     firstName: "John",
//     age: 35,
//     favColor: "blue,",
//   },
//   {
//     firstName: "Joe",
//     age: 23,
//     favColor: "red,",
//   },
//   {
//     firstName: "Jimmy",
//     age: 21,
//     favColor: "green,",
//   },
// ];
// let colors = ["red", "green", "blue", "yellow"];
// let fruits = ["apple", "mango", "orange", "grapes"];
// let letters = "Heroes";

// for (let i = 0; i < colors.length; i++) {
//   console.log(`index: ${i} - value:${colors[i]}`);
// }

// for (color of colors) {
//   console.log(color);
// }

// callColors = (i, colors) => {
//   i = 0;
//   colors = ["black", "gray", "navyblue"];
//   while (i < colors.length) {
//     console.log(`index: ${i}`);
//     console.log(`value: ${colors[i]}`);
//     i++;
//   }
// };

// callColors();

// for (let i = 0; i < persons.length; i++) {
//   console.log(persons[i].firstName);
// }
// fruits.forEach((element, index) => {
//   console.log(index, element);
// });
// persons.forEach((el) => {
//   console.log(el.firstName);
// });
// const newPerson = persons.map((el) => {
//   //   console.log(el.favColor);
//   return el.favColor;
// });
// console.log(newPerson);

// for (let i = 0; i < letters.length; i++) {
//   console.log(letters[i]);
// }
// const newPerso2 = persons.filter((el) => {
//   return el.age > 31;
// });
// console.log(newPerso2);

let mainHeading = document.querySelector("h1");
let btn = (document.querySelector("button").onclick = () => {
  //   mainHeading.textContent = "Hello, World!";
  mainHeading.style.color = "red";
});

let btn2 = (document.getElementById("myBtn").onclick = () => {
  mainHeading.style.color = "blue";
});
