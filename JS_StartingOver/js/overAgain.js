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
let colors = ["red", "green", "blue"];

// colors.push("white");
// colors.unshift("black");
// colors.pop();
// console.log(colors);

function addNums(x, y) {
  console.log(x + y);
}

multiplier = () => {
  console.log(5 * 5);
};
getName = () => {
  console.log("Hello, my name is John");
};
addNums2 = (x, y) => console.log(x + y);
addNums(23, 1);
addNums2(23, 21);
getName();
multiplier();
