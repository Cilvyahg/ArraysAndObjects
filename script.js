'use strict';
const log = console.log;

import { randomPersonData } from './randomPersonData.js';
log(randomPersonData);

//==== 1 COUNTRY LIST ====

const ULcontent = function (ul) {
  if (ul.style.display === 'block') {
    ul.classList.add('hide-content');
  }
  if (ul.style.display === 'none') {
    ul.classList.remove('hide-content');
    ul.classList.add('show-content');
  }
};

const allButtons = document.querySelectorAll('button');

const btnClick = function () {
  for (let button of allButtons) {
    button.addEventListener('click', (ul) => {
      ULcontent(ul);
    });
  }
};

const countryListBtn = document.querySelector('.countryList');

const countries = (array) => {
  const countryMap = array
    .map((country) => {
      return country.region;
    })
    .sort();

  const UL = document.createElement('ul');
  countryListBtn.insertAdjacentElement('afterend', UL);

  for (let country of countryMap) {
    const LI = document.createElement('li');
    LI.innerText = `${country}`;
    UL.appendChild(LI);
  }
  return countryMap;
};

countryListBtn.addEventListener('click', (e) => {
  countries(randomPersonData);
  log(e);
});

// ==== Capricorn women ====
//  sort ON FIRST NAME: NOG DOEN!!!!
// when push on button one dissapears

const capribtn = document.querySelector('.capricorn');

const capriLoop = function (array) {
  const UL = document.createElement('ul');
  capribtn.append(UL);
  UL.classList.add('non-bullet');

  for (let element of array) {
    const LI = document.createElement('LI');
    const LiSecond = document.createElement('LI');
    const img = document.createElement('IMG');
    img.src = `${element.photo}`;
    LI.innerText = `First name: ${element.name}`;
    LiSecond.innerText = `Last name: ${element.surname}`;
    UL.appendChild(img);
    UL.append(LI, LiSecond);
    capribtn.insertAdjacentElement('afterend', UL);
  }
};

const capricorn = function (listOfPeople) {
  const capricornWomenOlderThan30 = listOfPeople.filter(
    (person) =>
      person.gender.includes('female') && // ipv ===
      person.age > 30 &&
      isCapricorn(person.birthday.dmy) // want filter wilt een boolean true or false
  );

  log(capricornWomenOlderThan30)
  capricornWomenOlderThan30.sort(compareByName)// callback function bij sort() dus je hoeft deze functie niet te invoken

  log(capricornWomenOlderThan30);

  capriLoop(capricornWomenOlderThan30); // hoeft geen return te doen want capriloop heeft geen return.
};


const compareByName = function (person1, person2) {
  if (person1['name'] < person2['name']) {
    log(` person 1 ${person1['name']}, is smaller than person 2 ${person2['name']}`)
    return -1;
  }
  if (person1['name'] > person2['name']) {
    log(` person 1 ${person1.name} is bigger than person 2 ${person2.name}`)
    return 1;
  } else {
    return 0;
  }
};





capribtn.addEventListener('click', () => {
  capricorn(randomPersonData);
});

let mybday1 = '12/5/1989';
let mybday2 = '21/12/1989';
let mybday5 = '21/10/1989';

const isCapricorn = function (birthday) {
  const splitDate = birthday.split('/', 2);

  if (splitDate[1] === '12' || splitDate[1] === '01') {
    if (splitDate[0] >= 22 || splitDate[0] <= 19) {
      return true;
    }
  }
  return false; // buiten de if statement (dus niet een else {}) op deze manier return je altijd iets // by default
};

log(isCapricorn(mybday2));
log(isCapricorn(mybday5));

// ALS JE EEN KNOPT KLIKT DUS ALLE KNOPPEN DICHT
//en dan ul DISPLAY NONE EN OF BLOCK WANNEER EEN KNOP WORD GEKLIKT.
//add toggleClass

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


