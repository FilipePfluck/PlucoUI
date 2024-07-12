import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'
import { SegmentGroup } from '@ark-ui/react'

// TODO - unify styles with tab component

export default Pluco(SegmentGroup, {
  Root: cva({
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
  Indicator: cva({
    base: {
      bg: 'bg.brand',
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
  Item: cva({
    base: {
      display: 'flex',
      center: 'flex',
      cursor: 'pointer',
      color: 'fg',
      textStyle: 'bodyLg',
      flexShrink: '0',
      px: '2',
      outlineColor: 'border.ring',

      transitionDuration: 'normal',
      transitionProperty: 'color, background, border-color',
      transitionTimingFunction: 'default',
      whiteSpace: 'nowrap',

      _hover: {
        color: 'fg',
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
})
