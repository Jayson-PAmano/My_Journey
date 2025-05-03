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
/*********************START HERE...**********************/

// using the forEach method

person.forEach((el) => {
  console.log(el.firstName);
});
colors.forEach((i, e) => {
  console.log(`index: ${e}\n color: ${i}`);
});
w;
