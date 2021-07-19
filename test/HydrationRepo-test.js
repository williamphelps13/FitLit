import { expect } from 'chai';
import hydrationData from '../src/data/hydration-test-data';
import HydrationRepo from '../src/HydrationRepo';

describe('Hydration Repository', () => {
  let hydrationRepo;

  beforeEach(() => {
    hydrationRepo = new HydrationRepo(hydrationData);
  });

  it('should be a function', () => {
    expect(HydrationRepo).to.be.a('function');
  });

  it('should be an instance of a HydrationRepo', () => {
    expect(hydrationRepo).to.be.an.instanceOf(HydrationRepo);
  });

  it('should be able to hold hydration data', () => {
    expect(hydrationRepo.data).to.deep.equal(hydrationData);
  });

  it('should be able to get hydration data for a user', () => {
    expect(hydrationRepo.getUserHydrationData(1)).to.deep.equal([
      { userID: 1, date: '2019/06/15', numOunces: 37 },
      { userID: 1, date: '2019/06/16', numOunces: 69 },
      { userID: 1, date: '2019/06/17', numOunces: 96 },
      { userID: 1, date: '2019/06/18', numOunces: 61 },
      { userID: 1, date: '2019/06/19', numOunces: 91 },
      { userID: 1, date: '2019/06/20', numOunces: 50 },
      { userID: 1, date: '2019/06/21', numOunces: 50 },
      { userID: 1, date: '2019/06/22', numOunces: 43 },
      { userID: 1, date: '2019/06/23', numOunces: 39 },
      { userID: 1, date: '2019/06/24', numOunces: 61 },
      { userID: 1, date: '2019/06/25', numOunces: 51 },
      { userID: 1, date: '2019/06/26', numOunces: 52 },
      { userID: 1, date: '2019/06/27', numOunces: 29 },
      { userID: 1, date: '2019/06/28', numOunces: 57 },
      { userID: 1, date: '2019/06/29', numOunces: 99 },
      { userID: 1, date: '2019/06/30', numOunces: 64 },
      { userID: 1, date: '2019/07/01', numOunces: 82 },
      { userID: 1, date: '2019/07/02', numOunces: 53 },
      { userID: 1, date: '2019/07/03', numOunces: 26 },
      { userID: 1, date: '2019/07/04', numOunces: 30 },
    ]);
  });
});
