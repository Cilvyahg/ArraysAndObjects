'use strict';
const log = console.log;

import { randomPersonData } from './randomPersonData.js';
log(randomPersonData);

//==== 1 COUNTRY LIST ====

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
// needs to be a woman
// older than 30(1990 or older) // NOG DOEN
// be a capricorn (birthday from december 22 - 19 january) // NOG DOEN
//  sort//

const capribtn = document.querySelector('.capricorn');

const capriLoop = function (array) {
  const UL = document.createElement('ul');
  capribtn.append(UL);

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
  capriLoop(capricornWomenOlderThan30); // hoeft geen return te doen want capriloop heeft geen return.
};

capribtn.addEventListener('click', () => {
  capricorn(randomPersonData);
});


let mybday1 = '12/5/1989';
let mybday2 = '21/12/1989';
let mybday5 = '21/10/1989';

console.log('aaaabaaaaabababababa'.split('b')); // b wordt gebruikt als scheidingsteken/ seperator



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
