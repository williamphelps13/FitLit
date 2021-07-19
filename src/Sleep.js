class Sleep {
  constructor(userSleep) {
    this.userSleep = userSleep;
  }

  getUserAvgHrs() {
    return (
      Math.round(
        (this.userSleep.reduce((totalHrs, userEntry) => {
          return (totalHrs += userEntry.hoursSlept);
        }, 0) /
          this.userSleep.length) *
          10
      ) / 10
    );
  }

  getUserAvgQuality() {
    return (
      Math.round(
        (this.userSleep.reduce((totalQuality, userEntry) => {
          return (totalQuality += userEntry.sleepQuality);
        }, 0) /
          this.userSleep.length) *
          10
      ) / 10
    );
  }

  getUserHrsByDate(date) {
    return this.userSleep.find((userEntry) => userEntry.date === date)
      .hoursSlept;
  }

  getUserQualityByDate(date) {
    return this.userSleep.find((userEntry) => userEntry.date === date)
      .sleepQuality;
  }

  getUserHrsByWeek(date) {
    const target = this.userSleep.find((userEntry) => userEntry.date === date);
    const index = this.userSleep.indexOf(target);
    return this.userSleep
      .map((userEntry) => userEntry.hoursSlept)
      .slice(index - 6, index + 1);
  }

  getUserQualityByWeek(date) {
    const target = this.userSleep.find((userEntry) => userEntry.date === date);
    const index = this.userSleep.indexOf(target);
    return this.userSleep
      .map((userEntry) => userEntry.sleepQuality)
      .slice(index - 6, index + 1);
  }
}

export default Sleep;
