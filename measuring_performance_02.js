
var rightNow = +new Date();
var endTime = +new Date();
var elapsedTime = endTime - rightNow;

console.log("teste - " + elapsedTime);

function SpeedTest(testImplement, testParams, repetitions) {
  this.testImplement = testImplement;
  this.testParams = testParams;
  this.repetitions = repetitions || 1000;
  this.average = 0;
}
