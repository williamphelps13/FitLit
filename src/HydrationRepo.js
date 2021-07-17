class HydrationRepo {
  constructor(data) {
    this.data = data;
  }

  getUserHydrationData(id) {
    return this.data.filter((userEntry) => userEntry.userID === id);
  }
}

export default HydrationRepo;
