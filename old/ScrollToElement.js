// Scroll to a specific element with smooth scrolling
function scrollToElement(element) {
    if (element) {
      const yOffset = element.getBoundingClientRect().top;
      const initialScroll = window.scrollY;
      const targetScroll = initialScroll + yOffset;
      const duration = 1000; // Adjust the duration as needed
  
      function scrollTo(currentTime) {
        const elapsed = currentTime - startTime;
        if (elapsed < duration) {
          window.scrollTo(0, easeInOutCubic(elapsed, initialScroll, yOffset, duration));
          requestAnimationFrame(scrollTo);
        } else {
          window.scrollTo(0, targetScroll);
        }
      }
  
      function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
      }
  
      const startTime = performance.now();
      requestAnimationFrame(scrollTo);
    }
  }
  
  export default scrollToElement;
  