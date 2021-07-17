class UserRepository {
  constructor(data) {
    this.data = data;
  }

  getUserByID(id) {
    return this.data.find((user) => user.id === id);
  }

  getAvgStepGoal() {
    return Math.round(
      this.data.reduce((totalSteps, userSteps) => {  
        return (totalSteps += userSteps.dailyStepGoal);
      }, 0) / this.data.length
    );
  }
}

export default UserRepository;