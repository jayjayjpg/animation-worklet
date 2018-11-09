console.log("scroll aninmation 3");
const iterations = 50;
const multiplier = 100000000;

function calculatePrimes(iterations, multiplier) {
  var primes = [];
  for (var i = 0; i < iterations; i++) {
    var candidate = i * (multiplier * Math.random());
    var isPrime = true;
    for (var c = 2; c <= Math.sqrt(candidate); ++c) {
      if (candidate % c === 0) {
          // not prime
          isPrime = false;
          break;
       }
    }
    if (isPrime) {
      primes.push(candidate);
    }
  }
  return primes;
}

function doPointlessComputationsWithBlocking() {
  var primes = calculatePrimes(iterations, multiplier);
  console.log("primed animated");
}

registerAnimator('scrollanimation', class {
  /* animate(currentTime, effect) {
    effect.localTime = currentTime;
  } */

  constructor(options = {}, state = {}) {
    this.direction = state.direction || (Math.random() > 0.5 ? 1 : -1);
    // this.documentTimeline = options.documentTimeline;
  }
  animate(currentTime, effect) {
    // Some math to make sure that `localTime` is always > 0.
    // effect.localTime = 2000 + this.direction * (currentTime % 2000);
    // effect.localTime = currentTime * this.documentTimeline.currentTime;
    // doPointlessComputationsWithBlocking();
  }
  destroy() {
    console.log("destroyed");
  }
});

/* registerAnimator('scrollanimation', class {
  constructor(options) {
    this.options = options;
  }

  animate(currentTime, effect) {
    var repeatTime = currentTime * 0.001 % 5;
    var t = 0;
    if (repeatTime < 2)
      t = Math.max(0, repeatTime - 1);
    else if (repeatTime > 3)
      t = Math.max(0, 4 - repeatTime);
    else
      t = 1;

    var expandScale = 13; //this.options.expandScale;
    var scale = (expandScale - 1) * t + 1;

    // Counter-scale the content elements.
    var counterScale = 1 / scale;
    var maxCounterScale = 1 / expandScale;
    effect.localTime = (counterScale - 1) / (maxCounterScale - 1) * 1000;
  }
}); */
