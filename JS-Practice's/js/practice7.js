// let count = 0;
// let myCountNum = document.getElementById("count-num");
// let myBtn = document.getElementById("addOne");
// myBtn.addEventListener("click", () => {
//   count += 1;
//   myCountNum.textContent = count;
// });
// let myBtn2 = (document.getElementById("change-text").onclick = (changeText) => {
//   changeText = document.querySelector("h1").textContent = "JavaScript Advanced";
// });
// let myBtn3 = (document.getElementById("change-color").onclick = () => {
//   document.body.style.backgroundColor = "blue";
//   document.body.style.color = "whitesmoke";
// });

/************************************************************************************/

getName = (name) => {
  return `Hello ${name}`;
};
console.log(getName("Jaden"));
console.log(getName("Aster"));

getSum = (n1, n2) => n1 + n2;

console.log(getSum("5", "3")); // Outputs: "53" (concatenated
console.log(getSum(5, 3)); // Outputs: 8 (added as numbers)

let x = getTotal(5, 5);
function getTotal(a, b) {
  console.log(a + b);
}
getNumbers = (i, myNums) => {
  i = 0;
  myNums = [5, 3, 4, 23, 21, 11];
  while (i < myNums.length) {
    console.log(myNums[i]);
    i++;
    if (myNums[i] === 23) {
      console.log("Found it! no. " + myNums[i]);
      break;
    }
  }
};
getNumbers();

let colors = ["red", "green", "blue", "yellow"];
let favColors = ["blue", "orange", "pink", "salmon"];
let fruits = ["appple", "grapes", "mango", "banana"];
let numbers = [1, 2, 3, 4, 5, 6, 7];
let numbers2 = "1, 2, 3, 4, 5, 6, 7;";
let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const persons = [
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
for (let i = 0; i < colors.length; i++) {
  console.log(i + colors[i]);
}
for (let i = 0; i < alphabets.length; i++) {
  console.log(alphabets + " >>>> " + alphabets.length);
  //   console.log(alphabets[i]);
}
fruits.forEach((EL, I) => {
  console.log(EL);
  console.log(I);
});
persons.forEach((el) => {
  console.log(el.firstName);
});

const newPersons = persons.map((el) => {
  return el.firstName;
});
console.log(newPersons);

const Cars = cars.filter((el) => {
  return el.year > 1990;
});
console.log(Cars);
