/**
 * Initializes Intersection Observer for scroll reveal animations.
 * Apply the `.reveal` class to any element you want to animate on scroll.
 * Optionally add `.reveal-delay-1` through `.reveal-delay-4` for staggered effects.
 *
 * @param {IntersectionObserverInit} options - Observer configuration overrides
 */
export function initScrollAnimation(options = {}) {
  const defaults = {
    threshold: 0.08,
    rootMargin: '0px 0px -60px 0px',
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { ...defaults, ...options }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  return observer;
}
