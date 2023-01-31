import validatePassword from './validatePassword';

describe('sum', () => {
  it('should return true for correct name', () => {
    const name = validatePassword("asff$$52637@");

    expect(name).toEqual(true);
  });
});
