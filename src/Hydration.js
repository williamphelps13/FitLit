// methods need to get average water from all time
class hydration {
  constructor(hydrationData) {
    this.id = hydrationData.userID;
    this.date = hydrationData.date;
    this.numOunces = hydrationData.numOunces;
  }
}

export default Hydration;
