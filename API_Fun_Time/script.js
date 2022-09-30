'use strict;';

const log = console.log;

const btnBored = document.getElementById('btn-bored');
const activitiesList = document.querySelector('.activitiesToDo');
const container = activitiesList.parentElement;
const intro = document.getElementById('intro-text');

const fetchingBoredAPI = async function () {
  try {
    const response = await fetch('http://www.boredapi.com/api/activity/', {
      method: 'GET',
    });
    const activitiesData = await response.json();

    intro.style.display = 'none';
    const allLi = document.querySelectorAll('.li');

    const li1 = allLi[0];
    const li2 = allLi[1];
    const li3 = allLi[2];
    const li4 = allLi[3];

    li1.innerHTML = `<strong>Activity</strong>: ${activitiesData.activity}`;
    li2.innerHTML = `<strong>Type</strong>: ${activitiesData.type}`;
    li3.innerHTML = `<strong>Participants</strong>: ${activitiesData.participants}`;
    log(Boolean(activitiesData.link));

    if (activitiesData.link) {
      li4.innerHTML = `<strong>Link</strong>: <a href= ${activitiesData.link}>${activitiesData.link}</a>`;
    } else {
      li4.innerHTML = '';
    }
  } catch (error) {
    log(`THIS IS THE ERROR ${error}`);
  }
};

btnBored.addEventListener('click', function () {
  fetchingBoredAPI();
});

const activitiesStyling = () => {
  container.style.opacity = '1';
  // container.style.opacity = '0';
};

btnBored.addEventListener('click', function (e) {
  activitiesStyling();
});

// TODO ALS LINK LEEG IS LAAT HET DAN NIET ZIEN
// HET VENSTER MOET IN HET BEGIN LEEG ZIJN.
// andere functies schrijven cleaner
// desktopversie
// min width max width
// position absolute;

document.getElementById('hoi').addEventListener('click', function (e) {
  log('clicked');

  this.style.transition = 'opacity 0s';
  this.style.opacity = 0;
  setTimeout(() => {
    this.style.transition = 'opacity 1s linear';
    this.style.opacity = 1;
  }, 3000);
});
