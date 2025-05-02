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
