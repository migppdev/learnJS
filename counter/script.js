const decreaseCounterBut = document.querySelector("#decrease-counter");
const increaseCounterBut = document.querySelector("#increase-counter");
const counterDisplay = document.querySelector(".counter-display");

let count = 0;
decreaseCounterBut.disabled = true;

decreaseCounterBut.addEventListener("click", () => {
  count--;
  counterDisplay.textContent = count;
  if (count === 0) {
    decreaseCounterBut.disabled = true;
    return;
  }
});

increaseCounterBut.addEventListener("click", () => {
  decreaseCounterBut.disabled = false;
  count++;
  counterDisplay.textContent = count;
});
