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
    if (index < 7) {
      let dates = this.userSleep
        .slice(0, index + 1)
        .map((userEntry) => userEntry.date);
      let hoursSlept = this.userSleep
        .slice(0, index + 1)
        .map((userEntry) => userEntry.hoursSlept);
      return { date: dates, hours: hoursSlept };
    } else {
      let dates = this.userSleep
        .slice(index - 6, index + 1)
        .map((userEntry) => userEntry.date);
      let hoursSlept = this.userSleep
        .slice(index - 6, index + 1)
        .map((userEntry) => userEntry.hoursSlept);
      return { date: dates, hours: hoursSlept };
    }
  }

  getUserQualityByWeek(date) {
    const target = this.userSleep.find((userEntry) => userEntry.date === date);
    const index = this.userSleep.indexOf(target);
    if (index < 7) {
      let dates = this.userSleep
        .slice(0, index + 1)
        .map((userEntry) => userEntry.date);
      let sleepQuality = this.userSleep
        .slice(0, index + 1)
        .map((userEntry) => userEntry.sleepQuality);
      return { date: dates, quality: sleepQuality };
    } else {
      let dates = this.userSleep
        .slice(index - 6, index + 1)
        .map((userEntry) => userEntry.date);
      let sleepQuality = this.userSleep
        .slice(index - 6, index + 1)
        .map((userEntry) => userEntry.sleepQuality);
      return { date: dates, quality: sleepQuality };
    }
  }
}

export default Sleep;
