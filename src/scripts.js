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

let userRepository, user, hydrationRepo, hydration, userIndex;
// function to get data from the API

const populateDataOnPage = () => {
  document.getElementById(
    'welcome'
  ).innerText = `Welcome ${user.getFirstName()}`;
  document.getElementById('step-goal').innerText = user.dailyStepGoal;
  document.getElementById('avg-step-goal').innerText =
    userRepository.calculateAverageStepGoal();
  document.getElementById('name').innerText = user.name;
  document.getElementById('address').innerText = user.address;
  document.getElementById('email').innerText = user.email;
  document.getElementById('stride').innerText = user.strideLength;
  const friends = user.friends.map((friend) => {
    let currentFriend = new User(userRepository.getUserByID(friend));
    return currentFriend.getFirstName();
  });
  document.getElementById('friends').innerText = friends;
};

const getRandomIndex = () => Math.floor(Math.random() * 50);

userIndex = getRandomIndex();

getData('users')
  .then((data) => {
    userRepository = new UserRepository(data.userData);
    user = new User(userRepository.data[userIndex]);
    console.log(user);
  })
  .then(populateDataOnPage);

getData('hydration').then((data) => {
  hydrationRepo = new HydrationRepo(data.hydrationData);
  hydration = new Hydration(hydrationRepo.getUserHydration(userIndex + 1));
  console.log(hydration);
});
