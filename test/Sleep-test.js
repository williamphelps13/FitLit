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
    console.log(sleep.getUserHrsByWeek('2019/06/20'));
    expect(sleep.getUserHrsByWeek('2019/06/20')).to.deep.equal({
      date: [
        '2019/06/15',
        '2019/06/16',
        '2019/06/17',
        '2019/06/18',
        '2019/06/19',
        '2019/06/20',
      ],
      hours: [6.1, 4.1, 8, 10.4, 10.7, 9.3],
    });
  });

  it('should be able to get sleep quality each day for a week for a user', () => {
    console.log(sleep.getUserQualityByWeek('2019/06/20'));
    expect(sleep.getUserQualityByWeek('2019/06/20')).to.deep.equal({
      date: [
        '2019/06/15',
        '2019/06/16',
        '2019/06/17',
        '2019/06/18',
        '2019/06/19',
        '2019/06/20',
      ],
      quality: [2.2, 3.8, 2.6, 3.1, 1.2, 1.2],
    });
  });
});
