import { TestScheduler } from 'jest';
import HaikuChecker from '../src/haiku.js';

describe ('Test', () => {
  
  let newTest;
  beforeEach(() => {
    let haiku = `A world of dew,
    And within every dewdrop
    A world of struggle.`
    newTest = new HaikuChecker(haiku);
  });

  test('should return the number of lines of the haiku', () => {
    expect(newTest.lineChecker()).toEqual(3);
  })

  test('should return a boolean to the user whether the haiku has correct number of lines or not', () => {
    expect(newTest.requiredLines()).toEqual(true);
  })

  test('should convert original haiku to all lowercase letters', () => {
    expect(newTest.lowerCase()).toEqual(newTest.haiku = `a world of dew,
    and within every dewdrop
    a world of struggle.`);
    })
  
    test('should remove all the whitespace from the haiku and return the three lines in an array', () => {
      newTest.lowerCase();
      expect(newTest.lineBreaker()).toEqual([["a", "world", "of", "dew,"], ["and", "within", "every", "dewdrop"], ["a", "world", "of", "struggle."]]);
    })


  test('should return the number of syllables in each line', () => {
    expect(newTest.syllableBreaker()).toEqual()
  })
  
})

