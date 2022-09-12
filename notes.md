'use strict';
const log = console.log;
// import fetch from 'node-fetch'; for nodejs

// import * as data from './randomPersonData.js'; // importing everything from this js module

// https://www.geeksforgeeks.org/how-to-use-an-es6-import-in-node-js/

import { randomPersonData } from './randomPersonData.js';
log(randomPersonData);

// const github = fetch('https://github.com/Cilvyahg');
//log(github)



### Filter; 

filter returns a boolean / true of false en return a new array 


## DOM 

#### insertAdjancentElement()
targetElement.insertAdjancentElement('position', element)

**position**
'beforebegin': Before the targetElement itself.
'afterbegin': Just inside the targetElement, before its first child.
'beforeend': Just inside the targetElement, after its last child.
'afterend': After the targetElement itself.