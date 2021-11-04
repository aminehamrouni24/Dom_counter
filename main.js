let counter = 0;
let btnPlus = document.getElementById("plus");
let btnMinus = document.getElementById("minus");
let display = document.getElementById("display");

btnPlus.addEventListener("click", function () {
  counter++;

  display.innerHTML = counter;
});

btnMinus.addEventListener("click", function () {
  if (counter > 0) {
    counter--;
  }
  display.innerHTML = counter;
});

display.innerHTML = counter;
let plusHeart = document.getElementById("heartP");
let minusHeart = document.getElementById("heartM");

plusHeart.addEventListener("click", function () {
  plusHeart.style.color = "red";
});
minusHeart.addEventListener("click", function () {
  minusHeart.style.color = "purple";
});
