import { Accordion } from '@ark-ui/react'
import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'

export default Pluco(Accordion, {
  Root: cva({
    base: {
      rounded: 'md',
      width: '80',
      bg: 'border',
      boxShadow: 'lg',
    },
  }),
  Item: cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      overflow: 'hidden',
      position: 'relative',
      mt: '1px',
      _first: {
        roundedTop: 'md',
        mt: '0px',
      },
      _last: {
        roundedBottom: 'md',
      },
      _focusVisibleWithin: {
        zIndex: '5',
        outline: '2px solid token(colors.border.ring)',
      },
    },
  }),
  ItemTrigger: cva({
    base: {
      cursor: 'pointer',
      bg: 'bg.surface',
      p: '4',
      w: 'full',
      h: '10',
      flex: 1,
      display: 'flex',
      align: 'center',
      justify: 'space-between',
      color: 'fg.important',
      textStyle: 'headingXS',
      boxShadow: 'md',
      zIndex: '2',
      outline: 'none',

      _disabled: {
        color: 'fg.disabled',
        cursor: 'not-allowed',
      },
    },
  }),
  ItemContent: cva({
    base: {
      color: 'fg',
      bg: 'bg.surface.hovered',
      overflow: 'hidden',
      p: '4',

      transitionProperty: 'height, padding',

      _dataOpen: {
        animation: 'accordionSlideDown',
      },

      _dataClosed: {
        animation: 'accordionSlideUp',
      },
    },
  }),
})
