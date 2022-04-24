

// // ELEMENT SELECTORS

// // Single Element Selectors
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));
// // Multiple Element Selectors //To select more than one thing.
// console.log(document.querySelectorAll('.item')); //can select anything like id, class, etc, and it gives the nodelist.
// console.log(document.getElementsByTagName('li'));
// console.log(document.getElementsByClassName('item'));

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item)); //it will give each of the list items.


// // MANIPULATING THE DOM
// const ul = document.querySelector('.items'); //to select single element, querySelector is used.
// // ul.remove();
// ul.lastElementChild.remove(); //to remove last element of the ul.
// ul.firstElementChild.textContent = 'Hello'; //the first child element is change to Hello.
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';// to add the content dynamically we use innerHTML.

// const btn = document.querySelector('.btn');
// btn.style.background = 'red'; //We can change the style directly in the user interface in real time.


// // EVENTS

// // Mouse Event
// btn.addEventListener('click', e => {
//   e.preventDefault(); //To prevent the default behaviour.
//   console.log(e.target.className);
//   document.getElementById('my-form').style.background = '#ccc';
//   document.querySelector('body').classList.add('bg-dark'); //iyt changes the body background.
//   ul.lastElementChild.innerHTML = '<h1>Changed</h1>'; // to change the text in UI.
// });

// Keyboard Event
// const nameInput = document.querySelector('#name');
// nameInput.addEventListener('input', e => {
//   document.querySelector('.container').append(nameInput.value);
// });


// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error'); //To add the style of a specified class
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000); //function to disappear the mentioned variable after the specified time.
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}