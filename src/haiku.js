export default function HaikuChecker(haiku) {
  this.haiku = haiku;
}

HaikuChecker.prototype.lineChecker = function () {
  let lineCheck = this.haiku.split(/\r\n|\r|\n/).length;
  return lineCheck;
}

HaikuChecker.prototype.requiredLines = function () {
  if (this.haiku.split(/\r\n|\r|\n/).length === 3) {
    return true;
  }
}