// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file
import { getData } from './apiCalls';
import UserRepository from './UserRepository';
import User from './User';
import HydrationRepo from './HydrationRepo';
import Hydration from './Hydration';
import SleepRepo from './SleepRepo';
import Sleep from './Sleep';

let userRepository, user, hydrationRepo, hydration, userIndex, sleepRepo, sleep;

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
};

getData('users')
  .then((data) => {
    userRepository = new UserRepository(data.userData);
    user = new User(userRepository.data[userIndex]);
    console.log(user);
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

getData('sleep').then((data) => {
  sleepRepo = new SleepRepo(data.sleepData);
  sleep = new Sleep(sleepRepo.userSleep.getUserSleepData());
});
