const decreaseCounterBut = document.querySelector("#decrease-counter");
const increseCounterBut = document.querySelector("#increase-counter");
const counterDisplay = document.querySelector(".counter-display");

let count = 0;

decreaseCounterBut.addEventListener("click", () => {
  count--;
  counterDisplay.textContent = count;
  if (count === 0) {
    decreaseCounterBut.disabled = true;
    return;
  }
});

increseCounterBut.addEventListener("click", () => {
  decreaseCounterBut.disabled = false;

  count++;
  counterDisplay.textContent = count;
});
