'use strict;';

const log = console.log;

const fetchingBoredAPI = async function () {
  try {
    const response = await fetch('http://www.boredapi.com/api/activity/', {
      method: 'GET',
    });
    const json = await response.json();
    log(json)
    const activityArray = Object.values(json)
    log(activityArray)
   


  } catch (err) {
    log(`this is the error: ${err}`);
  }
}



const btnBored = document.getElementById('btn-bored');

btnBored.addEventListener('click', function () {
  fetchingBoredAPI();
})