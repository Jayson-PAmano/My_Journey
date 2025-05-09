const body = document.body;
// const text = document.createElement("h1");
// const div = document.createElement("div");
// const boldText = document.createElement("strong");

// boldText.innerText = "Iam a paragraph";
// text.textContent = "Hello, World!";

// div.append(boldText);
// body.append(div);
// body.append(text);
const div2 = document.querySelector("div");
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");
const spanMeet = document.querySelector("#hello");

// spanBye.remove();
// div2.append(spanBye);
// div2.remove(spanHi);

// console.log(spanHi.getAttribute("id"));
// console.log(spanHi.title);

// spanHi.setAttribute("id", "hie");
// spanHi.id = "eow";

// spanHi.removeAttribute("id");

console.log(spanHi.dataset.test);
console.log(spanBye.dataset);

spanMeet.dataset.newTest = "Nice to meet you";
