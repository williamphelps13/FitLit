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

  it("should be able to hold a user's hydration data", () => {
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
    ]);
  });

  it('should be able to get average ounces of water consumer for all time for a user', () => {
    expect(hydration.getUserAvgOzAllTime(1)).to.equal(67);
  });

  it('should be able to get ounces consumed for a specific date for a user', () => {
    expect(hydration.getUserOzByDate('2019/06/16')).to.equal(69);
  });

  // it('should be able to get user data for one week', () => {
  //   expect(hydration.email).to.equal('Diana.Hayes1@hotmail.com');
  // });
});
