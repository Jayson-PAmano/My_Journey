let fruits = ["apple", "orange", "grapes"];
let colors = ["red", "green", "blue", "yellow"];

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
// let a = 0;
// while (a < 5) {
//    console.log(a);
//   a++;
// }
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
let i = 0;
while (i < fruits.length) {
  console.log("Index: " + i);
  console.log("fruits: " + fruits[i]);
  i++;
}
for (let i = 0; i < person.length; i++) {
  console.log(person[i].firstName);
}
for (const color of colors) {
  console.log(color);
}
