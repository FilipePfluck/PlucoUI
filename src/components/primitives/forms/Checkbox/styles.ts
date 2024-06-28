import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'
import { Checkbox } from '@ark-ui/react'

export default Pluco(Checkbox, {
  Root: cva({
    base: {
      display: 'flex',
      align: 'center',
      gap: '2',
    },
  }),
  Control: cva({
    base: {
      cursor: 'pointer',
      bg: 'bg.surface',
      h: '6',
      w: '6',
      rounded: 'md',
      display: 'flex',
      center: 'flex',
      boxShadow: 'sm',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'border',
      transition: '0.2s border-color',
      position: 'relative',

      _after: {
        content: '""',
        h: '4',
        w: '4',
        rounded: 'sm',
        bg: 'border.brand',
        transition: '0.2s',
        position: 'absolute',
        center: 'absolute',

        opacity: 0,
        transform: 'translate(-50%, -50%) scale(50%)',
      },

      _checked: {
        borderColor: 'border.brand',

        _after: {
          opacity: 1,
          transform: 'translate(-50%, -50%) scale(100%)',
        },
      },

      '[aria-invalid="true"] &': {
        borderColor: 'border.danger',

        _after: {
          bg: 'bg.danger',
        },
      },

      _disabled: {
        bg: 'bg.disabled',
        borderColor: 'border.disabled',
        cursor: 'not-allowed',

        _after: {
          bg: 'border.disabled',
        },
      },

      _siblingFocusVisible: {
        outline: '2px solid token(colors.border.ring)',
      },
    },
  }),
  Label: cva({
    base: {
      color: { base: 'fg.important', _disabled: 'fg.disabled' },
      textStyle: 'bodySm',
      cursor: { base: 'pointer', _disabled: 'not-allowed' },
    },
  }),
})
