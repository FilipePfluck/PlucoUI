import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'
import { Progress } from '@ark-ui/react'

export default Pluco(Progress, {
  Root: cva({
    base: {
      display: 'flex',
      align: 'center',
      w: 'full',
      h: 'auto',
    },
  }),
  Label: cva({
    base: {
      textStyle: 'headingXs',
      color: 'fg',
    },
  }),
  ValueText: cva({
    base: {
      textStyle: 'bodySm',
      color: 'fg',
    },
  }),
  Track: cva({
    base: {
      bg: 'border',
      rounded: 'lg',
      overflow: 'hidden',
      h: '2',
      w: 'full',
    },
  }),
  Range: cva({
    base: {
      bg: 'bg.brand',
      h: 'full',
      transition: 'width 0.2s ease-in-out',
      '--translate-x': '-100%',
    },
  }),
  Circle: cva({
    base: {
      '--size': '64px',
      '--thickness': '4px',
    },
  }),
  CircleTrack: cva({
    base: {
      stroke: 'border',
    },
  }),
  CircleRange: cva({
    base: {
      stroke: 'bg.brand',
      transitionProperty: 'stroke-dasharray, stroke',
      transitionDuration: '0.6s',
    },
  }),
})
