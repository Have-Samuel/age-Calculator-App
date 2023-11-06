// VARIABLES
const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');
const dayOutput = document.querySelector('#day-sec');
const monthOutput = document.querySelector('#month-sec');
const yearOutput = document.querySelector('#year-sec');
const form = document.querySelector('.form');

// FUNCTIONS
const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

// For the months
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Function VALIDATOR
function validate() {
  const inputs = [dayInput, monthInput, yearInput];
  let validator = true;
  inputs.forEach((input) => {
    const parent = input.parentElement;
    if (!input.value) {
      input.classList.add('error');
      parent.querySelector('small').innerText = 'This field is required';
      input.style.border = '1px solid red';
      parent.style.color = 'red';
      validator = false;
    } else if (monthInput.value > 12) {
      monthInput.classList.add('error');
      monthInput.parentElement.querySelector('small').innerText = 'Invalid month';
      validator = false;
    } else if (
      dayInput.value > months[monthInput.value - 1]) {
      dayInput.classList.add('error');
      dayInput.parentElement.querySelector('small').innerText = 'Invalid day';
      validator = false;
    } else if (yearInput.value > year || yearInput.value.length < 4) {
      yearInput.classList.add('error');
      yearInput.parentElement.querySelector('small').innerText = 'Must in the past';
      validator = false;
    }
  });
  return validator;
}

// Function CALCULATE
function calculate(e) {
  e.preventDefault();
  if (validate()) {
    if (dayInput.value > day) {
      day += months[month - 1];
      month -= 1;
    }
    if (monthInput.value > month) {
      month += 12;
      year -= 1;
    }
    const dayValue = dayInput.value;
    const monthValue = monthInput.value;
    const yearValue = yearInput.value;

    const daySec = day - dayValue;
    const monthSec = month - monthValue;
    const yearSec = year - yearValue;

    dayOutput.innerText = daySec;
    monthOutput.innerText = monthSec;
    yearOutput.innerText = yearSec;
  }
}

form.addEventListener('submit', calculate);