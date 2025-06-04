/**
 * "PowerFull Loops"
 *
 * ForEach
 * Maps
 * Filter
 *
 * **/
const colors = ["blue", "red", "green", "yellow"];
const person = [
  {
    firstName: "John",
    age: 35,
    favColor: "blue,",
  },
  {
    firstName: "Joe",
    age: 23,
    favColor: "red,",
  },
  {
    firstName: "Jimmy",
    age: 21,
    favColor: "green,",
  },
];

//forEach

colors.forEach((el, index) => {
  console.log(index + " " + el);
});
console.log("\n");
person.forEach((el) => {
  console.log(el.firstName + " " + el.age + " " + el.favColor);
});
