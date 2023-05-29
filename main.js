const daysIn = document.getElementById('day');
const monthIn = document.getElementById('month');
const yearIn = document.getElementById('year');
const daysOut = document.querySelector('.days span');
const monthsOut = document.querySelector('.months span');
const yearsOut = document.querySelector('.years span');

const button = document.querySelector('button');
button.addEventListener('click', calculateAge);

function calculateAge() {
  const day = parseInt(daysIn.value);
  const month = parseInt(monthIn.value) - 1;
  const year = parseInt(yearIn.value);

  const inputDate = new Date(year , month , day);
  const currentDate = new Date();
//   console.log(currentDate);

  const ageDifference = currentDate - inputDate;
//   console.log(ageDifference);

  const age = new Date(ageDifference);
  const years = age.getFullYear() - 1970;
  const months = age.getMonth();
  const days = age.getDate() - 1;

  yearsOut.textContent = years;
  monthsOut.textContent = months;
  daysOut.textContent = days;
}
