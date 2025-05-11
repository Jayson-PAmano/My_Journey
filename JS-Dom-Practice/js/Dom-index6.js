const addBtn = (document.getElementById("btn-results").onclick = () => {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let results = num1 + num2;
  document.getElementById("results2").innerHTML = results;
});

const timesBtn = (document.getElementById("btn-results2").onclick = () => {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let results = num1 * num2;
  document.getElementById("results2").innerHTML = results;
});

let count = 0;
let MAX_LIMIT = 5;
let MAX_LIMIT2 = 10;
const addOne = document
  .getElementById("addOne")
  .addEventListener("click", () => {
    count++;
    document.querySelector("h1").innerHTML = count;
    if (count === MAX_LIMIT) {
      document.querySelector("h2").innerHTML =
        "*You've reach the maximum amount of number";
      document.querySelector("h2").style.color = "red";
    } else {
      document.querySelector("h2").innerHTML = "";
    }
    {
      if (count === MAX_LIMIT2) {
        document.querySelector("h2").innerHTML =
          "*Stop! You've reach the maximum amount of number";
        document.querySelector("h2").style.color = "red";
      }
    }
  });
let currentColor = "red";
let ChangeBg = document.getElementById("box");
changeBg = () => {
  if (currentColor === "red") {
    ChangeBg.style.backgroundColor = "blue";
    currentColor = "blue";
  } else {
    ChangeBg.style.backgroundColor = "red";
    currentColor = "red";
  }
};
const body = document.body;
const div = document.createElement("div");
const para = document.createElement("p");
const para2 = document.createElement("p");
const boldText = document.createElement("strong");
const largeText = document.createElement("h1");

largeText.innerHTML = "I'am a paragraph with large font";
boldText.innerText = "hello, world";
para2.innerText = "I'am a normal paragraph";

para.append(largeText);
div.append(boldText);

body.append(para);
body.append(div);
body.append(para2);

const spanHi = document.getElementById("hi");
const spanBye = document.getElementById("bye");
const spanDiv = document.getElementById("mainDiv");

spanHi.innerHTML = spanHi.setAttribute("id", "newId");
spanHi.innerHTML = spanHi.getAttribute("id");
spanBye.remove();
// spanDiv.append(spanBye);
