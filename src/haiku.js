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
  let syllableBreak = this.haiku.split(/\r\n|\r|\n/);
  let testLineOne = syllableBreak[0].split(" ").filter(element => element !== '');
  let testLineTwo = syllableBreak[1].split(" ").filter(element => element !== '');
  let testLineThree = syllableBreak[2].split(" ").filter(element => element !== '');
  return this.rows = [testLineOne, testLineTwo, testLineThree]
}


HaikuChecker.prototype.syllableCounter = function () {
  let syllableCount = 0;

  //this loops over each line
  for (let o = 0; o < this.rows.length; o++) {
  //this loops over each word
    for (let i = 0; i < this.rows[o].length; i++) {
     
    let reverseWord = this.rows[o][i].split('');
    reverseWord.reverse();

    if(this.rows[o][i].length > 3 && reverseWord[0] === "e" && 'aeiou'.indexOf(reverseWord[1]) === -1) {
      if (reverseWord[1] === "l" && 'aeiou'.indexOf(reverseWord[2]) === -1) {
        syllableCount += 0;
      } else {
        syllableCount -= 1;
      }
    } 

    let wordsToLetters = this.rows[o][i].split('')
    //this loops over each letter
      for (let j = 0; j < wordsToLetters.length; j++) {
        if (wordsToLetters[j] === 'a' | wordsToLetters[j] === 'e' | wordsToLetters[j] === 'i'| wordsToLetters[j] === 'o' | wordsToLetters[j] === 'u') {
          if (wordsToLetters[j-1] === 'a' | wordsToLetters[j-1] === 'e' | wordsToLetters[j-1] === 'i' |  wordsToLetters[j-1] === 'o' | wordsToLetters[j-1] === 'u') {
          syllableCount += 0;      
          } else {
          syllableCount += 1;
        }
        }
      } 
    }
  }
  return syllableCount
}

