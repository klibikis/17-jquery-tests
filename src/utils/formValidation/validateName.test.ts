import validateName from './validateName';

describe('sum', () => {
  it('should return true for correct name', () => {
    const name = validateName("Bill Gates");

    expect(name).toEqual(true);
  });
});
