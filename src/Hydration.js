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

  getUserOzByDate(date) {
    return this.userHydration.find((userEntry) => userEntry.date === date)
      .numOunces;
  }

  // possibly a method to automatically display today's information(the latest data) automatically.
  //
  getUserOzByWeek() {
    return this.userHydration.splice(-7, 7);
  }
}
export default Hydration;
