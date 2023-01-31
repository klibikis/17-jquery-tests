/**
 * @jest-environment jsdom
 */
import validateEmail from './validateEmail';


describe('empty', () => {
  it('should return false for empty email', () => {
    const email = validateEmail('   ');

    expect(email).toEqual(false);
  });
});

describe('without @', () => {
  it('should return false for email without @', () => {
    const email = validateEmail('simpsonhomer.lv');

    expect(email).toEqual(false);
  });
});

describe('too long domain', () => {
  it('should return false for domain more than 3 units', () => {
    const email = validateEmail('simpson@homer.lvvv');

    expect(email).toEqual(false);
  });
});

describe('correct', () => {
  it('should return true if email is correct', () => {
    const email = validateEmail('simpson@homer.lv');

    expect(email).toEqual(true);
  });
});

