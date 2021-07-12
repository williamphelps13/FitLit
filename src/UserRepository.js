class UserRepository {
  constructor(data) {
    this.data = data;
  }

  getUserByID(userID) {
    return this.data.find(user => user.id === userID);
  }

  calculateAverageStepGoal() {
    return Math.floor(this.data.reduce((totalSteps, userSteps) => {  
      totalSteps += userSteps.dailyStepGoal;
      return totalSteps;
    }, 0) / this.data.length);
  }
}

export default UserRepository;