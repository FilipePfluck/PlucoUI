import { styled } from '@/styled-system/jsx'
import { Carousel } from '@ark-ui/react'

export const Root = styled(Carousel.Root, {
  base: {},
})

export const Viewport = styled(Carousel.Viewport, {
  base: {
    overflowX: 'hidden',
    position: 'relative',
    rounded: 'md',
  },
})

export const Control = styled(Carousel.Control, {
  base: {
    display: 'flex',
    align: 'center',
    bg: 'bg.card',
    rounded: 'md',
    shadow: 'md',
    bottom: '4',
    left: '50%',
    position: 'absolute',
    transform: 'translateX(-50%)',
    gap: '2',
    p: '2',
  },
})

export const IndicatorGroup = styled(Carousel.IndicatorGroup, {
  base: {
    display: 'flex',
    gap: '3',
  },
})

export const Indicator = styled(Carousel.Indicator, {
  base: {
    w: '2.5',
    h: '2.5',
    rounded: 'full',
    bg: 'border',
    cursor: 'pointer',
    '&[data-current]': {
      bg: 'fg.important',
    },
  },
})
