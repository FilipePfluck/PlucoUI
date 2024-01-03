import { styled } from '@/styled-system/jsx'
import { Slider } from '@ark-ui/react'

export const Root = styled(Slider.Root, {
  base: {
    display: 'flex',
    flexDir: 'column',
    gap: '2',
  },
})

export const Label = styled(Slider.Label, {})

export const ValueText = styled(Slider.ValueText, {})

export const Control = styled(Slider.Control, {})

export const Track = styled(Slider.Track, {
  base: {
    bg: 'border',
    w: 'full',
    minW: '400px',
    h: '1',
    rounded: 'full',
    display: 'flex',
    align: 'center',
    flex: 1,
    overflow: 'hidden',
  },
})

export const Range = styled(Slider.Range, {
  base: {
    bg: 'brand',
    h: 'full',
  },
})

export const Thumb = styled(Slider.Thumb, {
  base: {
    bg: 'border',
    borderColor: 'brand',
    rounded: 'full',
    borderWidth: '2px',
    shadow: 'sm',
    zIndex: 1,
    w: '4',
    h: '4',
    '--slider-thumb-transform': 'translate(-50%, -50%)',
    outlineColor: 'border.ring  q',
  },
})

export const MarkerGroup = styled(Slider.MarkerGroup, {})

export const Marker = styled(Slider.Marker, {})
