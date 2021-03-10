export default function HaikuChecker(haiku, syllables) {
  this.haiku = haiku;
  this.syllables = syllables;
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

HaikuChecker.prototype.removePunct = function () {
  return this.haiku = this.haiku.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
}

HaikuChecker.prototype.lineBreaker = function () {
  let syllableBreak = this.haiku.split(/\r\n|\r|\n/);
  let testLineOne = syllableBreak[0].split(" ").filter(element => element !== '');
  let testLineTwo = syllableBreak[1].split(" ").filter(element => element !== '');
  let testLineThree = syllableBreak[2].split(" ").filter(element => element !== '');
  return this.rows = [testLineOne, testLineTwo, testLineThree]
}


HaikuChecker.prototype.syllableCounter = function () {
  this.syllables = [0,0,0];
  //this loops over each line
  for (let o = 0; o < this.rows.length; o++) {
  //this loops over each word
    for (let i = 0; i < this.rows[o].length; i++) {
     
    let reverseWord = this.rows[o][i].split('');
    reverseWord.reverse();

    if(this.rows[o][i].length > 3 && reverseWord[0] === "e" && 'aeiouy'.indexOf(reverseWord[1]) === -1) {
      if (reverseWord[1] === "l" && 'aeiouy'.indexOf(reverseWord[2]) === -1) {
        this.syllables[o] += 0;
      } else {
        this.syllables[o] -= 1;
      }
    } 
    
    let wordsToLetters = this.rows[o][i].split('')
    //this loops over each letter
      for (let j = 0; j < wordsToLetters.length; j++) {
        if (wordsToLetters[j] === 'a' | wordsToLetters[j] === 'e' | wordsToLetters[j] === 'i'| wordsToLetters[j] === 'o' | wordsToLetters[j] === 'u' |wordsToLetters[j] === 'y') {
          if (wordsToLetters[j-1] === 'a' | wordsToLetters[j-1] === 'e' | wordsToLetters[j-1] === 'i' |  wordsToLetters[j-1] === 'o' | wordsToLetters[j-1] === 'u' | wordsToLetters[j-1] === 'y') {
          this.syllables[o] += 0;      
          } else {
          this.syllables[o] += 1;
        }
        }
      } 
    }
  }
  return this.syllables
}

HaikuChecker.prototype.checkHaiku = function () {
  this.syllableCounter();
  console.log(this.syllables);
  if (this.syllables.toString() === "5,7,5") {
    return true
  } else {
    return false
  }
}
