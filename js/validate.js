// // validation code
// var input = document.getElementById("input");
//
// document.getElementById("submit").addEventListener("click", function() {
//   validateForm(input.value);
// })
//
// window.addEventListener("keydown", function(e) {
//   if (e.key == "Enter") {
//       validateForm(input.value);
//   }
// })
//
// function validateForm(x) {
//   if (x == "9143630149") {
//     alert("Congrats. You made it. text (914) 363-0149 for the next step.");
//     return false;
//   } else {
//     alert("try Again");
//   }
// }
//

// hover code
var verse = document.getElementById("verse");
var verseHover = document.getElementById("verse-hover");

verse.addEventListener("mouseenter", function(e) {
  verseHover.style.opacity = 1;
});
verse.addEventListener("mouseleave", function() {
  verseHover.style.opacity = 0;
});
