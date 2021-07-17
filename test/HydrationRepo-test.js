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
      {
        userID: 1,
        date: '2019/06/18',
        numOunces: 61,
      },
      {
        userID: 1,
        date: '2019/06/19',
        numOunces: 91,
      },
      {
        userID: 1,
        date: '2019/06/20',
        numOunces: 50,
      },
      {
        userID: 1,
        date: '2019/06/21',
        numOunces: 50,
      }
    ]);
  });
});
