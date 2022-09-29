'use strict;';

const log = console.log;

const btnBored = document.getElementById('btn-bored');
const activitiesList = document.querySelector('.activitiesToDo');

const fetchingBoredAPI = async function () {
  try {
    const response = await fetch('http://www.boredapi.com/api/activity/', {
      method: 'GET',
    });
    const activitiesData = await response.json();
    log(activitiesData);

    const li1 = activitiesList.children[0];
    const li2 = activitiesList.children[1];
    const li3 = activitiesList.children[2];
    const li4 = activitiesList.children[3];

    log(li1, li2, li3, li4);

    li1.innerHTML = `<strong>Activity</strong> : ${activitiesData.activity}`
    li2.innerHTML = `<strong>Type</strong> : ${activitiesData.activity}`;
    li3.innerHTML = `<strong>Participants</strong> : ${activitiesData.activity}`;
    li4.innerHTML = `<strong>Link</strong> : <a href= ${activitiesData.link}>${activitiesData.link}</a>`;


  } catch (err) {
    log(`this is the error: ${err}`);
  }
};

btnBored.addEventListener('click', function () {
  fetchingBoredAPI();
});
