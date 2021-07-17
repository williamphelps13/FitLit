import { expect } from 'chai';
import HydrationRepo from '../src/HydrationRepo';
import Hydration from '../src/Hydration';
import hydrationData from '../src/data/hydration-test-data';

describe('Hydration', () => {
  let hydrationRepo, hydration;

  beforeEach(() => {
    hydrationRepo = new HydrationRepo(hydrationData);
    hydration = new Hydration(hydrationRepo.getUserHydration(1));
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', () => {
    expect(hydration).to.be.an.instanceOf(Hydration);
  });

  it('should be able to hold a user\'s hydration data', () => {
    expect(hydration.userHydration).to.deep.equal([
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

  it('should be able to get average ounces of water consumed for all time for a user', () => {
    expect(hydration.getUserAvgOz()).to.equal(65);
  });

  it('should be able to get ounces consumed for a specific date for a user', () => {
    expect(hydration.getUserOzByDate('2019/06/16')).to.equal(69);
  });

  it.skip('should be able to get ounces consumed each day for a week for a user', () => {
    expect(hydration.getUserOzByWeek()).to.equal([37, 69, 95, 61, 91, 50, 50]);
  });
});
