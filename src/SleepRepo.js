class SleepRepo {
  constructor(data) {
    this.data = data;
  }
  
  getUserSleep(id) {
    return this.data.filter(userEntry => userEntry.userID === id);
  }
  
  // getAvgQualityAllUsers() {

  // }
}

export default SleepRepo;