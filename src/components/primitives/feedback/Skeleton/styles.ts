import { styled } from '@/styled-system/jsx'
import { ark } from '@ark-ui/react'

export const Root = styled(ark.div, {
  base: {
    animation: 'skeletonPulse',
    backgroundClip: 'padding-box',
    backgroundColor: 'border',
    borderRadius: 'lg',
    w: 'max-content',
    color: 'transparent',
    cursor: 'default',
    pointerEvents: 'none',
    userSelect: 'none',
    '&::before, &::after, *': {
      visibility: 'hidden',
    },
  },
  variants: {
    variant: {
      headingXl: {
        h: '12',
        my: '4px',
      },
      headingLg: {
        h: '8',
        my: '2px',
      },
      headingMd: {
        h: '6',
        my: '2px',
      },
      headingSm: {
        h: '5',
        my: '2px',
      },
      headingXs: {
        h: '4',
        my: '2px',
      },
      textXl: {
        h: '5',
        my: '6px',
      },
      textLg: {
        h: '18px',
        my: '5px',
      },
      textMd: {
        h: '16px',
        my: '5px',
      },
      textSm: {
        h: '14px',
        my: '4px',
      },
      textXs: {
        h: '12px',
        my: '3px',
      },
    },
  },
})
