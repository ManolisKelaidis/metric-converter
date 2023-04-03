let inputEl = document.getElementById("input-field");
let btnEl = document.getElementById("inp-btn");
let meterEl = document.getElementById("meter");
let litersEl = document.getElementById("liters");
let kilogramEl = document.getElementById("kilogram");
console.log(inputEl);
input = "";

btnEl.addEventListener("click", function () {
  input = inputEl.value;
  console.log(input);

  meterEl.textContent = `${input} meters = ${
    input * 3.281
  } feet | ${input} feet = ${input * 0.3048} meters`;
  litersEl.textContent = `${input} liters = ${
    Math.round(input * 0.264172052 * 1000) / 1000
  } galons | ${input} galons = ${
    Math.round(input * 3.78 * 1000) / 1000
  } liters`;
  kilogramEl.textContent = `${input} kilograms = ${
    Math.round(input * 2.204 * 1000) / 1000
  } pounds | ${input} pounds = ${
    Math.round(input * 0.453 * 1000) / 1000
  } kilograms`;
});
