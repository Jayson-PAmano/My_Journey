let colors = ["blue", "green", "red", "yellow"];
let colors2 = ["pink", "black", "gray", "orange"];
let fruits = ["apple", "banana", "orange", "grapes"];
let alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let heroes = "Elemental Hero";
let country = [
  { name: "USA", population: 331002651 },
  { name: "Canada", population: 37742154 },
  { name: "Mexico", population: 127575529 },
];
/***************************** CODE STARTS **********************************/
getNum = (n1, n2) => n1 + n2;
console.log(getNum(5, 3));

getSum = (num1, num2) => num1 + num2;

doubleNum = () => console.log(getSum(5, 5) * 2);

doubleNum();
getName = (name) => {
  name = "Jaden";
  console.log("hello, " + name);
};

callName = () => getName();
callName();
