class Hydration {
  constructor(userHydration) {
    this.userHydration = userHydration;
  }

  getUserAvgOz() {
    return Math.round(
      this.userHydration.reduce((totalOunces, userEntry) => {
        return (totalOunces += userEntry.numOunces);
      }, 0) / this.userHydration.length
    );
  }

  // We are not using this function and this has not been tested!!!
  getLatestOz() {
    return this.userHydration.splice(this.userHydration.length);
  }

  getUserOzByDate(date) {
    return this.userHydration.find((userEntry) => userEntry.date === date)
      .numOunces;
  }

  getUserOzByWeek(date) {
    const target = this.userHydration.find(
      (userEntry) => userEntry.date === date
    );
    const index = this.userHydration.indexOf(target);
    if (index < 7) {
      let dates = this.userHydration
        .slice(0, index + 1)
        .map((userEntry) => userEntry.date);
      let numOunces = this.userHydration
        .slice(0, index + 1)
        .map((userEntry) => userEntry.numOunces);
      return { date: dates, ounces: numOunces };
    } else {
      let dates = this.userHydration
        .slice(index - 6, index + 1)
        .map((userEntry) => userEntry.date);
      let numOunces = this.userHydration
        .slice(index - 6, index + 1)
        .map((userEntry) => userEntry.numOunces);
      return { date: dates, ounces: numOunces };
    }
  }
}
export default Hydration;
