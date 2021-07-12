import { expect } from 'chai';
import userData from '../src/data/user-test-data';
import User from '../src/User';

describe('User', () => {
  let user, userIndex;

  beforeEach(() => {
    userIndex = 0;
    user = new User(userData[userIndex]);
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', () => {
    expect(user).to.be.an.instanceOf(User);
  });

  it('should be able to store a user ID', () => {
    expect(user.id).to.equal(1);
  });

  it('should be able to store a user name', () => {
    expect(user.name).to.equal('Luisa Hane');
  });

  it('should be able to store a user address', () => {
    expect(user.address).to.equal(
      '15195 Nakia Tunnel, Erdmanport VA 19901-1697'
    );
  });

  it('should be able to store a user email', () => {
    expect(user.email).to.equal('Diana.Hayes1@hotmail.com');
  });

  it('should be able to store a user stride length', () => {
    expect(user.strideLength).to.equal(4.3);
  });

  it('should be able to store a user daily steps', () => {
    expect(user.dailyStepGoal).to.equal(10000);
  });

  it('should be able to store an array of user friends by id', () => {
    expect(user.friends).to.deep.equal([16, 4, 8]);
  });

  it('should be able to return the first name', () => {
    expect(user.getFirstName()).to.equal('Luisa');
  });
});
