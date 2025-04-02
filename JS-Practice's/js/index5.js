let count = 0;
let countNum = document.getElementById("count-num");
let btn = document.getElementById("addOne");

btn.addEventListener("click", () => {
  count += 1;
  countNum.textContent = count;
});

let changeText = document.getElementById("change-text");
changeText.onclick = (newTitle) => {
  newTitle = "Advance";
  document.querySelector("h1").textContent = `JavaScipt ${newTitle}`;
};

changeColor = () => {
  document.body.style.backgroundColor = "gray";
  document.querySelector("h1").style.color = "whitesmoke";
};
