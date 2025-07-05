let myBtn = document.getElementById("myBtn");
let characters = "A-Z !_@#$%^&*()";
myBtn.onclick = () => {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);

  let result = num1 + num2;
  document.getElementById("results").innerHTML = result;
};
