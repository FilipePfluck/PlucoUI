import { CssKeyframes } from '@/styled-system/types/system-types'

export const keyframes: CssKeyframes = {
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  fadeOut: {
    '0%': { opacity: '1' },
    '100%': { opacity: '0' },
  },

  // accordion
  accordionSlideDown: {
    '0%': {
      height: '0px',
      padding: '0px 16px',
    },
    '100%': {
      height: 'var(--height)',
      padding: '16px 16px',
    },
  },
  accordionSlideUp: {
    '0%': {
      height: 'var(--height)',
      padding: '16px 16px',
    },
    '100%': {
      height: '0px',
      padding: '0px 16px',
    },
  },

  // checkbox

  check: {
    '0%': { opacity: '0', transform: 'translate(-50%, -50%) scale(50%)' },
    '100%': { opacity: '1', transform: 'translate(-50%, -50%) scale(100%)' },
  },
  unCheck: {
    '0%': { opacity: '1', transform: 'translate(-50%, -50%) scale(100%)' },
    '100%': { opacity: '0', transform: 'translate(-50%, -50%) scale(50%)' },
  },

  // slide and fade
  slideUpAndFadeIn: {
    '0%': { opacity: 0, transform: 'translateY(2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },
  slideRightAndFadeIn: {
    '0%': { opacity: 0, transform: 'translateX(-2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
  },
  slideDownAndFadeIn: {
    '0%': { opacity: 0, transform: 'translateY(-2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },
  slideLeftAndFadeIn: {
    '0%': { opacity: 0, transform: 'translateX(2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
  },

  slideUpAndFadeOut: {
    '0%': { opacity: 1, transform: 'translateY(0)' },
    '100%': { opacity: 0, transform: 'translateY(2px)' },
  },
  slideRightAndFadeOut: {
    '0%': { opacity: 1, transform: 'translateX(0)' },
    '100%': { opacity: 0, transform: 'translateX(-2px)' },
  },
  slideDownAndFadeOut: {
    '0%': { opacity: 1, transform: 'translateY(0)' },
    '100%': { opacity: 0, transform: 'translateY(-2px)' },
  },
  slideLeftAndFadeOut: {
    '0%': { opacity: 1, transform: 'translateX(0)' },
    '100%': { opacity: 0, transform: 'translateX(2px)' },
  },

  // collapsible
  expand: {
    '0%': {
      height: '0px',
    },
    '100%': {
      height: 'var(--height);',
    },
  },
  collapse: {
    '0%': {
      height: 'var(--height);',
    },
    '100%': {
      height: '0px',
    },
  },

  fadeInAndScale: {
    '0%': {
      opacity: 0,
      transform: 'scale(0.96)',
    },
    '100%': {
      opacity: 1,
      transform: 'scale(1)',
    },
  },

  // toast

  slideInToast: {
    '0%': {
      opacity: 0,
      transform: 'translateX(calc(100% + 24px))',
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },

  slideOutToast: {
    '0%': {
      opacity: 1,
      transform: 'translateX(0)',
    },
    '100%': {
      opacity: 0,
      transform: 'translateX(calc(100% + 24px))',
    },
  },

  swipeOutToast: {
    '0%': {
      transform: 'translateX(var(--radix-toast-swipe-end-x))',
    },
    '100%': {
      transform: 'translateX(calc(100% + 24px))',
    },
  },

  // skeleton
  skeletonPulse: {
    '50%': { opacity: '0.5' },
  },

  // combobox item
  comboboxItemAppear: {
    '0%': {
      height: '0px',
      padding: '0px 4px',
      opacity: 0,
    },
    '50%': {
      height: '30px',
      padding: '2px 4px',
      opacity: 0,
    },
    '100%': {
      height: '30px',
      padding: '2px 4px',
      opacity: 1,
    },
  },
}
