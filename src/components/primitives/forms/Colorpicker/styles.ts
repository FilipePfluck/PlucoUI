import { styled } from '@/styled-system/jsx'
import { ColorPicker } from '@ark-ui/react'

import { menuContentBaseStyles, slideAnimation } from '@/panda/utils'

export const Root = styled(ColorPicker.Root, {
  base: {
    display: 'flex',
    flexDir: 'column',
    gap: '1.5',
  },
})

export const Label = styled(ColorPicker.Label, {
  base: {},
})

export const Control = styled(ColorPicker.Control, {
  base: {
    display: 'flex',
    flexDir: 'row',
    gap: '2',
  },
})

export const ChannelInput = styled(ColorPicker.ChannelInput, {
  base: {},
})

export const ValueText = styled(ColorPicker.ValueText, { base: {} })

export const Trigger = styled(ColorPicker.Trigger, {
  base: {},
})

export const TransparencyGrid = styled(ColorPicker.TransparencyGrid, {
  base: {
    rounded: 'md',
  },
})

export const Swatch = styled(ColorPicker.Swatch, {
  base: {
    height: '6',
    width: '6',
    rounded: 'md',
    boxShadow:
      '0 0 0 1px var(--colors-border), 0 0 0 2px var(--colors-bg-card) inset',
  },
})

export const Positioner = styled(ColorPicker.Positioner, {
  base: {},
})

export const Content = styled(ColorPicker.Content, {
  base: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    gap: '4',
    p: '6',
    maxH: '85vh',
    // TODO - fix this
    w: '299px',

    ...menuContentBaseStyles,
    ...slideAnimation,

    '&[hidden]': {
      opacity: 0,
      visibility: 'hidden',
    },

    transition: '0.2s',
  },
})

export const Area = styled(ColorPicker.Area, {
  base: {
    h: '36',
    rounded: 'md',
    overflow: 'hidden',
  },
})

export const AreaBackground = styled(ColorPicker.AreaBackground, {
  base: {
    h: 'full',
  },
})

export const AreaThumb = styled(ColorPicker.AreaThumb, {
  base: {
    rounded: 'full',
    h: '2.5',
    w: '2.5',
    shadow: 'white 0px 0px 0px 2px, black 0px 0px 2px 1px',
    outline: 'none',
  },
})

export const ChannelSlider = styled(ColorPicker.ChannelSlider, {
  base: {
    rounded: 'md',
  },
})

export const ChannelSliderTrack = styled(ColorPicker.ChannelSliderTrack, {
  base: {
    h: '3',
    rounded: 'md',
  },
})

export const ChannelSliderThumb = styled(ColorPicker.ChannelSliderThumb, {
  base: {
    rounded: 'full',
    h: '2.5',
    w: '2.5',
    shadow: 'white 0px 0px 0px 2px, black 0px 0px 2px 1px',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
  },
})

export const SwatchGroup = styled(ColorPicker.SwatchGroup, {
  base: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '2',
    bg: 'bg.card',
  },
})

export const SwatchTrigger = styled(ColorPicker.SwatchTrigger, {
  base: {},
})

export const SwatchIndicator = styled(ColorPicker.SwatchIndicator, {
  base: {},
})

export const View = styled(ColorPicker.View, {
  base: {},
})

export const EyeDropperTrigger = styled(ColorPicker.EyeDropperTrigger, {
  base: {},
})
