import validateEmail from './validateEmail';

describe('sum', () => {
  it('should return true for correct name', () => {
    const name = validateEmail("homer@springfield.com");

    expect(name).toEqual(true);
  });
});
