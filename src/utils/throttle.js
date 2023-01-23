export default function throttle(fn, ms) {
  let isThrottled = false;
  let savedArgs, self;

  function cb() {
    if (isThrottled) {
      savedArgs = arguments;
      self = this;
      return;
    }

    fn.apply(this, arguments);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (savedArgs) {
        cb.apply(self, savedArgs);
        savedArgs = self = null;
      }
    }, ms);
  }

  return cb;
}
