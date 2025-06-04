const letters = ["a", "b", "c"];
// for (let index = 0; index < letters.length; index++) {
//   log(letters[index], index);
// }

// function log(element, index) {
//   console.log(`index: ${index}`);
//   console.log(`element: ${letters[index]}`);
// }
// letters.forEach(log);

letters.forEach((Element, Index) => {
  console.log(`index: ${Index}`);
  console.log(`element: ${Element}`);
});
