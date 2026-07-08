/**
 * Animation Variants
 * 
 * Reusable Framer Motion animation variants for consistent motion design.
 * All animations should respect prefers-reduced-motion.
 * Optimized for immediate, premium responsiveness.
 */

import { motion, Variants } from 'framer-motion';

// Check for reduced motion preference
const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Premium easing curve for snappy, responsive animations
export const easing = [0.25, 0.46, 0.45, 0.94];

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.4, ease: easing }
  },
};

// Fade up animation
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: easing }
  },
};

// Fade down animation
export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: easing }
  },
};

// Fade in from left
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.4, ease: easing }
  },
};

// Fade in from right
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.4, ease: easing }
  },
};

// Scale in animation
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.3, ease: easing }
  },
};

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: easing }
  },
};

// Slide in from bottom (for modals, drawers)
export const slideUp: Variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.3, ease: easing }
  },
};

// Navbar scroll animation
export const navbarScroll: Variants = {
  transparent: {
    backgroundColor: 'transparent',
    backdropFilter: 'blur(0px)',
    borderColor: 'transparent',
  },
  scrolled: {
    backgroundColor: 'rgba(9, 9, 11, 0.8)',
    backdropFilter: 'blur(20px)',
    borderColor: 'rgba(39, 39, 42, 0.5)',
    transition: { duration: 0.25, ease: easing }
  },
};

// Card hover animation
export const cardHover = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.015,
    transition: { duration: 0.2, ease: easing }
  },
};

// Button press animation
export const buttonPress = {
  rest: { scale: 1 },
  press: { scale: 0.97 },
  transition: { duration: 0.1, ease: easing }
};

// Pulse animation (for loading states, indicators)
export const pulse = {
  animate: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Rotate animation (for spinners, loading)
export const rotate = {
  animate: {
    rotate: 360,
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

// Helper to wrap animations with reduced motion check
export const safeAnimate = (variants: Variants) => {
  if (prefersReducedMotion()) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0 } },
    };
  }
  return variants;
};
