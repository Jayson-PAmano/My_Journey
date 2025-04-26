let fruits = ["apple", "orange", "grapes", "banana"];
let colors = ["red", "green", "blue", "yellow"];
let heroes = "ElementalHeroes";
let numbers = [22, 32, 11, 53, 123];
let count = 0;
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
const person2 = {
  name: "John",
  age: 30,
  occupation: "Developer",
  address: "California",
  callPerson: () => {
    return `Name: ${person2.name}, \nAge: ${person2.age} `;
  },
};

const cars = {
  carName: "Toyota",
  year: 2012,
  manufacturer: "Pasay Philippines",
};

const callCar = {
  myCar: () => {
    console.log(`Car: ${cars.carName}\n year: ${cars.year}`);
  },
};

/************************Start Code***************************/
getName = () => {
  let myName = "Jaden";
  console.log(`Hello, ${myName}`);
};
callName = () => {
  getName();
};
callName();

getSum = (n1, n2) => n1 + n2;
console.log(getSum(2, 4));

doubleNum = () => getSum(2, 4);
console.log(doubleNum() * 2);
console.log(person2.name);
console.log(person2.callPerson());
callCar.myCar.call(cars);

for (i = 0; i <= 5; i++) {
  console.log(`No. ${i}`);
  if (i == 3) {
    console.log(`Found the number ${i}`);
    break;
  }
}

for (i = 0; i < fruits.length; i++) {
  console.log(`index: ${i}\n fruit: ${fruits[i]}`);
  if (fruits[i] == "orange") {
    console.log(`Your favorite fruit is, ${fruits[i]}`);
    break;
  }
}

// for(i = 0; i < person.length; i ++){
// let Name = prompt("Enter name")
// if(Name === person[i].firstName){
//  alert(`Welcome, ${person[i].firstName}`)
//   // alert(`Welcome, ${person[i].firstName}`)
//   console.log(`Hello, ${person[i].firstName}`)

// }else{
//   alert("error")
// }

// }
// console.log("You've reach all your trials, please try again!")

for (i = 0; i < person.length; i++) {
  console.log(`Name: ${person[i].firstName} \n Age: ${person[i].age}`);
}

// let i =0
// let name = prompt("what is your name: ")

// while(true){
// if(name !== "aster"){
// console.log('tryAgain!')
// }else{
// console.log(`Hello, ${name}`)
// }
// }

// while (userName !== correctName) {
//     userName = prompt("Enter your name:");

//     if (userName !== correctName) {
//         alert("Incorrect name. Please try again!");
//     }if(userName && correctName === "j"){
//         alert("Incorrect name. Please use uppercase letter");
//     }
//     else{
//       alert("Welcome, " + correctName + "!");
//       console.log("Welcome, " + correctName + "!")
//     }
// }

// let correctName = "Jayson"; // Set the correct name
// let userName = "";

// while (userName !== correctName) {
//     userName = prompt("Enter your name:");

//     // Check if the first letter is lowercase
//     if (userName.charAt(0) === userName.charAt(0).toLowerCase()) {
//         alert("Error: The first letter of your name must be uppercase!");
//     } else if (userName !== correctName) {
//         alert("Incorrect name. Please try again!");
//     }
// }

// alert("Welcome, " + correctName + "!");
