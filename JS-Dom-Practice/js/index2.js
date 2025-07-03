const changeTitle = document.querySelector("button");
changeTitle.addEventListener("click", function () {
  let title = document.querySelector("h1").textContent;
  let newTitle = prompt("Enter new title");
  document.querySelector("h1").textContent = "Hello, " + newTitle;
});
