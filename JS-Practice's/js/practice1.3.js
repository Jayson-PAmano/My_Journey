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
let heroes = "ElementalHeroes".toUpperCase();
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
    age: 21,
    favColor: "green,",
  },
];

let Output1 = document.getElementById("output1");
let Output2 = document.getElementById("output2");
let Output3 = document.getElementById("output3");
let count = 0;
const callPerson1 = {
  CallPerson1: () => {
    return `Name: ${person1.name}, Age:${person1.age}`;
  },
};

let myBtn = document.querySelector("button");
myBtn.onclick = () => {
  //   let num1 = prompt("Enter your 1st number");
  //   let num2 = prompt("Enter your 2nd number");
  //   if (num1 % 2 === 0) {
  //     Output1.innerHTML = `Number ${num1} is even`;
  //   } else if (num1 % 1 === 0) {
  //     Output1.innerHTML = `Number ${num1} is odd`;
  //   } else {
  //     Output1.innerHTML = ` ${num1} is NOT A Number, please enter a number value`;
  //   }
  //   if (num2 % 1 === 0) {
  //     Output2.innerHTML = ` ${num2} is odd`;
  //   } else if (num1 % 2 === 0) {
  //     Output2.innerHTML = ` ${num2} is even`;
  //   } else {
  //     Output2.innerHTML = ` ${num2} is NOT A Number, please enter a number value`;
  //   }
  //   colors.forEach((element, index) => {
  //     console.log(`Color at index ${index} is ${element}`);
  //     Output1.innerHTML += `<p>Color at index ${index + 1} is ${element}</p>`;
  //   });
  //   Person.forEach((e, i) => {
  //     Output1.innerHTML = `<h2>List of persons:</h2>`;
  //     Output2.innerHTML += `<p>Person ${i + 1} is ${e.firstName}<br> Age: ${
  //       e.age
  //     }`;
  //   });
  //   Output1.innerHTML = Person.map((person) => person.firstName);
  Output1.innerHTML = Person.filter((person) => person < 30);
  console.log(Person.filter((person) => person.age < 30));
  //   Output1.innerHTML += callPerson1.CallPerson1.call(person1);
  //   name = "Jaden";
  //   Output1.innerHTML = `Hello, ${name}`;
  //   for (i = 0; i < colors.length; i++) {
  //     Output1.innerHTML += `<br>Index: ${i} Color: ${colors[i]}`;
  //     Output2.innerHTML += `<br>Color ${colors[i]} is at index ${i}`;
  //   }
  //   for (i = 0; i < heroes.length; i++) {
  //     Output2.innerHTML += `<br>Index ${i} is ${heroes[i]}`;
  //     if (heroes[i] === "N") {
  //       Output3.innerHTML += `<b> N is at the index of ${i}</b>`;
  //       Output3.style.backgroundColor = "tomato";
  //       Output3.style.color = "whitesmoke";
  //       Output3.style.fontSize = "20px";
  //     }
  //   }
  //   count++;
  //   document.getElementById("output1").innerHTML = count * 2;
};

// let myBtn2 = document.getElementById("save-btn");
// myBtn2.onclick = () => {
//   document.getElementById("output2").innerHTML = "Your no. is " + count * 2;
// };
