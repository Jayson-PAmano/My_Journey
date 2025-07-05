let count = 0;
let countEl = document.getElementById("count-El");
let btn = document.getElementById("btn-count");

btn.addEventListener("click", () => {
  count += 1;
  countEl.textContent = count;
});
