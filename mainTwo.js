"use strict";

let el = document.querySelector("#canvas1");
let context = el.getContext("2d");

el.addEventListener("touchstart", (e) => {
    e.preventDefault();
  const rect = event.target.getBoundingClientRect(); // target the event
  context.beginPath();
  console.log(e.touches);
  let X = e.touches[0].clientX - rect.left;
  let Y = e.touches[0].clientY - rect.top;
  drawing(X, Y);
  console.log(X, Y);
});
el.addEventListener("touchmove", makeSignature);

function makeSignature(e) {
  e.preventDefault();
  const rect = event.target.getBoundingClientRect(); // target the event
  console.log(e.touches);
  let X = e.touches[0].clientX - rect.left;
  let Y = e.touches[0].clientY - rect.top;
  drawing(X, Y);
  console.log(X, Y);
}

function drawing(x, y) {
  context.lineWidth = "2";
  context.strokeStyle = "black";
  context.lineTo(x, y);
  context.stroke();
}
