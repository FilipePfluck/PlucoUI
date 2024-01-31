import { styled } from '@/styled-system/jsx'
import { Progress } from '@ark-ui/react'

export const Root = styled(Progress.Root, {
  base: {
    display: 'flex',
    align: 'center',
    w: 'full',
    h: 'auto',
  },
})

export const Label = styled(Progress.Label, {
  base: {
    textStyle: 'headingXs',
    color: 'fg',
  },
})

export const ValueText = styled(Progress.ValueText, {
  base: {
    textStyle: 'textSm',
    color: 'fg',
  },
})

export const Track = styled(Progress.Track, {
  base: {
    bg: 'border',
    rounded: 'lg',
    overflow: 'hidden',
    h: '2',
    w: 'full',
  },
})

export const Range = styled(Progress.Range, {
  base: {
    bg: 'brand',
    h: 'full',
    transition: 'width 0.2s ease-in-out',
    '--translate-x': '-100%',
  },
})

export const Circle = styled(Progress.Circle, {
  base: {
    '--size': '64px',
    '--thickness': '4px',
  },
})

export const CircleTrack = styled(Progress.CircleTrack, {
  base: {
    stroke: 'border',
  },
})

export const CircleRange = styled(Progress.CircleRange, {
  base: {
    stroke: 'brand',
    transitionProperty: 'stroke-dasharray, stroke',
    transitionDuration: '0.6s',
  },
})
