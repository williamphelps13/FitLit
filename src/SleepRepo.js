class SleepRepo {
  constructor(data) {
    this.data = data;
  }

  getUserSleepData(id) {
    return this.data.filter((userEntry) => userEntry.userID === id);
  }

  getAvgQualityAllUsers() {
    return Math.round(
      this.data.reduce((totalQuality, userQuality) => {
        return (totalQuality += userQuality.sleepQuality);
      }, 0) / this.data.length
    );
  }
}

export default SleepRepo;
