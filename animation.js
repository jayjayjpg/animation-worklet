function animateIt() {
  const animation = new Animation(
    new KeyframeEffect(
      document.querySelector('#square'),
      [
        {
          transform: 'translateX(0)'
        },
        {
          transform: 'translateX(500px)'
        },
        {
          transform: 'translateY(500px)'
        }
      ],
      {
        delay: 500,
        duration: 2000,
        iterations: 30
      }
    ),
    document.timeline
  );

  animation.play();
}

function animateWithWorklet(animatedEl){
  CSS.animationWorklet.addModule("scroll-animator.js").then(function(val) {
    console.log({ val });
    let animation = new WorkletAnimation(
      'ps',
      new KeyframeEffect(
        animatedEl,
        [
          {
            transform: 'translateX(0)'
          },
          {
            transform: 'translateX(500px)'
          }
        ],
        {
          duration: 2000,
          iterations: Number.POSITIVE_INFINITY
        }
      ),
      document.timeline
    );
    animation.play();
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  animateIt();
  let el = document.querySelector('#squarer');
  if('animationWorklet' in CSS) {
    animateWithWorklet(el);
  } else {
    node.replaceWith('The Animation Worklet API is not supported in your browser.');
  }
});
