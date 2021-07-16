import { expect } from 'chai';
import hydrationData from '../src/data/hydration-test-data';
import HydrationRepo from '../src/HydrationRepo';

describe('HydrationRepo', () => {
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

  it('should be able to hold user data', () => {
    expect(hydrationRepo.data).to.deep.equal(hydrationData);
  });

  it('should be able to retrieve hydration data for a user', () => {
    expect(hydrationRepo.getUserHydration(1)).to.deep.equal([
      {
        userID: 1,
        date: '2019/06/15',
        numOunces: 37,
      },
      {
        userID: 1,
        date: '2019/06/16',
        numOunces: 69,
      },
      {
        userID: 1,
        date: '2019/06/17',
        numOunces: 95,
      },
    ]);
  });
});
