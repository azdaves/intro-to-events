const myButtonEl = document.querySelector("button");
const myInputEl = document.querySelector("input");

myButtonEl.addEventListener("click", function() {
  console.log("clicked")
})

myInputEl.addEventListener("input", function() {
  console.log("input received")
})