function animateIt(animatedEl, keyframes, options) {
  [1,2,3,4,5,6].forEach((num, index) => {
    newOptions =  {
      ...options,
      delay: 100 * index,
    };
    const animation = new Animation(
      new KeyframeEffect(
        document.querySelector(`#square${num}`),
        keyframes,
        newOptions,
      ),
      document.timeline
    );

    animation.play();
  });
}

async function animateWithWorklet(animatedEl, keyframes, options) {
  await CSS.animationWorklet.addModule("scroll-animator.js?v=1.4");
  let scrollTimeline = new ScrollTimeline({
    scrollSource: document.querySelector('.main'),
    orientation: "vertical", // "horizontal" or "vertical".
    timeRange: 2000
  });
  let timeline = new DocumentTimeline();
  [1].forEach((num, index) => {
    newOptions =  {
      ...options,
      delay: 100 * index,
    };
    let animation = new WorkletAnimation(
      'scrollanimation',
      new KeyframeEffect(
        document.querySelector(`#squarer${num}`),
        keyframes,
        newOptions,
      ),
      scrollTimeline,
      // document.timeline,
      { documentTimeline: document.timeline },
    );

    animation.play();
  });
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
    iterations: 90
  };
  let el = document.querySelector('#square');
  let el2 = document.querySelector('#squarer');

  // animateIt(el, keyframes, options);
  if ('animationWorklet' in CSS) {
    animateWithWorklet(el2, keyframes, options);
  } else {
    node.replaceWith('The Animation Worklet API is not supported in your browser.');
  }
});
