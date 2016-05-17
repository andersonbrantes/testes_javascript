
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

SpeedTest.prototype = {
  startTest = function() {
    var beginTime, endTime, sumTimes = 0;

    for(var i = 0, x = this.repetitions; i < x; i++) {
      beginTime = +new Date();
      this.testImplement( this.testParams );
      endTime = +new Date();
      sumTimes += endTime - beginTime;
    }

    this.average = sumTimes / this.repetitions;
    return console.log("Average execution across " +
                        this.repetitions + ": " +
                        this.average);
  }
}
