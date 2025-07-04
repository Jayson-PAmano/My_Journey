const changeTitle = document.querySelector("button");
changeTitle.addEventListener("click", function () {
  document.querySelector("h1").textContent;
  let newTitle = prompt("Enter new title");

  if (newTitle === "") {
    document.querySelector("h1").textContent = "*Please do not leave empty";
    document.querySelector("h1").style.color = "red";
  } else if (newTitle === null) {
    document.querySelector("h1").textContent = "*Please do not leave empty";
  } else {
    document.querySelector("h1").textContent = "Hello, " + newTitle;
    document.querySelector("h1").style.color = "tomato";
  }
});
