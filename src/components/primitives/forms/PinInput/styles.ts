import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'
import { PinInput } from '@ark-ui/react'

export default Pluco(PinInput, {
  Root: cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      gap: '3',
    },
  }),
  Label: cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      gap: '3',
    },
  }),
  Control: cva({
    base: {
      display: 'flex',
      gap: '2',
    },
  }),
  Input: cva({
    base: {
      h: '10',
      w: '9',
      p: '3',
      bg: 'bg.surface',
      boxShadow: 'sm',
      rounded: 'md',
      transition: '0.2s',
      color: 'fg',

      display: 'flex',
      align: 'center',
      gap: '2',

      _placeholder: {
        color: 'fg.unimportant',
        fontSize: 'sm',
      },

      outline: 'none',
      borderWidth: '1px',
      borderColor: {
        base: 'border',
        _focus: 'border.brand',
      },
      '[aria-invalid]  &': { borderColor: 'border.danger' },
      _disabled: {
        bg: 'bg.disabled',
        borderColor: 'border.disabled',
        cursor: 'not-allowed',
        color: 'fg.disabled',

        _placeholder: {
          color: 'fg.disabled',
        },
      },
    },
  }),
})
