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

getRamainder = (num) => {
  if (num % 2 == 0) {
    console.log("Odd");
  } else {
    console.log("Even");
  }
};

getRamainder(2);
getSum = (n1, n2) => n1 + n2;
console.log(getSum(5, 5));
getName = (name) => (name = "Jaden");
console.log(getName());

const Person = {
  name: "John",
  age: 30,
  occupation: "Plumber",
  address: "California",
};
const Person2 = {
  name: "Jane",
  age: 25,
  occupation: "Sales lady",
  getInfo: () => {
    return `Name: ${Person2.name}, Age: ${Person2.age}, Occupation: ${Person2.occupation}`;
  },
};
console.log(Person2.getInfo());

const getPerson = {
  personInfo: () => {
    return `Name: ${Person.name}, Age: ${Person.age}, Occupation: ${Person.occupation}`;
  },
};

console.log(getPerson.personInfo.call(Person));

doubleValue = (n1, n2, doubleNum) => {
  doubleNum = 2;
  return (n1 + n2) * doubleNum;
};
console.log(doubleValue(5, 3));

for (i = 0; i < colors.length; i++) {
  console.log(`Index: ${i} Color: ${colors[i]}`);
  if (colors[i] == "blue") {
    console.log("Found it!" + colors[i].toUpperCase());
    break;
  } else {
    console.log(colors[i] + " Error");
  }
}

for (i = 0; i < heroes.length; i++) {
  // console.log(heroes[i]);
  console.log(heroes.charAt(i));
  if (heroes[i] === "H") {
    console.log("Found the letter " + heroes[i] + " at index " + i);
  }
  if (heroes[i] === "o") {
    console.log("Found the letter " + heroes[i] + " at index " + i);
  }
}
console.log("\n");
// Check if heroes is a string, not an array
// if (typeof heroes === "string") {
//   for (let i = 0; i < heroes.length; i++) {
//     console.log(`Character at index ${i}: ${heroes.charAt(i)}`);
//     if (heroes.charAt(i) === "H") {
//       console.log(`Found the letter "H" at index ${i}`);
//     }
//     if (heroes.charAt(i) === "o") {
//       console.log(`Found the letter "o" at index ${i}`);
//     }
//   }
// } else {
//   console.error("heroes is not a string");
// }
