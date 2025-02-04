import { ColorPicker } from '@ark-ui/react'

import { menuContentBaseStyles, slideAnimation } from '@/panda/utils'
import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'

const swatchStyles = cva({
  base: {
    height: '6',
    width: '6',
    rounded: 'md',
    boxShadow:
      '0 0 0 1px var(--colors-border), 0 0 0 2px var(--colors-bg-card) inset',
  },
})

export default Pluco(ColorPicker, {
  Root: cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      gap: '1.5',
    },
  }),
  Control: cva({
    base: {
      display: 'flex',
      flexDir: 'row',
      gap: '2',
    },
  }),
  TransparencyGrid: cva({
    base: {
      rounded: 'md',
    },
  }),
  Swatch: swatchStyles,
  ValueSwatch: swatchStyles,
  Content: cva({
    base: {
      display: 'flex',
      position: 'relative',
      flexDirection: 'column',
      gap: '4',
      p: '6',
      maxH: '85vh',
      w: 'var(--color-picker-content-width, 284px)',

      ...menuContentBaseStyles,
      ...slideAnimation,

      _hidden: {
        opacity: 0,
        visibility: 'hidden',
      },

      transition: '0.2s',
    },
  }),
  Area: cva({
    base: {
      h: '36',
      rounded: 'md',
      overflow: 'hidden',
    },
  }),
  AreaBackground: cva({
    base: {
      h: 'full',
    },
  }),
  AreaThumb: cva({
    base: {
      rounded: 'full',
      h: '2.5',
      w: '2.5',
      shadow: 'white 0px 0px 0px 2px, black 0px 0px 2px 1px',
      outline: 'none',
    },
  }),
  ChannelSlider: cva({
    base: {
      rounded: 'md',
    },
  }),
  ChannelSliderTrack: cva({
    base: {
      h: '3',
      rounded: 'md',
    },
  }),
  ChannelSliderThumb: cva({
    base: {
      rounded: 'full',
      h: '2.5',
      w: '2.5',
      shadow: 'white 0px 0px 0px 2px, black 0px 0px 2px 1px',
      transform: 'translate(-50%, -50%)',
      outline: 'none',
    },
  }),
  SwatchGroup: cva({
    base: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gap: '2',
      bg: 'bg.surface',
    },
  }),
  SwatchTrigger: cva({
    base: {
      w: 'min-content',
      rounded: 'md',
      focusRing: 'outside',
    },
  }),
})
