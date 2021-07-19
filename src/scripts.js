// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file
import Chart from 'chart.js/auto';
import { getData } from './apiCalls';
import UserRepository from './UserRepository';
import User from './User';
import HydrationRepo from './HydrationRepo';
import Hydration from './Hydration';
import SleepRepo from './SleepRepo';
import Sleep from './Sleep';

let userRepository, user, hydrationRepo, hydration, userIndex, sleepRepo, sleep;
let newUsers = [];

// function to create random number for user
const getRandomIndex = () => Math.floor(Math.random() * 50);
userIndex = getRandomIndex();

const populateDataOnPage = () => {
  document.getElementById(
    'welcome'
  ).innerText = `Welcome ${user.getFirstName()}`;
  document.getElementById('step-goal').innerText = user.dailyStepGoal;
  document.getElementById('avg-step-goal').innerText =
    userRepository.getAvgStepGoal();
  document.getElementById('name').innerText = user.name;
  document.getElementById('address').innerText = user.address;
  document.getElementById('email').innerText = user.email;
  document.getElementById('stride').innerText = user.strideLength;
  // Try to refactor this and remove it from the dom manipulation
  // need to remove commas from display, possibly switch to innerHtml and make new elements
  const friends = user.friends.map((friend) => {
    let currentFriend = new User(userRepository.getUserByID(friend));
    return currentFriend.getFirstName();
  });
  document.getElementById('friends').innerText = friends;
};

const populateHydrationPage = () => {
  document.getElementById(
    'water-today'
  ).innerText = `${hydration.getUserOzByDate('2020/01/22')} oz`;
  // document.getElementById(
  //   'water-week'
  // ).innerText = ;
};
// `${hydration.getUserOzByWeek('2019/08/22')}`
const populateSleepOnPage = () => {
  document.getElementById(
    'sleep-hrs-today'
  ).innerText = `${sleep.getUserHrsByDate('2020/01/22')} hrs`;
  document.getElementById(
    'sleep-quality-today'
  ).innerText = `Quality: ${sleep.getUserQualityByDate('2020/01/22')}`;
  document.getElementById(
    'sleep-hours-avg-all'
  ).innerText = `${sleep.getUserAvgHrs()} hrs`;
  document.getElementById(
    'sleep-quality-avg-all'
  ).innerText = `Quality: ${sleep.getUserAvgQuality()}`;
  document.getElementById(
    'sleep-week-hours'
  ).innerText = `Hours: ${sleep.getUserHrsByWeek('2020/01/22')}`;
  document.getElementById(
    'sleep-week-quality'
  ).innerText = `Quality: ${sleep.getUserQualityByWeek('2020/01/22')}`;
};

getData('users')
  .then((data) => {
    userRepository = new UserRepository(data.userData);
    user = new User(userRepository.data[userIndex]);
    newUsers.push(userRepository.data);
  })
  .then(populateDataOnPage);

getData('hydration')
  .then((data) => {
    hydrationRepo = new HydrationRepo(data.hydrationData);
    hydration = new Hydration(
      hydrationRepo.getUserHydrationData(userIndex + 1)
    );
  })
  .then(populateHydrationPage);

getData('sleep')
  .then((data) => {
    sleepRepo = new SleepRepo(data.sleepData);
    sleep = new Sleep(sleepRepo.getUserSleepData(userIndex + 1));
  })
  .then(populateSleepOnPage);

let waterWeek = new Chart(document.getElementById('water-week'), {
  type: 'bar',
  data: {
    labels: ['1/16', '1/17', '1/18', '1/19', '1/20', '1/21', '1/22'],
    datasets: [
      {
        label: 'Water Drank (oz)',
        backgroundColor: [
          '#3e95cd',
          '#8e5ea2',
          '#3cba9f',
          '#e8c3b9',
          '#c45850',
        ],
        data: [50, 80, 90, 40, 50, 60, 50],
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Water Drank over last 7 Days (oz)',
    },
  },
});
