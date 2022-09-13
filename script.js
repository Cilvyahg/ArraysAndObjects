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

//   let hasClass = ul.classList.contains('block');
//   if (hasClass) {
//     ul.classList.remove('show-content');
//   }
//   if (!hasClass) {
//     ul.classList.add('show-content');
//   }
// };

const countryListBtn = document.querySelector('.countryList');

const renderCountries = (listOfPeople) => {
  const countryMap = listOfPeople
    .map((person) => {
      return person.region;
    })
    .sort();

  const UL = document.createElement('ul');
  countryListBtn.insertAdjacentElement('afterend', UL);
  UL.id = 'countries-list';

  for (let country of countryMap) {
    const LI = document.createElement('li');
    LI.innerText = `${country}`;
    UL.appendChild(LI);
  }
};

const cb = (e) => {
  renderCountries(randomPersonData);
  countryListBtn.removeEventListener('click', cb); // wordt hier al op de eerste klik weggehaald en er zit geen eventlistener meer hierop
  log(e);
};

countryListBtn.addEventListener('click', cb);

const showCountryList = () => {
  const countryList = document.querySelector('#countries-list');
  countryList.style.display = 'block';
  const capriCornWomenList = document.querySelector('#capricorn-women');
  log(capriCornWomenList);

  if (capriCornWomenList !== null) {
    // als capricornwomenlist een UL is dan wil je het verbergen
    capriCornWomenList.style.display = 'none';
  }
};

countryListBtn.addEventListener('click', showCountryList);

// ==== Capricorn women ====

const capribtn = document.querySelector('.capricorn');

const capriLoop = function (array) {
  const UL = document.createElement('ul');
  UL.classList.add('non-bullet');
  UL.id = 'capricorn-women';

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
  const capricornWomenOlderThan30 = listOfPeople
    .filter(function (person) {
      return (
        person.gender.includes('female') && // ipv ===
        person.age > 30 &&
        isCapricorn(person.birthday.dmy)
      ); // want filter wilt een boolean true or false
    })
    .sort(compareByName); // callback function bij sort() dus je hoeft deze functie niet te invoken, want de sort invoked hem.
  capriLoop(capricornWomenOlderThan30);
};

const compareByName = (person1, person2) => {
  if (person1['name'] < person2['name']) {
    return -1;
  }
  if (person1['name'] > person2['name']) {
    return 1;
  }
  return 0;
};

const callbackCapricon = function () {
  capricorn(randomPersonData);
  capribtn.removeEventListener('click', callbackCapricon); // de click type is verwijderd van de button
};

capribtn.addEventListener('click', callbackCapricon);

const showCapriCornList = function () {
  //debugger;
  const capriCornWomenList = document.querySelector('#capricorn-women'); // HOOFDFUNCTIONALITEIT JE WILT DE CAPRICORN LIJST SHOWEN
  capriCornWomenList.style.display = 'block';
  const countriesList = document.querySelector('#countries-list');
  if (countriesList !== null) {
    countriesList.style.display = 'none'; // je kan style property niet op null object toepassen
  }
};

capribtn.addEventListener('click', showCapriCornList);

let mybday1 = '12/5/1989';
let mybday2 = '21/12/1990';
let mybday5 = '21/10/1995';

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
