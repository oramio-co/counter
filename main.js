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
  // content for display. Then updates the color of value displayed.
  btn.addEventListener('click', () => {
    updateCount(n);
    value.textContent = count;
    updateColor();
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

// Updates the color of value (which displays current count) given by current 
// count: black if 0, green if positive, and red if negative.
const updateColor = () => {
  if (count === 0 ) {
    value.style.color = "black";
  } else if (count > 0) {
    value.style.color = "green";
  } else {
    value.style.color = "red";
  }
}