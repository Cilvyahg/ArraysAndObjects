'use strict;';

const log = console.log;

const btnBored = document.getElementById('btn-bored');
const activitiesList = document.querySelector('.activitiesToDo');
const container = activitiesList.parentElement;
const intro = document.getElementById('intro-text');
const allLi = document.querySelectorAll('.li');

const fetchingBoredAPI = async function () {
  try {
    const response = await fetch('https://www.boredapi.com/api/activity/', {
      method: 'GET',
    });

    const activitiesData = await response.json();

    intro.style.display = 'none';

    const li1 = allLi[0];
    const li2 = allLi[1];
    const li3 = allLi[2];
    const li4 = allLi[3];

    li1.innerHTML = `<strong>Activity</strong>: ${activitiesData.activity}`;
    li2.innerHTML = `<strong>Type</strong>: ${activitiesData.type}`;
    li3.innerHTML = `<strong>Participants</strong>: ${activitiesData.participants}`;
    // log(activitiesData);
    // log(Boolean(activitiesData.link));

    if (activitiesData.link) {
      li4.innerHTML = `<a href= ${activitiesData.link} target="_blank">Read more</a>`;
      // als het true is dat er een link value is dan maak dit aan
    } else {
      li4.innerHTML = ''; // je moet wel een false zetten en de lijst leegmaken, anders blijft het de volgende keer gewoon de oude link staan omdat je niet zegt wat je moet doen met false
    }
  } catch (error) {
    // error is a object
    log(`THIS IS THE ERROR ${error}`);
  }
};

const activitiesStyling = () => {

  container.style.opacity = 0;
  // allLi.forEach(function (li) {
  //   li.style.opacity = 0;
  // });

  setTimeout(() => {
    container.style.transition = 'opacity 100ms ease-out';
    container.style.opacity = 1;

    // for (let li of allLi) {
    //   li.style.transition = 'opacity 0ms 50ms';
    //   li.style.opacity = 1;
    // }

  }, 300);
};

btnBored.addEventListener('click', fetchingBoredAPI);
btnBored.addEventListener('click', activitiesStyling);

// async function af() {
//   try {
//     throw new Error('hi');
//   } catch (e) {
//     return 0;
//   }
// }

// // a().then(a => log(a)).catch(a => log(a));

// async function b() {
//   let a = await af();
//   log(a)
// }

// b();
