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

GetName = (name) => {
  name = "aster";
  if (name === "jaden") {
    return name;
  } else {
    console.log("false");
  }
};
console.log(GetName());
getSum = (n1, n2) => console.log(n1 + n2);
getSum(2, 1);
multiplier = (n1, n2) => n1 * n2;
console.log(multiplier(5, 2));

let x = myFunction(3, 1);
function myFunction(a, b) {
  console.log(a + b);
}

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
  if (i == 5) {
    console.log(`you'r the number end in # ${i}`);
    break;
  }
}

for (let i = 0; i < colors.length; i++) {
  console.log(`index: ${i} color: ${colors[i]}`);
}
for (let i = 0; i < alphabets.length; i++) {
  console.log(i + " " + alphabets[i]);
}
const person = {
  name: "John",
  age: 30,
  occupation: "Developer",
};
const person2 = {
  name: "Jane",
  age: 25,
  occupation: "Pharmacist",
  fullDetails: () => {
    console.log(
      `Name: ${person2.name}, Age: ${person2.age}, Occupation: ${person2.occupation}`
    );
  },
};
const person3 = {
  getDetails: () => {
    console.log(
      `Name: ${person.name}, Age: ${person.age}, Occupation:${person.occupation}`
    );
  },
};

console.log(person.name);
person2.fullDetails();
person3.getDetails.call(person);
console.log(
  "*******************************************************************"
);
fruits.forEach((element, index) => {
  console.log(`index: ${index} fruit: ${element}`);
});
persons.forEach((element, index) => {
  console.log(`index: ${index} person: ${element.firstName}`);
});

const newPersos = persons.map((el) => {
  return el.firstName;
});
console.log(newPersos);

const carYears = cars.filter((el) => {
  return el.year == 1988;
});
console.log(carYears);
// let Numbers = numbers.filter((num) => {
//   return num > 5;
// });
// console.log(Numbers);
console.log(numbers.filter((num) => num > 2));
