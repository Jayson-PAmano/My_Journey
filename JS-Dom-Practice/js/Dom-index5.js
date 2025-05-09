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

const myBtn = (document.querySelector("button").onclick = () => {
  changeBg.style.backgroundColor = "red";
});
