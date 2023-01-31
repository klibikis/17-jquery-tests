const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
import validateName from './validateName';


describe('Correct name', () => {
  it('should return true in case when name is correct', () => {
    const name = validateName("Donatello");

    expect(name).toEqual(true);
  });
});

describe('person has 2 names', () => {
  it('should return true for person with 2 names', () => {
    const name = validateName("Bill Gates");

    expect(name).toEqual(true);
  });
});

describe('empty string', () => {
  it('it should return false when the name is empty string', () => {
    const name = validateName("      ");

    expect(name).toEqual(false);
  });
});

describe('incorrect input', () => {
  it('return false when there are numbers in name', () => {
    const name = validateName("Donate11o");

    expect(name).toEqual(false);
  });
});

describe('incorrect input', () => {
  it('return false when there are special characters in name', () => {
    const name = validateName("Donate11o");

    expect(name).toEqual(false);
  });
});


