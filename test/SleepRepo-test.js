import { expect } from 'chai';
import sleepData from '../src/data/sleep-test-data';
import SleepRepo from '../src/SleepRepo';
import Sleep from '../src/Sleep';

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
    let sleep = new Sleep(sleepRepo.getUserSleepData(1));

    expect(sleepRepo.getUserSleepData(1)).to.deep.equal(sleep.userSleep);
  });

  it.skip('should be able to get average sleep quality for all users', () => {
    expect(sleepRepo.getAvgQualityAllUsers()).to.equal(3.1);
  });
});
