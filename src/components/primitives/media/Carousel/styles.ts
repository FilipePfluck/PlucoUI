import { styled } from '@/styled-system/jsx'
import { Carousel } from '@ark-ui/react'

export const Root = styled(Carousel.Root, {
  base: {},
})

export const Viewport = styled(Carousel.Viewport, {
  base: {
    overflowX: 'hidden',
    position: 'relative',
    rounded: 'lg',
  },
})

export const Control = styled(Carousel.Control, {
  base: {
    display: 'flex',
    align: 'center',
    bg: 'bg.surface',
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
    w: '3',
    h: '3',
    rounded: 'full',
    bg: 'border',
    cursor: 'pointer',
    '&[data-current]': {
      bg: 'bg.brand',
    },
  },
})

export const PrevTrigger = styled(Carousel.PrevTrigger, {})

export const NextTrigger = styled(Carousel.NextTrigger, {})

export const ItemGroup = styled(Carousel.ItemGroup, {})

export const Item = styled(Carousel.Item, {})

export const Image = styled('img', {
  base: {
    h: '398px',
    w: 'full',
    objectFit: 'cover',
  },
})
