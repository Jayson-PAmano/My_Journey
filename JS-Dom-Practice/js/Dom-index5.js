const body = document.body;

const myText = document.createElement("p");
const boldText = document.createElement("strong");

boldText.textContent = "Hello, World!";
myText.style.color = "blue";
myText.style.fontSize = "24px";
myText.style.fontFamily = "Arial";

const div2 = document.querySelector("div");
const span1 = document.querySelector("#hi");
const span2 = document.querySelector("#bye");
const span3 = document.querySelector("#hello");

// span1.innerHTML = span1.getAttribute("title");
console.log(span1.getAttribute("title"));
// span1.remove();
// div2.append(span1);

span2.setAttribute("id", "bye2");

myText.append(boldText);
body.append(myText);

const changeBg = document.getElementById("box");
let currentColor = "red";
const myBtn = (document.querySelector("#mybtn").onclick = () => {
  if (currentColor === "red") {
    changeBg.style.backgroundColor = "blue";
    currentColor = "blue";
  } else {
    changeBg.style.backgroundColor = "red";
    currentColor = "red";
  }
});

const MAX_LIMIT = 5;
let count = 0;
const countNumber = document.querySelector("h1");
const limit = document.querySelector("h2");
countNumber.addEventListener("click", () => {
  count += 1;
  countNumber.textContent = count;
  if (count === MAX_LIMIT) {
    limit.textContent = "*You've reach the maximum number";
    limit.style.color = "red";
  }
});
