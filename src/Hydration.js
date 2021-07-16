// methods need to get average water from all time
class Hydration {
  constructor(userHydration) {
    this.userHydration = userHydration;
  }
  // this needs to be adjusted for this class (it was moved from repo)
  // getAvgOuncesAllTime(id) {
  //   const userDays = this.data.filter((user) => user.userID === id);
  //   const totalUserOunces = userDays.reduce((totalOunces, user) => {
  //     return (totalOunces += user.numOunces);
  //   }, 0);
  //   return totalUserOunces / userDays.length;
  // }
}

export default Hydration;
