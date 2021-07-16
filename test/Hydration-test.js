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

  // it('should be able to store a hydration name', () => {
  //   expect(hydration.name).to.equal('Luisa Hane');
  // });

  // it('should be able to store a hydration address', () => {
  //   expect(hydration.address).to.equal(
  //     '15195 Nakia Tunnel, Erdmanport VA 19901-1697'
  //   );
  // });

  // it('should be able to store a hydration email', () => {
  //   expect(hydration.email).to.equal('Diana.Hayes1@hotmail.com');
  // });

  // it('should be able to store a hydration stride length', () => {
  //   expect(hydration.strideLength).to.equal(4.3);
  // });

  // it('should be able to store a hydration daily steps', () => {
  //   expect(hydration.dailyStepGoal).to.equal(10000);
  // });

  // it('should be able to store an array of hydration friends by id', () => {
  //   expect(hydration.friends).to.deep.equal([16, 4, 8]);
  // });

  // it('should be able to return the first name', () => {
  //   expect(hydration.getFirstName()).to.equal('Luisa');
  // });
});
