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

// function addNum() {
//   console.log(5 + 2);
// }
// addNum();
// multipliers = (x, y) => x * y;
// //   {console.log(x * y);}

// console.log(multipliers(5, 2));
// console.log(person[0].firstName);

// colors.forEach((el) => {
//   console.log(el);
// });
// console.log("\n");

// person.forEach((el) => {
//   console.log(el.firstName);
// });
// const newPerson = person.map((el) => {
//   return el.firstName;
// });
// console.log(newPerson);
// const newPerso2 = person.filter((el) => {
//   return el.age < 31;
// });
// console.log(newPerso2);

// const myHeading = document.querySelector("h1");

// const myBtn = document.querySelector("button");

// myBtn.addEventListener("click", function () {
//   myHeading.innerText = "Hello,World";
// });

const myBtn = document.querySelector("button");
const mydata = document.querySelector("#myData");

myBtn.addEventListener("click", () => {
  fetch("https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((person) => {
        mydata.innerHTML += `<p>${person.name}</p>`;
      });
    });
});
