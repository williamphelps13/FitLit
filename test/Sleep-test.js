import { expect } from 'chai';
import SleepRepo from '../src/SleepRepo';
import Sleep from '../src/Sleep';
import sleepData from '../src/data/sleep-test-data';

describe('Sleep', () => {
  let sleepRepo, sleep;

  beforeEach(() => {
    sleepRepo = new SleepRepo(sleepData);
    sleep = new Sleep(sleepRepo.getUserSleepData(1));
  });

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', () => {
    expect(sleep).to.be.an.instanceOf(Sleep);
  });

  it('should be able to hold a user\'s sleep data', () => {
    expect(sleep.userSleep).to.deep.equal(
      [
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
      ]
    );
  });

  it('should be able to get average hours of sleep for all time for a user', () => {
    expect(sleep.getUserAvgHrs()).to.equal(7.9);
  });

  it('should be able to get average sleep quality for all time for a user', () => {
    expect(sleep.getUserAvgQuality()).to.equal(2.8);
  });

  it('should be able to get hours slept on a specific date for a user', () => {
    expect(sleep.getUserHrsByDate('2019/06/16')).to.equal(4.1);
  });

  it('should be able to get sleep quality on a specific date for a user', () => {
    expect(sleep.getUserQualityByDate('2019/06/16')).to.equal(3.8);
  });

  it.skip('should be able to get hrs slept each day for a week for a user', () => {
    expect(sleep.getUserHrsByWeek()).to.equal([6.1, 4.1, 7.1, 10.4, 10.7, 9.3, 7.8]);
  });

  it.skip('should be able to get sleep quality each day for a week for a user', () => {
    expect(sleep.getUserQualityByWeek()).to.equal([2.2, 3.8, 4.1, 3.1, 1.2, 1.2, 4.2]);
  });
});
