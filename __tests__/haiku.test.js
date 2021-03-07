import { TestScheduler } from 'jest';
import HaikuChecker from '../src/haiku.js';

describe ('Test', () => {
  
  let newTest;
  beforeEach(() => {
    let haiku = `The old pond- 
    a frog jumps in, 
    sound of water`;
    newTest = new HaikuChecker(haiku);
  });

  test('should return the number of lines of the haiku', () => {
    expect(newTest.lineChecker()).toEqual(3);
  })

  test('should return a message to the user whether the haiku has correct number of lines or not', () => {
    expect(newTest.requiredLines()).toEqual(true);
  })
  
  
})

