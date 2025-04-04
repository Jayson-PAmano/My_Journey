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
let colors = ["red", "green", "blue"];
let numbers = [22, 32, 11, 53, 123];
let text = "";
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
getName = (name) => `Hello, ${name}`;
console.log(getName("jaden"));

getSum = (n1, n2) => n1 + n2;
console.log(getSum(5, 7)); // Outputs: 12

for (i = 0; i < 5; i++) {
  console.log(i);
  if (i > 2) {
    console.log(`${i} is true`);
    break;
  } else {
    console.log(`${i}  is false`);
  }
}
getRemainder = (R1) => {
  if (R1 % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
};
getRemainder(3);

for (i = 0; i < colors.length; i++) {
  console.log(i + colors[i]);
  if (colors[i] === "blue") {
    console.log("Correct color is: " + colors[i]);
    break;
  } else {
    console.log(`Color ${colors[i]} Invalid color`);
    // console.log(`You did not select the colors available`);
    // break;
  }
}

for (i = 0; i < person.length; i++) {
  console.log(i);
  console.log(person[i].firstName + person[i].age);
}

for (i = 0; i < heroes.length; i++) {
  console.log(heroes.charAt(i));
  if (heroes.charAt(i) === "H") {
    console.log("Your letter is " + heroes.charAt(i) + " located at index" + i);
  }
  if (heroes.charAt(i) === "l") {
    console.log("Your letter is " + heroes.charAt(i) + " located at index" + i);
  }
}
