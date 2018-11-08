console.log({ loaded: 'scroll-animator' });

return registerAnimator('ps', class ParallaxAnimator {
  animate(currentTime, effect) {
    effect.localTime = currentTime;
  }
});
