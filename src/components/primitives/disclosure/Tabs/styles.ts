import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'
import { Tabs } from '@ark-ui/react'

export default Pluco(Tabs, {
  Root: cva({
    base: {
      display: 'flex',
      position: 'relative',
      bg: 'bg.surface',
      boxShadow: 'lg',
      rounded: 'lg',
      w: 'full',
      maxW: 'max-content',
      _horizontal: {
        flexDirection: 'column',
      },
      _vertical: {
        flexDirection: 'row',
      },
    },
  }),
  List: cva({
    base: {
      display: 'flex',
      justify: 'center',
      flexShrink: '0',
      _horizontal: {
        flexDirection: 'row',
        boxShadow: '0 -1px 0 0 inset token(colors.border)',
        gap: '4',
        px: '4',
        pt: '4',
      },
      _vertical: {
        flexDirection: 'column',
        boxShadow: '-1px 0 0 0 inset token(colors.border)',
        gap: '1',
        py: '4',
        pl: '4',
      },
      overflow: 'auto',
      position: 'relative',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      zIndex: '3',
    },
  }),
  Trigger: cva({
    base: {
      display: 'flex',
      center: 'flex',
      cursor: 'pointer',
      color: 'fg',
      textStyle: 'bodyLg',
      flexShrink: '0',
      gap: '2',
      px: '2',
      outlineColor: 'brand',

      transitionDuration: 'normal',
      transitionProperty: 'color, background, border-color',
      transitionTimingFunction: 'default',
      whiteSpace: 'nowrap',

      _hover: {
        color: 'fg.important',
      },

      _disabled: {
        color: 'fg.disabled',
        cursor: 'not-allowed',
        _hover: {
          color: 'fg.disabled',
        },
      },

      _selected: {
        color: 'fg.brand',
        _hover: {
          color: 'fg.brand',
        },
      },

      _vertical: {
        justify: 'space-between',
        w: 'full',
      },

      _horizontal: {
        pb: '2',
      },
    },
  }),
  Indicator: cva({
    base: {
      bg: 'border.brand',

      _horizontal: {
        height: '2px',
        width: 'var(--width)',
        bottom: '0',
      },
      _vertical: {
        width: '2px',
        height: 'var(--height)',
        right: '0',
      },
    },
  }),
  Content: cva({
    base: {
      display: 'flex',
      center: 'flex',
      flexDir: 'column',
      fontSize: '96px',
      color: 'fg',
      opacity: 1,

      _horizontal: {
        px: '4',
        py: '8',
        minH: '60',
      },

      _vertical: {
        px: '8',
        py: '4',
      },

      transitionDuration: 'slow',

      _dataClosed: {
        position: 'absolute',
        opacity: 0,
        visibility: 'hidden',

        _horizontal: {
          bottom: '0px',
          transform: 'translateX(var(--tab-hidden-distance-x))',
          w: 'full',
        },
        _vertical: {
          right: '0px',
          transform: 'translateY(var(--tab-hidden-distance-y))',
          h: 'full',
        },
      },
    },
  }),
})
