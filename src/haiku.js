export default function HaikuChecker(haiku) {
  this.haiku = haiku;
}

HaikuChecker.prototype.lineChecker = function () {
  let lineCheck = this.haiku.split(/\r\n|\r|\n/).length 

  console.log(lineCheck);
  return lineCheck
}