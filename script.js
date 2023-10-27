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
const day = date.getDate();
const month = 1 + date.getMonth();
const year = date.getFullYear();

// For the months
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Function VALIDATOR
function validator() {
  const inputs = [dayInput, monthInput, yearInput];
  const validator = true;
  inputs.forEach((input) => {
    const parent = input.parentElement;
    if (input.value === '') {
      input.classList.add('error');
      parent.querySelector('small').innerText = 'This field is required';
    }
  });
}
