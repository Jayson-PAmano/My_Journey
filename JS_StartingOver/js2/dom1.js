let getName = document.getElementById("getName");
getName.onclick = () => {
  let name = document.getElementById("myName").value;
  if (name === "") {
    document.getElementById("Results").innerText = "*Please enter your name";
    document.getElementById("Results").style.color = "red";
  } else {
    document.getElementById("Results").innerText = `Hello, ${name}`;
    document.getElementById("Results").style.color = "seagreen";
  }
};

let count = 0;

let numCount = document.getElementById("countNum");

let countBtn = document
  .getElementById("btnCount")
  .addEventListener("click", () => {
    count++;
    numCount.innerText = count;
  });

function addNums(n1, n2, sum) {
  n1 = Number(document.getElementById("num1").value);
  n2 = Number(document.getElementById("num2").value);

  sum = Number(n1 + n2);
  document.getElementById("sumResults").innerText = sum;
}
