import { expect } from 'chai';
import userData from '../src/data/user-test-data';
import UserRepository from '../src/UserRepository';

describe('User Repository', () => {
  let userRepository;

  beforeEach(() => {
    userRepository = new UserRepository(userData);
  });

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of a UserRepository', () => {
    expect(userRepository).to.be.an.instanceOf(UserRepository);
  });

  it('should be able to hold user data', () => {
    expect(userRepository.data).to.deep.equal(userData);
  });

  it('should be able to get user by ID', () => {
    expect(userRepository.getUserByID(1)).to.deep.equal(userData[0]);
  });

  it('should be able to calculate the average step goal amongst all users', () => {
    expect(userRepository.getAvgStepGoal()).to.equal(6941);
  });
});
