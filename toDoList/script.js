// 'use strict';

const log = console.log;

/*

let j = 0;

while (j <= 5) {
  // this code here is only going to run when this condition is true;
  log(j);
  j++;
  //0
  //1
  //2
  //3
  //4
  //5
  // wont run the code anymore because 6 > 5 so it stops
}

const target = Math.floor(Math.random() * 10); // const because you won't change the value of the target during the game
let guessNumber = Math.floor(Math.random() * 10); // this value will change therefore let, so you can assign a new value to guessNumber
// let guessNumber; you can also left undefined

while (guessNumber !== target) {
  log(`Target: ${target} Guess: ${guessNumber}`);
  guessNumber = Math.floor(Math.random() * 10);
}

log(`Target: ${target} Guess: ${guessNumber}`);
log(`congrats you win!`);

// ROYGBIV
// put the return outside of the loop otherwise the loop will stop after the first indice is false;
const rainbow = ['red', 'orange', 'yellow', 'blue', 'indigo', 'violet'];

const containsPurple = (colors) => {
  for (let color of colors) {
    if (color === 'blue' || color === 'indigo') {
      log(color);
      return true;
    }
  }
  return false;
};

log(containsPurple(rainbow));

// ==== this ====
// both this is refering to the object

const person = {
  first: 'Cherilyn',
  last: 'Sarkisian',
  nickName: 'Cher',
  fullName() {
    //destructering the object
    const { first, last, nickName } = this;
    return `${first} ${last} AKA ${nickName}`; // the object of this has not been set to the window but to this object person
  },
  printBio() {
    const fullName = this.fullName();
    return `${fullName} is amazing`.toUpperCase();
  },
};

person.nickName = 'CHERRRRR'; // CHANGING THE NICKNAME VALUE

log(person.fullName()); // the object on the left
log(person.printBio());

// ========================== DOM ========================= 

const allLis = document.querySelectorAll('li');

for (let li of allLis) {
  li.classList.add('color-li');
  // li.style.color = 'blue' <--- inline styling
}

*/

const addToDoBtn = document.querySelector('#addToDo');
const toDoContainer = document.querySelector('#toDoContainer');
const input = document.querySelector('#inputfield');

addToDoBtn.addEventListener('click', function () {
  const paragraph = document.createElement('p');
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText = input.value;
  toDoContainer.appendChild(paragraph);
  input.value = '';

  paragraph.addEventListener('click', linethrough);

  paragraph.addEventListener('dblclick', removeParagraph);
});

const linethrough = function () {
  this.style.textDecoration = 'line-through';
};

const removeParagraph = function () {
  toDoContainer.removeChild(this);
};

