class Hydration {
  constructor(userHydration) {
    this.userHydration = userHydration;
  }

  getUserAvgOzAllTime() {
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
}
export default Hydration;
