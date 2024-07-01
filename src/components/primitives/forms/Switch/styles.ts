import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'
import { Switch } from '@ark-ui/react'

export default Pluco(Switch, {
  Root: cva({
    base: {
      display: 'flex',
      gap: '4',
    },
  }),
  Control: cva({
    base: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',

      width: '10',
      height: '6',
      rounded: 'full',
      boxShadow: 'sm',
      position: 'relative',
      bg: 'border',
      '&[data-state="checked"]': { bg: 'border.brand' },

      transitionDuration: 'normal',
      transitionProperty: 'background',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

      // this makes focus indication work
      _siblingFocusVisible: {
        outline: '2px solid token(colors.border.ring)',
      },
    },
  }),
  Thumb: cva({
    base: {
      display: 'block',
      width: '18px',
      height: '18px',
      bg: 'white',
      rounded: 'full',
      boxShadow: `sm`,

      transitionDuration: 'normal',
      transitionProperty: 'transform, background',
      transform: 'translateX(4px)',
      '&[data-state="checked"]': { transform: 'translateX(18px)' },
    },
  }),
  Label: cva({
    base: {
      textStyle: 'bodyMd',
      color: { base: 'fg.important', _disabled: 'fg.disabled' },
    },
  }),
})
