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

  it("should be able to hold a user's sleep data", () => {
    expect(sleepRepo.getUserSleepData(1)).to.deep.equal(sleep.userSleep);
  });

  it('should be able to get average hours of sleep for all time for a user', () => {
    expect(sleep.getUserAvgHrs()).to.equal(7.5);
  });

  it('should be able to get average sleep quality for all time for a user', () => {
    expect(sleep.getUserAvgQuality()).to.equal(3);
  });

  it('should be able to get hours slept on a specific date for a user', () => {
    expect(sleep.getUserHrsByDate('2019/06/16')).to.equal(4.1);
  });

  it('should be able to get sleep quality on a specific date for a user', () => {
    expect(sleep.getUserQualityByDate('2019/06/16')).to.equal(3.8);
  });

  it('should be able to get hrs slept each day for a week for a user', () => {
    expect(sleep.getUserHrsByWeek('2019/06/22')).to.deep.equal([
      4.1, 8, 10.4, 10.7, 9.3, 7.8, 7,
    ]);
  });

  it('should be able to get sleep quality each day for a week for a user', () => {
    expect(sleep.getUserQualityByWeek('2019/07/12')).to.deep.equal([
      1.4, 4.8, 4.7, 4.9, 3.2, 2.8, 2.6,
    ]);
  });
});
