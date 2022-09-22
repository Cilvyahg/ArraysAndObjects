'use strict';
const log = console.log;

import { randomPersonData } from './randomPersonData.js';
log(randomPersonData);

//==== 1 COUNTRY LIST ====

// const ULcontent = function (ul) {
//   if (ul.style.display === 'block') {
//     ul.classList.add('hide-content');
//   }
//   if (ul.style.display === 'none') {
//     ul.classList.remove('hide-content');
//     ul.classList.add('show-content');
//   }
// };

// //   let hasClass = ul.classList.contains('block');
// //   if (hasClass) {
// //     ul.classList.remove('show-content');
// //   }
// //   if (!hasClass) {
// //     ul.classList.add('show-content');
// //   }
// // };

// const countryListBtn = document.querySelector('.countryList');

// const renderCountries = (listOfPeople) => {
//   const countryMap = listOfPeople
//     .map((person) => {
//       return person.region;
//     })
//     .sort();

//   const UL = document.createElement('ul');
//   countryListBtn.insertAdjacentElement('afterend', UL);
//   UL.id = 'countries-list';

//   for (let country of countryMap) {
//     const LI = document.createElement('li');
//     LI.innerText = `${country}`;
//     UL.appendChild(LI);
//   }
// };

// const cb = (e) => {
//   renderCountries(randomPersonData);
//   countryListBtn.removeEventListener('click', cb); // wordt hier al op de eerste klik weggehaald en er zit geen eventlistener meer hierop
//   log(e);
// };

// countryListBtn.addEventListener('click', cb);

// const showCountryList = () => {
//   const countryList = document.querySelector('#countries-list');
//   countryList.style.display = 'block';
//   const capriCornWomenList = document.querySelector('#capricorn-women');

//   if (capriCornWomenList !== null) {
//     // als capricornwomenlist een UL is dan wil je het verbergen
//     capriCornWomenList.style.display = 'none';
//   }
// };

// countryListBtn.addEventListener('click', showCountryList);

// // ==== Capricorn women ====

// const capribtn = document.querySelector('.capricorn');

// const capriLoop = function (array) {
//   const UL = document.createElement('ul');
//   UL.classList.add('non-bullet');
//   UL.id = 'capricorn-women';

//   for (let element of array) {
//     const LI = document.createElement('LI');
//     const LiSecond = document.createElement('LI');
//     const img = document.createElement('IMG');
//     img.src = `${element.photo}`;
//     LI.innerText = `First name: ${element.name}`;
//     LiSecond.innerText = `Last name: ${element.surname}`;
//     UL.appendChild(img);
//     UL.append(LI, LiSecond);
//     capribtn.insertAdjacentElement('afterend', UL);
//   }
// };

// const capricorn = function (listOfPeople) {
//   const capricornWomenOlderThan30 = listOfPeople
//     .filter(function (person) {
//       return (
//         person.gender.includes('female') && // ipv ===
//         person.age > 30 &&
//         isCapricorn(person.birthday.dmy)
//       ); // want filter wilt een boolean true or false
//     })
//     .sort(compareByName); // callback function bij sort() dus je hoeft deze functie niet te invoken, want de sort invoked hem.

//   capriLoop(capricornWomenOlderThan30);
// };

// const compareByName = (person1, person2) => {
//   if (person1['name'] < person2['name']) {
//     return -1;
//   }
//   if (person1['name'] > person2['name']) {
//     return 1;
//   }
//   return 0;
// };

// const callbackCapricon = function () {
//   capricorn(randomPersonData);
//   capribtn.removeEventListener('click', callbackCapricon); // de click type is verwijderd van de button
// };

// capribtn.addEventListener('click', callbackCapricon);

// const showCapriCornList = function () {
//
//   const capriCornWomenList = document.querySelector('#capricorn-women'); // HOOFDFUNCTIONALITEIT JE WILT DE CAPRICORN LIJST SHOWEN
//   capriCornWomenList.style.display = 'block';
//   const countriesList = document.querySelector('#countries-list');
//   if (countriesList !== null) {
//     countriesList.style.display = 'none'; // je kan style property niet op null object toepassen
//   }
// };

// capribtn.addEventListener('click', showCapriCornList);

// let mybday1 = '12/5/1989';
// let mybday2 = '21/12/1990';

// const isCapricorn = function (birthday) {
//   const splitDate = birthday.split('/', 2);

//   if (splitDate[1] === '12' || splitDate[1] === '01') {
//     if (splitDate[0] >= 22 || splitDate[0] <= 19) {
//       return true;
//     }
//   }
//   return false; // buiten de if statement (dus niet een else {}) op deze manier return je altijd iets // by default
// };

// log(isCapricorn(mybday2));

/*   ===== OLD CREDITCARDS ===== */

const checkIfPersonIs18 = function (peopleArray) {
  return peopleArray.filter(function (person) {
    return person.age >= 18;
  });
};

const is18YearsOrAbove = checkIfPersonIs18(randomPersonData);

const currentYear = new Date().getFullYear(); //2022 current
const currentYearShort = currentYear % 2000; // want 2000 past 1x in 2022 en dan blijft er 22 over
const nextYear = currentYearShort + 1;
log(currentYearShort);

const month = new Date().getMonth() + 1; // maand

const splitAndInteger = function (person) {
  const expirationDate = person.credit_card.expiration;
  const splitExpirationDate = expirationDate.split('/');

  const listOfExpiredDates = [];
  

  for (let date of splitExpirationDate) {
    const numberedDate = parseInt(date);
    listOfExpiredDates.push(numberedDate);
  }

  return listOfExpiredDates;
};

const isNotExpired = function (person) {
  const listOfExpiredDates = splitAndInteger(person);

  if (listOfExpiredDates[1] === currentYearShort) {
    if (listOfExpiredDates[0] >= month) {
      return true;
    }
  }

  if (listOfExpiredDates[1] === nextYear) {
    if (listOfExpiredDates[0] <= month) {
      return true;
    }
  }
  return false;
};

const creditCardExpirationCheck = function (personAbove18List) {
  const filtered = personAbove18List.filter(isNotExpired);
  log(filtered)
  return filtered.sort(sortedCreditCardsAscending);
};

const sortedCreditCardsAscending = function (person1, person2) {
  // // van alle creditcardlist een numerieke data typen maken, zodat je kunt vergelijken
  const listOfCreditcardDatePerson1 = splitAndInteger(person1);
  const listOfCreditcardDatePerson2 = splitAndInteger(person2);
  log(listOfCreditcardDatePerson1);
  log(listOfCreditcardDatePerson2)

  if (listOfCreditcardDatePerson1[1] > listOfCreditcardDatePerson2[1]) {
    return 1;
  }

  if (listOfCreditcardDatePerson1[1] < listOfCreditcardDatePerson2[1]) {
    return -1;
  }

  if (listOfCreditcardDatePerson1[0] > listOfCreditcardDatePerson2[0]) {
    return 1;
  }

  if (listOfCreditcardDatePerson1[0] < listOfCreditcardDatePerson2[0]) {
    return -1;
  }

  return 0;
};

const hasValidCreditCard = creditCardExpirationCheck(is18YearsOrAbove);
log(hasValidCreditCard);

// sortedCreditCardsAscending(hasValidCreditCard);

// SORT THE LIST!!!!

/* // === SORT Live Les ====
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
} */
