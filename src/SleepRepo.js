class SleepRepo {
  constructor(data) {
    this.data = data;
  }
  
  getUserSleep(id) {
    return this.data.filter(userEntry => userEntry.userID === id);
  }
}

export default SleepRepo;