// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file
import getData from './apiCalls';
import UserRepository from './UserRepository';
import User from './User';

//Query Selectors
const welcomeName = document.getElementById('welcome');
const stepGoal = document.getElementById('step-goal');
const avgStepGoal = document.getElementById('avg-step-goal');
// function to get data from the API

getData('api/v1/users').then((data) => {
  const userRepository = new UserRepository(data.userData);
  const user = new User(data.userData[0]);
  console.log(user);
  console.log(userRepository);

  welcomeName.innerText = user.getFirstName();
  stepGoal.innerText = user.dailyStepGoal;
  avgStepGoal.innerText = userRepository.calculateAverageStepGoal();
});
