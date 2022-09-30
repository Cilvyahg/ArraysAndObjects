'use strict;';

const log = console.log;

const btnBored = document.getElementById('btn-bored');
const activitiesList = document.querySelector('.activitiesToDo');
const container = activitiesList.parentElement;

const fetchingBoredAPI = async function () {
  try {
    const response = await fetch('http://www.boredapi.com/api/activity/', {
      method: 'GET',
    });
    const activitiesData = await response.json();

    const allLi = document.querySelectorAll('.li')

    const li1 = allLi[0]
    const li2 = allLi[1]
    const li3 = allLi[2]
    const li4 = allLi[3]
    
    li1.innerHTML = `<strong>Activity</strong>: ${activitiesData.activity}`;
    li2.innerHTML = `<strong>Type</strong>: ${activitiesData.activity}`;
    li3.innerHTML = `<strong>Participants</strong>: ${activitiesData.activity}`;
    li4.innerHTML = `<strong>Link</strong>: <a href= ${activitiesData.link}>${activitiesData.link}</a>`;
  
  } catch (error) {
    log(`THIS IS THE ERROR ${error}`);
  }
};


btnBored.addEventListener('click', function () {
  fetchingBoredAPI();
});

const activitiesStyling = async () => {
 container.style.visibility = 'visible';
 container.style.opacity = '1';
}


btnBored.addEventListener('click', function (e) {
  activitiesStyling()
})

// TODO ALS LINK LEEG IS LAAT HET DAN NIET ZIEN
// HET VENSTER MOET IN HET BEGIN LEEG ZIJN.
// andere functies schrijven cleaner
// desktopversie
// min width max width
// position absolute;
