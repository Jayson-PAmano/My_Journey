getName = () => {
  let myName = document.getElementById("getName").value;
  document.getElementById("name_Results").innerText = `Hello, ${myName}`;
};
