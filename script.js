/* =========================================================
   PART 1  –  Variables, data types, operators, conditionals
   =========================================================*/

// Grab DOM nodes once to avoid repetition
const ageInput = document.getElementById('ageInput');
const ageBtn   = document.getElementById('ageBtn');
const ageMsg   = document.getElementById('ageMsg');

// Event listener uses simple branching logic
ageBtn.addEventListener('click', () => {
  const age = Number(ageInput.value);   // Convert string → number
  if (!age && age !== 0) {
    ageMsg.textContent = 'Please enter a number.';
  } else if (age >= 18) {
    ageMsg.textContent = 'You are an adult.';
  } else {
    ageMsg.textContent = 'You are a minor.';
  }
});

/* =========================================================
   PART 2  –  Re-usable Functions
   =========================================================*/

// Utility #1: format currency
function formatCurrency(value) {
  return '$' + value.toFixed(2);
}

// Utility #2: sum numeric values from DOM elements
function sumDataAttributes(selector, attr) {
  let total = 0;
  document.querySelectorAll(selector).forEach(el => {
    total += Number(el.dataset[attr]);
  });
  return total;
}

// Hook it up
const calcBtn = document.getElementById('calcBtn');
const totalMsg = document.getElementById('totalMsg');
calcBtn.addEventListener('click', () => {
  const total = sumDataAttributes('#cartList li', 'price');
  totalMsg.textContent = `Total: ${formatCurrency(total)}`;
});

/* =========================================================
   PART 3  –  Loops
   =========================================================*/

// Example #1: classic for loop (countdown)
const countBtn = document.getElementById('countBtn');
countBtn.addEventListener('click', () => {
  let output = '';
  for (let i = 5; i >= 1; i--) {
    output += i + (i === 1 ? '' : ' • ');
  }
  alert(output);
});

// Example #2: forEach loop (dynamic list creation)
const listBtn = document.getElementById('listBtn');
const dynamicList = document.getElementById('dynamicList');
listBtn.addEventListener('click', () => {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
  dynamicList.innerHTML = '';           // clear previous
  fruits.forEach(fruit => {
    const li = document.createElement('li');
    li.textContent = fruit;
    dynamicList.appendChild(li);
  });
});

/* =========================================================
   PART 4  –  Additional DOM Interactions
   =========================================================*/

// Interaction #3: highlight <li> on click
document.addEventListener('click', e => {
  if (e.target.matches('#cartList li')) {
    e.target.classList.toggle('highlight');  // toggle CSS class
  }
});