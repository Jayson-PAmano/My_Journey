let fruits = ["apple", "orange", "grapes"];
let colors = ["red", "green", "blue", "yellow"];
let counter = 0;
let heroes = "Elemental Heroes";
let letters = ["a", "b", "c"];
let letters2 = ["d", "e", "f"];

/***********************STARTS HERE*************************/

//functions

getName = (name) => {
  console.log(`Hello, ${name}`);
};
callName = () => {
  getName("jaden");
};
callName();

getSum = (n1, n2) => n1 + n2;
console.log(getSum(2, 2));

doubleNum = (sum1) => {
  sum1 = getSum(2, 2);
  let doubleSum = sum1 * 2;
  return doubleSum;
};
console.log(doubleNum());

getRemainder = (r1) => {
  if (r1 % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
};
getRemainder(2);

//Loops

while (counter < 5) {
  console.log(counter);
  counter++;
}
console.log("\n");

while (counter > 0) {
  console.log(counter);
  counter--;
}

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
console.log("\n");

for (let i = colors.length - 1; i >= 0; i--) {
  console.log(colors[i]);
}
console.log("\n");
for (i = 0; i < heroes.length; i++) {
  console.log(heroes.charAt(i).toUpperCase());
}
console.log("\n");

//Objects
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

const person1 = {
  name: "John",
  age: 35,
  job: "carpenter",
};
console.log(
  `Name: ${person1.name} \n Age:${person1.age}\n occupation:${person1.job}`
);
console.log("\n");
const cars = {
  car1: "Toyota",
  car2: "Honda",
  car3: "Ford",
  callCars: () => {
    console.log(`Car1: ${cars.car1}\nCar2: ${cars.car2}\nCar3: ${cars.car3}`);
  },
};
cars.callCars();
console.log("\n");
const songs = {
  song1: "Happy",
  song2: "Sad",
  song3: "Angry",
};

const mySongs = {
  callSongs: function () {
    console.log(
      `Song1: ${songs.song1}\nSong2: ${songs.song2}\nSong3: ${songs.song3}`
    );
  },
};
mySongs.callSongs.call(songs);
console.log("\n");
for (let i = 0; i < person.length; i++) {
  console.log(`Name: ${person[i].firstName} \n Age: ${person[i].age}`);
}
