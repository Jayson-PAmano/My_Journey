let myBtn = document.getElementById("my-btn");
// myBtn.onclick = () => {
//   document.getElementById("results").innerHTML = "Hello,World";
// };
// myBtn.addEventListener("click", () => {
//   document.getElementById("results").innerHTML = "Hello,World again";
// });
myBtn.onclick = () => {
  let getName = document.getElementById("name").value;
  document.getElementById("results").innerHTML = `Hello, ${getName}`;
};
let sum1 = Number(document.getElementById("num1").value);
let sum2 = Number(document.getElementById("num2").value);
let getSum = (document.getElementById("btn-results").onclick = () => {
  document.getElementById("results2").innerHTML = sum1 + sum2;
});
let getDoubleSum = (document.getElementById("btn-results2").onclick = () => {
  document.getElementById("results2").innerHTML = (sum1 + sum2) * 2;
});

let count = 0;
document.querySelector("h1").addEventListener("click", () => {
  count++;
  document.querySelector("h1").innerHTML = count;
});
