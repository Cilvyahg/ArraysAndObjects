'use strict;';

const log = console.log;

// === SORT Live Les ====
//  - het wordt op de plaatst gesorteerd, dus het originele array wordt ook aangepast, maar GEEFT ook een nieuwe array terug. Dit is bij andere array Methods niet het geval.

const numbers = [5, 4, 3, 2, 1];

const sortedNumbers = numbers.sort();
log(sortedNumbers, numbers);

const letters = ['b', 'a', 'c', 'd', 'e'];
const sortedLetters = letters.sort();
log(sortedLetters); // output : [ a b c d e ]
log(letters); // het orginele array is tevens op plaatst gesorteerd en dus gewijzigd.

const complex = ['b', 'a', 'c', 'e', 'd', 'B', 'C', 'ø', 'Ë'];
const sortedComplex = complex.sort();
log(sortedComplex); // output: ['B', 'C', 'a', 'b', 'c', 'd', 'e', 'Ë', 'ø'];

// === NESTED LOOPS ===

for (let i = 0; i <= 10; i++) {
  log('outer loop', i);
  for (let j = 10; j >= 0; j -= 2) {
    log('      innerloop', j);
  }
}

// the innerloop completes it full cycle. the outer loop just iterates one.

const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2],
];

// we need two loops because we have two arrays nested.

let totalScore = 0;
// first loop is going to iterate over the outer loop and then the  inner loop
for (let numbers of gameBoard) {
  log('outerloop', numbers);
  for (let number of numbers) {
    log('innerloop', number);
    totalScore += number;
    log('totalscore', totalScore);
  }
}
// Object: adding and updating properties

const userReviews = {}; // empty object

userReviews['queenBee49'] = 4.0; // kan met de bracket en quotation notation
userReviews.majorie92 = 6.5; // kan ook met een dot notation

//updating properties
userReviews['queenBee49'] += 2;

log(userReviews);

log('27/11/1992'.split('', 2));

// NESTED ARRAYS AND OBJECTS

const student = {
  firstName: 'David',
  lastName: 'Jones',
  strength: ['Music', 'Art'],
  exams: {
    midterm: 92,
    final: 88,
  },
};

// how to access and find the average of midterm and final

const averageExamGrade = (student.exams.midterm + student.exams.final) / 2;
log(averageExamGrade); // output 90;

// array of objects

const shoppingCart = [
  {
    product: 'Jenga Classics',
    price: 6.88,
    quantity: 1,
  },
  {
    product: 'Echo Dot',
    price: 29.99,
    quantity: 3,
  },
  {
    product: 'Fire Stick',
    price: 39.99,
    quantity: 2,
  },
];

log(shoppingCart[0]['price']);

// REFERENCE TYPES
// javascript is storing the value of the variable into a memory that is why these reference numbers from these both variables are different although the value looks the same. but it has it own unique place of memory
// so in memory it would look like this , it gets a reference no under what
// nums --> ref 1234783893  and mystery --> ref 287728298292 , so therefore you get false when comparing the two values

const nums = [1, 2, 3, 4, 5];
const mystery = [1, 2, 3, 4, 5];

log(nums === mystery); // output false;

const moreNums = nums;
log(moreNums === nums); // output true ... because it refers to the same address in memory.
moreNums.push(6, 7, 8);
log(nums); // output of nums is the same as moreNums because they both refers to the same address in memory

// equality operators will check the equality of reference and not the equality of the content

// ==== date object ====

const myDate = new Date(); // current date
log(myDate);

const myPastDate = new Date('1545-09-14T10:30:15');
log(myPastDate);

const myFutureDate = new Date('2023-09-14T10:30:15');
log(myFutureDate);

const birthday = new Date('1985-01-15T11:15:25');
const birthdaySecond = new Date('1985-01-15T11:15:25');
log(birthday.getFullYear()); // output 1985
log(birthday.getDate()); // the date 15
log(birthday.getMonth()); // 0 is january
log(birthday.getDay()); // 0 = monday 6 = saturday

//get the number of ms since 1 january 1970
log(birthday.getTime());

if (birthday.getTime() === birthdaySecond.getTime()) {
  log('birthdays are equal');
} else {
  log('birthdays are not equal');
}

// *********** Array.from **************
// making a shallow copy of an array so the original array won't be changed
// Array from is a constructor and is not like a method such as splice() push()
// if you do console.dir(Array) you can see all the methods you can use. you won't see Array.from on here because its not a method its a constructor

console.dir(Array);

let str = 'cilvya';
let strSpread = [...str];
let strNew = Array.from(str);

log(strSpread);
log(strNew);

console.dir(Object);

const fromScratch = Array.from({ length: 5 }, (value, index) => 'hello');
log(fromScratch);

const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.addEventListener(
  'click',
  function () {
    log('I am the parent');
  },
  true
);

child.addEventListener('click', function () {
  log('I am the child');
});

/* ====== COLOR PICKER ===== */

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'indigo',
  'violet',
];

const printColor = function (box) {
  // log(this)
  // log(this.style.backgroundColor); // reference to the item that has been clicked; so this refers the the object. in this situation the object is 'box'
  log(box.style.backgroundColor);
};

const h1 = document.querySelector('h1');

h1.addEventListener('mousover', function () {
  log(this.innerText);
});

const changeColor = function () {
  h1.style.color = this.style.backgroundColor;
};
// CONTAINER
const container = document.querySelector('#boxes');

const createDiv = () => {
  for (let color of colors) {
    // DIV
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box');
    container.appendChild(box);

    // box.addEventListener('click', printColor);

    box.addEventListener('click', function () {
      printColor(box);
    });

    box.addEventListener('click', changeColor); // with this
  }
};

createDiv();
