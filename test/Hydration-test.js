import { expect } from 'chai';
import HydrationRepo from '../src/HydrationRepo';
import Hydration from '../src/Hydration';
import hydrationData from '../src/data/hydration-test-data';

describe('Hydration', () => {
  let hydrationRepo, hydration;

  beforeEach(() => {
    hydrationRepo = new HydrationRepo(hydrationData);
    hydration = new Hydration(hydrationRepo.getUserHydrationData(1));
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', () => {
    expect(hydration).to.be.an.instanceOf(Hydration);
  });

  it("should be able to hold a user's hydration data", () => {
    expect(hydration.userHydration).to.deep.equal(
      hydrationRepo.getUserHydrationData(1)
    );
  });

  it('should be able to get average ounces of water consumed for all time for a user', () => {
    expect(hydration.getUserAvgOz()).to.equal(57);
  });

  it('should be able to get ounces consumed for a specific date for a user', () => {
    expect(hydration.getUserOzByDate('2019/06/16')).to.equal(69);
  });

  it('should be able to get ounces consumed each day for the latest week for a user', () => {
    console.log(hydration.getUserOzByWeek('2019/06/20'));
    expect(hydration.getUserOzByWeek('2019/06/20')).to.deep.equal({
      date: [
        '2019/06/15',
        '2019/06/16',
        '2019/06/17',
        '2019/06/18',
        '2019/06/19',
        '2019/06/20',
      ],
      ounces: [37, 69, 96, 61, 91, 50],
    });
  });
});
