// Set initial count
let count = 0;

// Select value and buttons
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  // Set value of n depending on btn currently assigning. Will use btn id to set
  // either -1, 0, or 1 given Decrease, Reset or Increment, respectively.
  let n = 0;
  if (btn.id === "decrease") {
    n = -1;
  } else if (btn.id === "increase") {
    n = 1;
  }

  // Set event listener to btn: will use the corresponding updateCount for 
  // decrementing, resetting, or increaseing count, and updating the value 
  // content for display.
  btn.addEventListener('click', () => {
    updateCount(n);
    value.textContent = count;
  });
});

// Updates value of count based on n. 0 sets count to 0, +n will increment 
// count by n, and -n will decrement count by n.
const updateCount = (n) => {
  if (n === 0) {
    count = 0;
  } else {
    count += n;
  }
}