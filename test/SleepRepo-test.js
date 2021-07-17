import { expect } from 'chai';
import sleepData from '../src/data/sleep-test-data';
import SleepRepo from '../src/SleepRepo';

describe('Sleep Repository', () => {
  let sleepRepo;

  beforeEach(() => {
    sleepRepo = new SleepRepo(sleepData);
  });

  it('should be a function', () => {
    expect(SleepRepo).to.be.a('function');
  });

  it('should be an instance of a SleepRepo', () => {
    expect(sleepRepo).to.be.an.instanceOf(SleepRepo);
  });

  it('should be able to hold sleep data', () => {
    expect(sleepRepo.data).to.deep.equal(sleepData);
  });

  it('should be able to get sleep data for a user', () => {
    expect(sleepRepo.getUserSleepData(1)).to.deep.equal([
      {
        userID: 1,
        date: "2019/06/15",
        hoursSlept: 6.1,
        sleepQuality: 2.2
      },
      {
        userID: 1,
        date: "2019/06/16",
        hoursSlept: 4.1,
        sleepQuality: 3.8
      },
      {
        userID: 1,
        date: "2019/06/17",
        hoursSlept: 7.1,
        sleepQuality: 4.1
      },
      {
        userID: 1,
        date: "2019/06/18",
        hoursSlept: 10.4,
        sleepQuality: 3.1
      },
      {
        userID: 1,
        date: "2019/06/19",
        hoursSlept: 10.7,
        sleepQuality: 1.2
      },
      {
        userID: 1,
        date: "2019/06/20",
        hoursSlept: 9.3,
        sleepQuality: 1.2
      },
      {
        userID: 1,
        date: "2019/06/21",
        hoursSlept: 7.8,
        sleepQuality: 4.2
      }
    ]);
  });

  it.skip('should be able to get average sleep quality for all users', () => {
    expect(sleepRepo.getAvgQualityAllUsers()).to.equal(3.1);
  });
});