// Shared Framer Motion presets. Two fade variants:
//   fadeUp       — plays on mount (initial → animate)
//   fadeUpInView — plays when scrolled into view (initial → whileInView, once)

export const EASE = [0.25, 1, 0.5, 1] as [number, number, number, number];

export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: EASE },
});

export const fadeUpInView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.45, delay, ease: EASE },
});

export const slideIn = (fromLeft: boolean, delay = 0) => ({
  initial: { opacity: 0, x: fromLeft ? -20 : 20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.45, delay, ease: EASE },
});
