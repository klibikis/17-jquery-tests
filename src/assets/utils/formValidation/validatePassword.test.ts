/**
 * @jest-environment jsdom
 */
import validatePassword from './validatePassword';


describe('empty', () => {
  it('should return false for empty password', () => {
    const password = validatePassword('   ');

    expect(password).toEqual(false);
  });
});

describe('password with 1 number and 1 special character', () => {
  it('should return true for password with 1 number and 1 special character', () => {
    const password = validatePassword('asff$$52637@');

    expect(password).toEqual(true);
  });
});

describe('password with 1 number and 1 special character too short', () => {
  it('should return false for too short password', () => {
    const password = validatePassword('a52637@');

    expect(password).toEqual(false);
  });
});

describe('right length password without number', () => {
  it('should return false for right length password with number but not special character', () => {
    const password = validatePassword('a526374444');

    expect(password).toEqual(false);
  });
});
