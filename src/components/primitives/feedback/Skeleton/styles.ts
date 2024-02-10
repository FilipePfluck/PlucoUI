import { styled } from '@/styled-system/jsx'
import { ark } from '@ark-ui/react'

export const Root = styled(ark.div, {
  base: {
    animation: 'skeletonPulse',
    backgroundClip: 'padding-box',
    backgroundColor: 'bg.card.hovered',
    borderRadius: 'lg',
    color: 'transparent',
    cursor: 'default',
    pointerEvents: 'none',
    userSelect: 'none',
    '&::before, &::after, *': {
      visibility: 'hidden',
    },
  },
})
