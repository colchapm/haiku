import { TestScheduler } from 'jest';
import HaikuChecker from '../src/haiku.js';

describe ('Test', () => {
  
  let newTest;
  beforeEach(() => {
    let haiku = `An old silent pond...
    A frog jumps into the pond,
    splash! Silence again.`
    newTest = new HaikuChecker(haiku);
  });

  test('should return the number of lines of the haiku', () => {
    expect(newTest.lineChecker()).toEqual(3);
  })

  test('should return a boolean to the user whether the haiku has correct number of lines or not', () => {
    expect(newTest.requiredLines()).toEqual(true);
  })

  test('should convert original haiku to all lowercase letters', () => {
    expect(newTest.lowerCase()).toEqual(newTest.haiku = `an old silent pond...
    a frog jumps into the pond,
    splash! silence again.`);
    })
  
  test('should remove all punctuation from the haiku', () => {
    newTest.lowerCase();
    expect(newTest.removePunct()).toEqual(newTest.haiku = `an old silent pond
    a frog jumps into the pond
    splash silence again`);
    })

  test('should remove all the whitespace from the haiku and return the three lines in an array', () => {
    newTest.lowerCase();
    newTest.removePunct();
    expect(newTest.lineBreaker()).toEqual([["an", "old", "silent", "pond"], ["a", "frog", "jumps", "into", "the", "pond"], ["splash", "silence", "again"]]);
    })

  test('should return the number of syllables in the entire haiku', () => {
    newTest.lowerCase();
    newTest.removePunct();
    newTest.lineBreaker();
    expect(newTest.syllableCounter()).toEqual(newTest.syllables = [5,7,5]);
  })
  
  test('should return a boolean to the user whether the haiku has the correct number of syllables in each line', () => {
    newTest.lowerCase();
    newTest.removePunct();
    newTest.lineBreaker();
    expect(newTest.checkHaiku()).toEqual(true);
  })

})

