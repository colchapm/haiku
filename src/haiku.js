export default function HaikuChecker(haiku) {
  this.haiku = haiku;
  this.rows = [];
}

HaikuChecker.prototype.lineChecker = function () {
  let lineCheck = this.haiku.split(/\r\n|\r|\n/).length;
  return lineCheck;
}

HaikuChecker.prototype.requiredLines = function () {
  if (this.haiku.split(/\r\n|\r|\n/).length === 3) {
    return true
  } 
  else {
    return false 
  }
}

HaikuChecker.prototype.lowerCase = function () {
  return this.haiku = this.haiku.toLowerCase();
}

HaikuChecker.prototype.lineBreaker = function () {
  console.log(this.haiku)
  let syllableBreak = this.haiku.split(/\r\n|\r|\n/);
  let testLineOne = syllableBreak[0].split(" ").filter(element => element !== '');
  let testLineTwo = syllableBreak[1].split(" ").filter(element => element !== '');
  let testLineThree = syllableBreak[2].split(" ").filter(element => element !== '');
  return this.rows = [testLineOne, testLineTwo, testLineThree]
}

HaikuChecker.prototype.syllableBreaker = function () {
  let syllableBreak = this.haiku.split(/\r\n|\r|\n/);
  let testLineOne = syllableBreak[0].split(" ").filter(element => element !== '');
  let testLineTwo = syllableBreak[1].split(" ").filter(element => element !== '');
  let testLineThree = syllableBreak[2].split(" ").filter(element => element !== '');

  let vowelCount = 0;

  for (let i = 0; i < testLineOne.length; i++) {
    
     //the silent 'e' logic
    let reverseWord = testLineOne[i].split('');
    reverseWord.reverse();
    if(testLineOne[i].length > 3 && reverseWord[0] === "e" && 'aeiou'.indexOf(reverseWord[1]) === -1){
      if (reverseWord[1] === "l" && 'aeiou'.indexOf(reverseWord[2]) === -1) {
        vowelCount += 0;
      } else {
        vowelCount -= 1;
      }
    } 

    //vowel logic
    let wordsToLetters = testLineOne[i].split('')
      for (let j = 0; j < wordsToLetters.length; j++) {
        if (wordsToLetters[j] === 'a' | wordsToLetters[j] === 'e' | wordsToLetters[j] === 'i'| wordsToLetters[j] === 'o' | wordsToLetters[j] === 'u') {
          if (wordsToLetters[j-1] === 'a' | wordsToLetters[j-1] === 'e' | wordsToLetters[j-1] === 'i' |  wordsToLetters[j-1] === 'o' | wordsToLetters[j-1] === 'u') {
          vowelCount += 0;      
          } else {
          vowelCount += 1;
        }
        }
      } 
      console.log(testLineOne[i] + " " + vowelCount);
  } 
  console.log(vowelCount);
  //if special count is <= 0 then make special count
  return [testLineOne, testLineTwo, testLineThree];
}