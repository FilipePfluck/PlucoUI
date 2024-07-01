import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'
import { Slider } from '@ark-ui/react'

export default Pluco(Slider, {
  Root: cva({
    base: {
      display: 'flex',
      gap: '2',
      w: 'full',
      h: 'full',

      _horizontal: {
        flexDir: 'column',
      },
      _vertical: {
        flexDir: 'row',
      },
    },
  }),
  Control: cva({
    base: {
      _horizontal: {
        w: 'full',
      },
      _vertical: {
        h: 'full',
      },
    },
  }),
  Track: cva({
    base: {
      bg: 'border',

      rounded: 'full',
      display: 'flex',
      align: 'center',
      flex: 1,
      overflow: 'hidden',

      _horizontal: {
        w: 'full',
        h: '1',
      },
      _vertical: {
        w: '1',
        h: 'full',
      },
    },
  }),
  Range: cva({
    base: {
      bg: 'bg.brand',

      _horizontal: {
        h: 'full',
      },
      _vertical: {
        w: 'full',
      },
    },
  }),
  Thumb: cva({
    base: {
      bg: 'bg.surface',
      borderColor: 'border.brand',
      rounded: 'full',
      borderWidth: '2px',
      shadow: 'sm',
      zIndex: 1,
      w: '4',
      h: '4',
      outlineColor: 'border.ring',
      cursor: 'pointer',

      // 2px is half of 4px which is the size of the slider track
      _horizontal: {
        '--slider-thumb-transform': 'translate(-50%, calc(-50% - 2px))',
      },
      _vertical: {
        '--slider-thumb-transform': 'translate(calc(-50% + 2px), 50%)',
      },
    },
  }),
  MarkerGroup: cva({
    base: {
      mt: '1',
      zIndex: '0',
    },
  }),
  Marker: cva({
    base: {
      textStyle: 'bodySm',
      color: 'fg.subtle',
      '--before-background': 'colors.fg',
      _before: {
        bg: 'fg.important',
        content: "''",
        display: 'block',
        h: '1',
        w: '1',
        rounded: 'full',
        position: 'relative',
      },

      _horizontal: {
        _before: {
          left: '50%',
          transform: 'translateX(-50%)',
          mt: '-16px',
          mb: '12px',
        },
      },

      _vertical: {
        _before: {
          ml: '-12px',
          mb: '-12px',
        },
      },
    },
  }),
})
