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

  it('should be able to get user by ID', () => {
    expect(hydrationRepo.getUserByID(1)).to.deep.equal(hydrationData[0]);
  });
});
