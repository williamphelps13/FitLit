class SleepRepo {
  constructor(data) {
    this.data = data;
  }
  
  getUserSleepData(id) {
    return this.data.filter(userEntry => userEntry.userID === id);
  }
  
  // getAvgQualityAllUsers() {

  // }
}

export default SleepRepo;