'use strict';
const log = console.log;
// import fetch from 'node-fetch'; for nodejs

// import \* as data from './randomPersonData.js'; // importing everything from this js module

// https://www.geeksforgeeks.org/how-to-use-an-es6-import-in-node-js/

import { randomPersonData } from './randomPersonData.js';
log(randomPersonData);

// const github = fetch('https://github.com/Cilvyahg');
//log(github)

### Filter;

filter returns a boolean / true of false en return a new array

### === if statement is 22 december - 19 january === is capricorn

```
// const isCapricorn = function (birthday) {
//   const splitDate = birthday.split('/');

//   if (splitDate[1] === '12') {
//     if (splitDate[0] >= 22) {
//       return true;
//     }
//   } else if (splitDate[1] === '01' ) {
//     if (splitDate[0] <= 19) {
//       return true;
//     }
//   }
//   return false; // buiten de if statement (dus niet een else {}) op deze manier return je altijd iets // by default
// };

```

## DOM

#### insertAdjancentElement()

targetElement.insertAdjancentElement('position', element)

**position**
'beforebegin': Before the targetElement itself.
'afterbegin': Just inside the targetElement, before its first child.
'beforeend': Just inside the targetElement, after its last child.
'afterend': After the targetElement itself.

### append

append is different from appendChild because you can insert multiple eleme nts.

append and prepend will still be a child of the element. append is after

### prepend

prepend is child before the element.

## split()

syntax :
str.split(separator, limit)

voorbeelden::::

```
console.log('aaaabaaaaabababababa'.split('b')); // b wordt gebruikt als scheidingsteken/ seperator
```

```
log(randomPersonData[1].birthday.dmy.split('/'));
```


## Conditionals (all evaluate to a boolean: true or false)
if --> if a given condition is true...
else if
else

both will run 
```
if(true){}

if(true){}
```

else if try when the first one didn't passed on as 'true'.. it's giving more options
try (until it's true, if if is not true then it goes to else if .. and so on you can add as many else if()
```
if (true){

} else if (...)
```

```
else {
  IF NOT ELSE WAS TRUE BEFORE IT THEN DO THIS ....
}
```

// ==== conditionals ====

```
if (1 !== 1) {
  log('true');
}

let highScore = 1430;
let userScore = 1200;

if (userScore >= highScore) {
  log(highScore);
  log(`congratz you have a new highscore ${userScore}`);
  highScore = userScore;
} else {
  log(
    `good game you score of ${userScore} did not beat the highscore of ${highScore}`
  );
}

// we can nest conditionals into otger conditionals.
let password = 'hello kitty';

if (password.length >= 6) {
  if (password.indexOf(' ') === -1) {
    log('valid password');
  } else {
    log(`password is long enough but cannot contain spaces`);
  }
} else {
  log('password must be longer');
}
```

### SORT() methode 

the sort() method sorts the elements of an array in place and returns the sorted array. 



bij sort() kun je een functie meegeven, namelijk de compare function. 

de sort() functie zet je indexen om in strings en vandaar dat het 1, 120, 127 4, 432 
dus wat je krijgt is het de string "1" , de string "120" , de string "4"; vanwege UTF 8 encoding. speciale karakters op het einde. 

je zal meestal sort() gebruiken middels de compareFunction

elke wordt er iets gepakt en eigenlijk gekeken. is dit groter of kleiner dan de ander? 
SITUATIE::
je hebt een boekenkast met boeken en die wil je sorteren op  titels (alfabetisch). je bekijkt telkens twee boek titels met elkaar en sorteert ze (of markeert ze ). ALS boek 1 voor de boek 2 moet staan in de boekenkast dan geef je dit een -1 (return je -1). als boek 2 voor boek 1 moet staan dan return je 1.
als beide boeken gelijk zijn qua titel dan markeer je dit met een 0 (of return je een 0);

SORT(COMPAREFUNCTION);

```
function compareFn(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
```




## Map

you have to put a return in the callback function of the array methods. 


## events object
when we have events we have the event object that is the first parameter that comes with a call back function of the addeventlistener. 



**this** keyword
this doesnt work with arrow functions


=== SORT BY NAME ===
 capricornWomenOlderThan30.map(function (person) {
    if (person.name === 'Алла') {
      log(person)
      return person.name = "Anna";
    } else {
      return
    }
  })

  ## creating multiple objects
with classes instead of manually creating these.



## object 

Objects are reference types just like arrays. so that is why we use const. you can change them by adding properties .. that will also change the reference. 


## LOOPS

while loop 

syntax

```
while(this condition is true) {

}
```


## For .. in  loop

will loop over the keys of an object. 
you can use for .. in for an array (since arrays are also objects, but it's better to use another array loop method because the keys will be the indices. so you are looping over the keys, which are the indices. you can use a for .. of 
1: 233
2: 5
3: 38383
5: 8384)


## KEYWORD THIS
this; think of it as a reference to an object like the global scope. window 
this can change

this normally refers to the window (the global scope of the browser)

- THE VALUE OF THIS DEPENDS ON THE INVOCATION CONTEXT OF THE FUNCTION IT IS USED IN. 
it depends on how you call it. 


### .style property in the display

if you do this is will be styled inline, it's better to do it with adding class. 

### Date Objects
let's you do basic operation with data and time
represents a point in time


## splice and slice

**slice()**

Copies elements from an array and returns them as a new array
Does not change the original array
Slice doesn’t include the 2nd index parameter
Can be used on both strings and arrays

**.splice()**

Mutates/Changes the original array
Returns an array of removed elements
Used for adding/removing elements from the original array
Can only be used on arrays

## Array.of 
The difference between Array.of() and the Array constructor is in the handling of integer arguments: Array.of(7) creates an array with a single element, 7, whereas Array(7) creates an empty array with a length property of 7. (That implies an array of 7 empty slots, not slots with actual undefined values.) 

## Array.from
with array from you can use array methods on it .. a second method like map.\
array.from(dcoument.queryselect('p).map((itrem) => item.innertext = 'hello))