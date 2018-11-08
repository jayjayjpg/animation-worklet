function animateIt(animatedEl, keyframes, options) {
  const animation = new Animation(
    new KeyframeEffect(
      animatedEl,
      keyframes,
      options,
    ),
    document.timeline
  );

  animation.play();
}

async function animateWithWorklet(animatedEl, keyframes, options) {
  await CSS.animationWorklet.addModule("scroll-animator.js?v=1.4");
  let animation = new WorkletAnimation(
    'scrollanimation',
    new KeyframeEffect(
      animatedEl,
      keyframes,
      options,
    ),
    document.timeline
  );

  animation.play();
}

document.addEventListener("DOMContentLoaded", function(event) {
  let keyframes = [{
    transform: 'translateX(0)'
  },
  {
    transform: 'translateX(500px)'
  },
  {
    transform: 'translateY(500px)'
  }];
  let options = {
    delay: 500,
    duration: 2000,
    iterations: 30
  };
  let el = document.querySelector('#square');
  let el2 = document.querySelector('#squarer');

  animateIt(el, keyframes, options);
  if ('animationWorklet' in CSS) {
    // animateWithWorklet(el2, keyframes, options);
  } else {
    node.replaceWith('The Animation Worklet API is not supported in your browser.');
  }
});
