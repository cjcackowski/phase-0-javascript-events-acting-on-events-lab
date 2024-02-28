// Your code here
const dodger = document.getElementById("dodger");

document.addEventListener("keydown", function (event) {
  console.log(event);
});

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left= parseInt(leftNumbers, 10);
  const rightEdge = left + 40; 

  // Check if the right edge is less than the game field width (adjust the width accordingly)
  if (rightEdge < window.innerWidth) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});