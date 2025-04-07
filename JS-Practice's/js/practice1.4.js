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
let heroes = "ElementalHeroes";
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
    age: 31,
    favColor: "green,",
  },
];

let Output1 = document.getElementById("output1");
let Output2 = document.getElementById("output2");
let Output3 = document.getElementById("output3");

let myBtn = document.querySelector("button").addEventListener("click", () => {
  //   for (i = 0; i < colors.length; i++) {
  //     string += colors[i] + " ";
  //     Output1.innerHTML = `${string} ${i}`;
  //   }
  //   getNumbers = () => {
  //     let sum = 0;
  //     for (let i = 0; i < numbers.length; i++) {
  //       sum += numbers[i];
  //       Output2.innerHTML = `Sum of numbers: ${sum}`;
  //     }
  //   };
  //   getNumbers();
  //   count_ten = () => {
  //     let count = 0;
  //     for (let i = 0; i < 10; i++) {
  //   if (numbers[i] > 10) {
  //     count += 1;
  //     Output3.innerHTML = `Count of numbers greater than 10: ${count}`;
  //   }
  //       Output1.innerHTML += "<br>" + i;
  //       if (i == 9) {
  //         Output1.innerHTML +=
  //           "<br>" + "STOP! count of numbers greater than 10: ";
  //         break;
  //       }
  //     }
  //   };
  //   count_ten();
  //   getRemainder = (myRemainder) => {
  //     if (myRemainder % 2 === 0) {
  //       Output1.innerHTML = `The remainder is even: ${myRemainder}`;
  //     } else {
  //       Output1.innerHTML = `The remainder is odd: ${myRemainder}`;
  //     }
  //   };
  //   getRemainder(3);
  //   const getPerson = {
  //     callPerson: () => {
  //       return `Name: ${person1.name} <br> Age:${person1.age}`;
  //     },
  //   };
  //   Output1.innerHTML = getPerson.callPerson.call(person1);

  getLetters = () => {
    for (i = 0; i < heroes.length; i++) {
      Output1.innerHTML += heroes[i].toUpperCase() + " ";
      if (heroes[i] === "N") {
        Output1.innerHTML += `N is at index ${i} `;
      }
    }
  };
  getLetters();
});
