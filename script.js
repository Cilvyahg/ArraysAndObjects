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
  countryListBtn.insertAdjacentElement('afterend', UL)

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
  capribtn.append(UL)

  for (let element of array) {
    const LI = document.createElement('LI');
    const LiSecond = document.createElement('LI');
    const img = document.createElement('IMG');
    img.src = `${element.photo}`;
    LI.innerText = `First name: ${element.name}`;
    LiSecond.innerText = `Last name: ${element.surname}`;
    UL.appendChild(img);
    UL.append(LI, LiSecond); 
  }
};

const capricorn = function (array) {
  const filtercapri = array.filter(
    (women) => women.gender === 'female' && women.age > 30
      // && women.birthday.dmy 
  );
  return capriLoop(filtercapri);
};


capribtn.addEventListener('click', () => {
  capricorn(randomPersonData);
});
