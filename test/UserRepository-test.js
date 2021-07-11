import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import userData from '../src/data/users';

describe('User Repository', () => {
  let userRepository

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
    
    expect().to.equal();
  });
  
});