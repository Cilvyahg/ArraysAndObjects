// 'use strict';

const log = console.log


let j = 0; 

while (j <= 5) { // this code here is only going to run when this condition is true;
  log(j)
  j++;
  //0
  //1
  //2
  //3
  //4
  //5
  // wont run the code anymore because 6 > 5 so it stops
};


const target = Math.floor(Math.random() * 10); // const because you won't change the value of the target during the game
let guessNumber = Math.floor(Math.random() * 10); // this value will change therefore let, so you can assign a new value to guessNumber

while (guessNumber !== target) {
  log(`Target: ${target} Guess: ${guessNumber}`)
  guessNumber = Math.floor(Math.random() * 10);
}; 

log(`Target: ${target} Guess: ${guessNumber}`);
log(`congrats you win!`)
