let count = 0;

let mybtn_count = (document.querySelector("h1").onclick = () => {
  count++;
  document.querySelector("h1").innerHTML = count;
});

let getName_btn = document.getElementById("my-btn");
getName_btn.addEventListener("click", () => {
  let getName_value = document.getElementById("name").value;

  if (getName_value === "Jaden") {
    document.getElementById("nameValue").innerHTML = `Hello, ${getName_value}`;
    document.getElementById("nameValue").style.color = "green";
  } else if (getName_value === "jaden") {
    document.getElementById("nameValue").innerHTML =
      "*Please used Upper case letter ";
    document.getElementById("nameValue").style.color = "red";
  } else {
    document.getElementById("nameValue").innerHTML = "*Invalid name";
    document.getElementById("nameValue").style.color = "red";
  }
});

let addBtn = (document.getElementById("btn-results").onclick = () => {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);

  Number((document.getElementById("results2").innerHTML = num1 + num2));
});
let multiplyBtn = (document.getElementById("btn-results2").onclick = () => {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);

  Number((document.getElementById("results2").innerHTML = num1 * num2));
});
