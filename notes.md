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