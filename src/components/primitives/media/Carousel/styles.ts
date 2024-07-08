import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import { Carousel } from '@ark-ui/react'

export default Pluco(Carousel, {
  Viewport: cva({
    base: {
      overflowX: 'hidden',
      position: 'relative',
      rounded: 'lg',
    },
  }),
  Control: cva({
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
  }),
  IndicatorGroup: cva({
    base: {
      display: 'flex',
      gap: '3',
    },
  }),
  Indicator: cva({
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
  }),
})

export const Image = styled('img', {
  base: {
    h: '398px',
    w: 'full',
    objectFit: 'cover',
  },
})
