import { TestScheduler } from 'jest';
import HaikuChecker from '../src/haiku.js';

describe ('Test', () => {
  
  let newTest;
  beforeEach(() => {
    let haiku = `a world of dew,
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
  
  test('should return the number of syllables in each line', () => {
    expect(newTest.syllableBreaker()).toEqual()
  })
  
})

