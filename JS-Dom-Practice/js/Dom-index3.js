const body = document.body;
// body.append("hello, world");

// const div = document.createElement("strong");
// div.innerText = "hello";
// div.textContent = "hello2";
// div.innerHTML = "hello";
// body.append(div);

// const div2 = document.querySelector("div");
// console.log(div2.textContent);
// console.log(div2.innerText);

const div2 = document.querySelector("div");
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");

// spanBye.remove();
// div2.append(spanBye);
// div2.remove(spanHi);

// spanHi.remove();
console.log(spanHi.getAttribute("title"));
console.log((spanHi.title = "eow"));

console.log((spanHi.id = "eow2"));
console.log(spanHi.setAttribute("id", "newId"));

spanHi.removeAttribute("id");
