'use strict';
const log = console.log;
import { randomPersonData } from './randomPersonData.js';

// ***** COUNTRY LIST ********

// const ULcontent = function (ul) {
//   if (ul.style.display === 'block') {
//     ul.classList.add('hide-content');
//   }
//   if (ul.style.display === 'none') {
//     ul.classList.remove('hide-content');
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

const showCountryList = () => {
  const countryList = document.querySelector('#countries-list');
  countryList.style.display = 'block';
  const capriCornWomenList = document.querySelector('#capricorn-women');

  if (capriCornWomenList !== null) {
    // als capricornwomenlist een UL is dan wil je het verbergen
    capriCornWomenList.style.display = 'none';
  }
};

countryListBtn.addEventListener('click', cb);
countryListBtn.addEventListener('click', showCountryList);

//  ******* CAPRICON WOMEN ********

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

/* ******* CREDITCARDEXPIRED */

const today = new Date(); //huidige datum.
const currentYear = today.getFullYear(); //current year : 2022
const month = today.getMonth() + 1; // maand 0-11
const currentYearShort = currentYear % 2000; // want 2000 past 1x in 2022 en dan blijft er 22 over , heb je nodig omdat de data randomperson data ook uit twee getallen bestaat
const nextYear = currentYearShort + 1; // jaar + 1

const checkIfPersonIs18 = (peopleArray) =>
  peopleArray.filter((person) => person.age >= 18);

const is18YearsOrAbove = checkIfPersonIs18(randomPersonData);

const splitAndIntegerCCExpiration = function (person) {
  const expirationDate = person.credit_card.expiration;
  const splitExpirationDate = expirationDate.split('/');
  // kan met const want je veranderd niet de waarde dit is en blijft een array
  const listOfExpiredDates = [];

  for (let date of splitExpirationDate) {
    const numberedDate = parseInt(date);
    listOfExpiredDates.push(numberedDate);
  }
  return listOfExpiredDates;
};

const isNotExpired = function (person) {
  const listOfExpiredDates = splitAndIntegerCCExpiration(person);
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
  const filteredAndSorted = personAbove18List
    .filter(isNotExpired)
    .sort(sortCreditCardsAscending);
  return filteredAndSorted;
};

const sortCreditCardsAscending = function (person1, person2) {
  // // van alle creditcardlist een numerieke data typen maken, zodat je kunt vergelijken
  const listOfCreditcardDatePerson1 = splitAndIntegerCCExpiration(person1);
  const listOfCreditcardDatePerson2 = splitAndIntegerCCExpiration(person2);

  if (listOfCreditcardDatePerson1[1] > listOfCreditcardDatePerson2[1]) {
    return 1;
  } else if (listOfCreditcardDatePerson1[1] < listOfCreditcardDatePerson2[1]) {
    return -1;
  } else if (listOfCreditcardDatePerson1[0] > listOfCreditcardDatePerson2[0]) {
    return 1;
  } else if (listOfCreditcardDatePerson1[0] < listOfCreditcardDatePerson2[0]) {
    return -1;
  }
  return 0;
};

const hasValidCreditCard = creditCardExpirationCheck(is18YearsOrAbove);
log(hasValidCreditCard);

const btnCreditCard = document.getElementById('credit-card');

btnCreditCard.addEventListener('click', function (e) {
  log(e);
  createCreditCardList(hasValidCreditCard);
});

const createCreditCardList = function (listOfPeople) {
  listOfPeople.forEach(function (person) {
    const UL = document.createElement('ul');

    const createArray = Array.of(
      `First Name: ${person.name}`,
      `Last Name: ${person.surname}`,
      `Phone: ${person.phone}`,
      `Creditcard no: ${person.credit_card['number']}`,
      `Expiration date: ${person.credit_card['expiration']}`
    );

    log(createArray.at(0));
    for (let i = 0; i < createArray.length; i++) {
      const li = document.createElement('li');
      log((li.innerText = createArray[i]));
      UL.append(li);
    }


    //classlist toevoegen aan elke UL. 
    document.body.appendChild(UL);

    log(createArray);

    // UL.append(balabalabal, balaalaka)
  });

  log(listOfPeople);
};
