// let x = getSum(5, 5);
// console.log(x);
// function getSum(a, b) {
//   return a + b;
// }
let fruits = ["apple", "orange", "grapes"];
let colors = ["red", "green", "blue", "yellow"];
let counter = 0;
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
addNums = (x, y) => x + y;
getSum = () => console.log(addNums(3, 2));

multipliers = () => console.log(addNums(3, 2) * 2);
getSum();
multipliers();

// let num1 = prompt("Enter a number: ");
// console.log(num1);
// if (num1 > 10) {
//   console.log(`"Number ${num1} is greater than 10`);
// } else {
//   console.log(`Number ${num1} is less than or equal to 10`);
// }
while (counter < 10) {
  console.log(`${counter}.I love JavaScript`);
  counter++;
  if (counter === 5) {
    console.log(`\t Found the Number ${counter} at index ${counter + 1}`);
    break;
  }
}
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
  if (colors[i] === "green") {
    console.log(`Found the color ${colors[i]} at index ${i}`);
    break;
  }
}
console.log("\n");
for (let i = 0; i < person.length; i++) {
  console.log(`Name: ${person[i].firstName} \n Age: ${person[i].age}`);
  if (person[i].firstName === "Jimmy") {
    console.log(
      `Found the person ${person[i].firstName} at index ${i}\n \tName:${person[i].firstName} \n \tAge: ${person[i].age}`
    );

    break;
  }
}

for (let i = 0; i < heroes.length; i++) {
  console.log(i + " " + heroes.charAt(i));
  if (heroes.charAt(i) === "t") {
    console.log(
      `Found the letter ${heroes.charAt(i).toUpperCase()} at index ${i}`
    );
    break;
  }
}
